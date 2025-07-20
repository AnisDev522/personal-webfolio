import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import ProfilePic from '../assets/anis004.png';

const FloatingElements = () => (
  <div className="floating-elements absolute top-0 left-0 w-full h-full pointer-events-none z-10">
    <div className="floating-element"></div>
    <div className="floating-element"></div>
    <div className="floating-element"></div>
    <div className="floating-element"></div>
  </div>
);

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" className="hero min-h-screen flex items-center relative overflow-hidden pt-28 pb-16 lg:pt-20 bg-slate-800/30">
      <FloatingElements />
      <div ref={ref} className="container max-w-7xl mx-auto px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-center lg:text-left">
          <div className={`hero-content order-2 lg:order-1 ${inView ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
              Anis Yayor
            </h1>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Designer',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl lg:text-2xl text-slate-400 mb-8"
              repeat={Infinity}
            />
            <p className="text-lg text-slate-300 max-w-xl mb-12 mx-auto lg:mx-0">
              I love turning ideas into beautiful and functional digital experiences. With a focus on clean code and intuitive design, I build user-centered websites that don’t just work—they feel right.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
  <a href="/resume.pdf" download className="py-3 px-6 lg:py-4 lg:px-8 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 no-underline inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-110 transform-gpu">
    Get My Resume
  </a>
  <Link to="ai-chat" smooth={true} offset={-70} duration={500} className="py-3 px-6 lg:py-4 lg:px-8 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 border-2 border-indigo-400/30 hover:border-indigo-400 hover:text-indigo-300 hover:-translate-y-1 hover:shadow-md hover:shadow-indigo-500/10 transform-gpu">
    <span>AI Assistant</span>
  </Link>
</div>
          </div>
          <div className={`hero-image-container order-1 lg:order-2 flex justify-center items-center ${inView ? 'animate-[fadeInRight_1s_ease-out_0.3s]' : 'opacity-0'}`} style={{ animationFillMode: 'backwards' }}>
            <img src={ProfilePic} alt="Profile Picture" className="max-w-xs md:max-w-sm lg:max-w-full h-auto max-h-[450px] rounded-xl object-cover transition-transform duration-300 hover:scale-105 hover:rotate-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;