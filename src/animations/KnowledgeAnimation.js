// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const knowledgeAnimation = () => {
  gsap.to('.knowledge .content .item', {
    opacity: 1,
    duration: 2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.knowledge .content .item',
      start: 'top 90%',
    },
  });
};

export default knowledgeAnimation;
