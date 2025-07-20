import { useFadeIn } from '../hooks/useFadeIn';

const SkillCard = ({ iconUrl, name, invert = false, customStyle = {} }) => {
    const [ref, classes] = useFadeIn();

    const imgStyle = {
        ...customStyle,
        ...(invert ? { filter: 'invert(1)' } : {}),
    };

    return (
        <div ref={ref} className={classes}>
            <div className={`skill-card flex flex-col items-center justify-center text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/80 hover:border-violet-500/50`}>
                <img src={iconUrl} alt={`${name} Icon`} className="h-14 w-14 mb-4" style={imgStyle} />
                <p className="font-semibold text-slate-200">{name}</p>
            </div>
        </div>
    );
};

export default SkillCard;