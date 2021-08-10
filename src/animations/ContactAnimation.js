// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactAnimation = () => {
  gsap.to('.scroll-down', {
    display: 'none',
    scrollTrigger: {
      trigger: '.media_container',
      start: 'top 100%',
    },
  });
}

export default contactAnimation;