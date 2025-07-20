import { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import ConfirmationModal from './ConfirmationModal';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const Aiavatar = () => (
    <div className="ai-avatar flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.486 2 2 6.486 2 12v2c0 .28.22.5.5.5h1.313C4.912 18.349 8.21 21 12 21s7.088-2.651 8.187-6.5H21.5c.28 0 .5-.22.5-.5v-2c0-5.514-4.486-10-10-10zm-5 11.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5S8.5 11.172 8.5 12 7.828 13.5 7 13.5zm10 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
        </svg>
    </div>
);

const TypingIndicator = () => (
    <div className="chat-message-ai flex items-start gap-3">
        <Aiavatar />
        <div className="message-content">
            <div className="bg-slate-700/80 p-4 rounded-xl rounded-tl-none">
                <div className="typing-dots">
                    <div className="typing-dot"></div><div className="typing-dot"></div><div className="typing-dot"></div>
                </div>
            </div>
        </div>
    </div>
);

const suggestedQuestions = [
    "What are his main skills?",
    "How can I contact him?",
];

const Chatbot = ({ fwdRef, className }) => {
    const [history, setHistory] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const chatDisplayRef = useRef(null);

    const personalityResponse = {
        role: "model",
        parts: [{ text: "Hi! I'm ByteBuddy, the personal assistant of Anis. I'm here to help!" }]
    };

    const initializeChat = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/text.txt');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const promptText = await response.text();
            const initialPrompt = { role: "user", parts: [{ text: promptText }] };
            setHistory([initialPrompt, personalityResponse]);
        } catch (error) {
            console.error("Failed to load initial prompt:", error);
            setHistory([{ role: "user", parts: [{ text: "You are a helpful assistant." }] }, personalityResponse]);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        initializeChat();
    }, []);

    useEffect(() => {
        if (chatDisplayRef.current) {
            chatDisplayRef.current.scrollTo({ top: chatDisplayRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [history, isLoading]);

    const handleSendMessage = async (messageText) => {
        const text = messageText.trim();
        if (!text || isLoading) return;

        const userMessage = { role: "user", parts: [{ text }] };
        const newHistory = [...history, userMessage];
        setHistory(newHistory);
        setInput('');
        setIsLoading(true);

        const payload = { contents: newHistory };

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error.message || `API request failed with status ${res.status}`);
            }
            
            const data = await res.json();
            const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response. Please try again.";
            const botMessage = { role: "model", parts: [{ text: responseText }] };
            setHistory(prev => [...prev, botMessage]);
        } catch (err) {
            console.error("API Error:", err);
            const errorMessage = { role: "model", parts: [{ text: `Oops! Something went wrong. ${err.message}` }] };
            setHistory(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(input);
    };

    const handleClearChat = () => {
        initializeChat();
        setIsModalOpen(false);
    };

    return (
        <div ref={fwdRef} className={`lg:col-span-7 ${className}`}>
            <div className="chat-container w-full bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-700/40">
                <div className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">Have a Question?</h3>
                    <p className="mt-3 text-base text-slate-400 max-w-md mx-auto">Feel free to ask Anisa, my AI, about the stuff on this page.</p>
                </div>

                <div ref={chatDisplayRef} id="chat-display" className="h-[400px] overflow-y-auto pr-4 space-y-6 mb-6">
                    {history.slice(1).map((msg, index) => (
                        <div key={index} className={`chat-message-${msg.role === 'model' ? 'ai' : 'user'} flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                             {msg.role === 'model' && <Aiavatar />}
                             <div className="message-content max-w-full overflow-hidden">
                                <div className={`${msg.role === 'model' ? 'bg-slate-700/80 rounded-tl-none' : 'bg-blue-600/80 text-white rounded-tr-none'} p-4 rounded-xl`}
                                     dangerouslySetInnerHTML={{ __html: msg.role === 'model' ? marked.parse(msg.parts[0].text) : `<p class="leading-relaxed">${msg.parts[0].text.replace(/\n/g, "<br>")}</p>` }}>
                                </div>
                             </div>
                        </div>
                    ))}
                    {isLoading && <TypingIndicator />}
                </div>

                <div id="suggested-questions" className="flex flex-wrap items-center gap-2 mb-4 border-t border-slate-700/50 pt-4">
                    <span className="text-slate-400 text-sm mr-2 hidden sm:inline">Try asking:</span>
                    {suggestedQuestions.map(q => (
                        <button key={q} onClick={() => handleSendMessage(q)} className="suggested-question-btn text-sm text-slate-300 bg-slate-700/50 px-3 py-1.5 rounded-full hover:bg-slate-700 transition-colors">
                            {q}
                        </button>
                    ))}
                    <button onClick={() => setIsModalOpen(true)} title="Clear Chat History" className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1.5 rounded-full hover:bg-red-500/40 hover:text-slate-200 transition-colors ml-auto flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                        Clear
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex items-center gap-3">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} disabled={isLoading} placeholder="Type your question here..." required autoComplete="off" className=" chat-input w-full py-3 px-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder:text-slate-500" />
                    <button type="submit" disabled={isLoading} className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 transform -rotate-45 -translate-x-px"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                    </button>
                </form>
            </div>
            <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleClearChat} />
        </div>
    );
};

export default Chatbot;