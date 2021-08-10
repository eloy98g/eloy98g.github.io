import gsap from 'gsap';

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

const heroAnimation = () => {
  tl.set('body', { overflow: 'hidden' });
  tl.to('.text', { y: '0%', duration: 1 });
  tl.to('body', { overflow: 'visible', duration: '0' });
  tl.to('.slider', {
    y: '-100%',
    duration: 2,
    delay: 0.5,
    display: 'block',
  });
  tl.to('.intro', { display: 'none', duration: 0 }, '2');
  tl.to('.land-content', { display: 'block' }, '-=1.5');
  tl.to('.scroll-down', { display: 'block', duration: '1' }, '-=1.5');
};

export default heroAnimation;
