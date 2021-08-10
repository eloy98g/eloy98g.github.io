// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineAnimation = () => {
  gsap.to('.tl_title', {
    opacity: 1,
    duration: 3,
    ease: 'Power0.out',
    scrollTrigger: {
      trigger: '.tl_title',
      start: 'top 100%',
    },
  });
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.trigger',
      start: 'top 100%',
    },
    ease: 'Power0.easeNone',
  });
  timeline.to('.timeline .content .line', {
    left: '0%',
    duration: 1.5,
  });
  if (window.innerWidth > 480) {
    timeline.to('.ybar', {
      height: '40px',
      duration: 0.5,
      stagger: 0.5,
    });
  } else {
    timeline.to('.ybar', {
      height: '20px',
      duration: 0.5,
      stagger: 0.5,
    });
  }
  timeline.to(
    '.img',
    {
      opacity: 1,
      stagger: 0.5,
      ease: 'Power1.easeOut',
    },
    '-=1.5'
  );
  timeline.to(
    '.text',
    {
      opacity: 1,
      stagger: 0.5,
      ease: 'Power1.easeOut',
    },
    '-=4'
  );
  timeline.to('.img', {
    pointerEvents: 'auto',
    stagger: 0.5,
    ease: 'Power1.easeOut',
  });
}

export default timelineAnimation