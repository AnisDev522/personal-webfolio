import SkillCard from './SkillCard';
import { useFadeIn } from '../hooks/useFadeIn';

const frontendSkills = [
  { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

const backendSkills = [
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const designSkills = [
  { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', customStyle: { filter: 'brightness(3.8) contrast(1.2)' } },
];

const TechStack = () => {
    const [titleRef, titleClasses] = useFadeIn();
    const [descRef, descClasses] = useFadeIn();
    
    return (
        <section id="proficiency" className="py-20 lg:py-28 relative overflow-hidden bg-slate-800/30">
            <div className="floating-elements absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div>
            </div>
            <div className="container max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center">
                    <div ref={titleRef} className={titleClasses}>
                        <h2 className={`text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent`}>
                            My Tech Stack
                        </h2>
                    </div>
                    <div ref={descRef} className={descClasses}>
                        <p className={`text-lg text-slate-400 max-w-2xl mx-auto`}>
                            I work with a variety of modern tools and technologies to build and design amazing digital products.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-center text-violet-400 mb-8">Frontend</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                            {frontendSkills.map(skill => <SkillCard key={skill.name} {...skill} />)}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-center text-violet-400 mb-8">Backend & Database</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                            {backendSkills.map(skill => <SkillCard key={skill.name} {...skill} />)}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-center text-violet-400 mb-8">Design & Tools</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                            {designSkills.map(skill => <SkillCard key={skill.name} {...skill} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;