// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactFormAnimation = () => {
  const submitTl = gsap.timeline();
  submitTl.to('.msg', {
    opacity: 1,
    duration: 1,
  });
  submitTl.to(
    '.msg',
    {
      top: '-50px',
      duration: 2,
    },
    '-=1'
  );
  submitTl.to(
    '.msg',
    {
      opacity: 0,
      duration: 1,
    },
    '-=1'
  );
  submitTl.to('.msg', {
    top: '0',
    duration: 0,
  });
}

export default contactFormAnimation