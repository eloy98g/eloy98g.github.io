import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const simpleAnim = (element, options) => {
  gsap.to(element, {
    options,
  });
};

const triggeredAnim = (element, options, triggerElement) => {
  console.log(
    `gsap.to(${element}, { ${options}, scrollTrigger: {trigger: ${triggerElement} } });`
  );
  
};

export default { simpleAnim, triggeredAnim };
