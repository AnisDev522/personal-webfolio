import ProjectCard from './ProjectCard';
import { useFadeIn } from '../hooks/useFadeIn';

import CarRentalImg from '../assets/car-rental.png';
import HadithImg from '../assets/hadith.png';
import HnImg from '../assets/hn.png';

const projectData = [
    {
        image: CarRentalImg,
        title: "Car Rental System",
        description: "A modern all-in-one Car Rental & Buying Platform — built with a sleek and intuitive UI that makes renting or buying cars as easy as scrolling a feed.",
        techs: ["php", "mysql", "Tailwind", "chart.js"],
        githubUrl: "https://github.com/AnisDev522/rental_car"
    },
    {
        image: HadithImg,
        title: "Thai Hadith",
        description: "Thailand’s first and only full-scale Hadith web application in Thai — built from the ground up with modern UX/UI design, and full mobile support.",
        techs: ["php", "mysql", "AJAX", "bootstrap"],
        githubUrl: "https://github.com/AnisDev522/thai_hadith"
    },
    {
        image: HnImg,
        title: "OPD System",
        description: "A user-friendly outpatient medical record system designed for small hospitals. This system focuses heavily on clean UX/UI to ensure staff can work efficiently.",
        techs: ["php", "mysql", "Tailwind", "chart.js"],
        githubUrl: "https://github.com/AnisDev522/opd"
    }
];

const Projects = () => {
    const [titleRef, titleClasses] = useFadeIn();

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="floating-elements absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div><div className="floating-element"></div>
            </div>
            <div className="container max-w-7xl mx-auto px-8 relative z-20">
                <h2 ref={titleRef} className={`section-title text-3xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent ${titleClasses}`}>
                    Featured Projects
                </h2>
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;