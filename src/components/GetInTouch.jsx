// src/components/GetInTouch.jsx

import Chatbot from './Chatbot';
import ContactInfo from './ContactInfo';
import { useFadeIn } from '../hooks/useFadeIn';
import { forwardRef } from 'react';

// เราต้องใช้ forwardRef กับ component ลูก ดังนั้นเราจะเตรียมมันไว้ที่นี่
// แต่การแก้ไขหลักคือการส่ง props ลงไปตรงๆ
const GetInTouch = () => {
    const [titleRef, titleClasses] = useFadeIn();
    const [contactRef, contactClasses] = useFadeIn({ delay: 100 });
    const [chatRef, chatClasses] = useFadeIn({ delay: 200 });

    return (
        <section id="ai-chat" className="py-20 lg:py-28 relative overflow-hidden">
            <div className="floating-elements absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                <div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-8 relative z-20">
                <h2 ref={titleRef} className={`section-title text-3xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent ${titleClasses}`}>
                    Get In Touch
                </h2>
                {/* นี่คือ div ที่เป็น Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* ลบ div ที่ห่อหุ้มออก และส่ง props ลงไปตรงๆ */}
                    <ContactInfo fwdRef={contactRef} className={contactClasses} />
                    
                    {/* ทำเช่นเดียวกันกับ Chatbot */}
                    <Chatbot fwdRef={chatRef} className={chatClasses} />

                </div>
            </div>
        </section>
    );
};

export default GetInTouch;