import { useFadeIn } from '../hooks/useFadeIn';
import AboutPic from '../assets/about.jpg';

const About = () => {
  const [titleRef, titleClasses] = useFadeIn();
  const [contentRef, contentClasses] = useFadeIn();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
        <div className="floating-elements absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            <div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-8 relative z-20">
            <h2 ref={titleRef} className={`section-title text-3xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent ${titleClasses}`}>
                About Me
            </h2>
            <div ref={contentRef} className={`about-content grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-center ${contentClasses}`}>
                <div className="about-image relative text-center">
                    <img src={AboutPic} alt="Anis Yayor" className="max-w-[300px] w-full rounded-2xl grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-105 inline-block" />
                </div>
                <div className="about-text text-lg text-slate-300 leading-loose text-center md:text-left">
                    <p className="mb-4">
                        I'm a web developer currently in my final year of studying IT, with a strong passion for
                        building user-friendly websites and web apps. I may not have industry experience yet, but I’ve
                        spent the past few years sharpening my skills through personal projects, university assignments,
                        and constantly learning new tools and frameworks.
                    </p>
                    <p>
                        I enjoy working with modern front-end tech like React, Next.js, and Tailwind CSS. I’ve built
                        several real-world projects on my own and with teams, focusing on good UX, clean code, and
                        performance. I also like exploring new trends in tech and sharing knowledge with peers whenever
                        I can.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;