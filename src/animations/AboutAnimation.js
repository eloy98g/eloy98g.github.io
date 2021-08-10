import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const aboutAnimation = () => {
  gsap.to('.copy', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.copy',
    },
  });
  gsap.to('.first', {
    width: '100%',
    duration: 1,
    scrollTrigger: {
      trigger: '.first',
    },
  });
  gsap.to(
    '.second',
    {
      width: '100%',
      duration: 1,
      scrollTrigger: {
        trigger: '.second',
      },
    },
    '-=0.3'
  );
  gsap.to('.title', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.title',
    },
  });
};

export default aboutAnimation;
