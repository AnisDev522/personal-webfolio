const Footer = () => {
    return (
        <footer className="bg-slate-900 py-8 text-center text-slate-500 relative z-20">
            <div className="container max-w-7xl mx-auto px-8">
                <p>© {new Date().getFullYear()} Anis Yayor. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;