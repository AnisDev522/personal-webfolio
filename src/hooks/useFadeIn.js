import { useInView } from 'react-intersection-observer';

export const useFadeIn = (options = {}) => {
  const defaultOptions = {
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const { ref, inView } = useInView({ ...defaultOptions, ...options });
  
  const animationClasses = `fade-in ${inView ? 'visible' : ''}`;
  
  return [ref, animationClasses];
};