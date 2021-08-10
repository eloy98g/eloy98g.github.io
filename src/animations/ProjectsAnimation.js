// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsAnimation = () => {
  const span = (text) => {
    const node = document.createElement('span');
    node.textContent = text;
    node.classList.add('text_item');
    return node;
  };

  const byLetter = (text) => [...text].map(span);

  const targetList = document.querySelectorAll('[split-by]');

  targetList.forEach((node) => {
    const type = node.getAttribute('split-by');
    let nodes = null;

    if (type === 'letter') {
      nodes = byLetter(node.innerText);
    }

    if (nodes) node.firstChild.replaceWith(...nodes);
  });

  gsap.to('.projects .content .sectitle', {
    opacity: 1,
    duration: 2,
    ease: 'Power0.out',
    scrollTrigger: {
      trigger: '.projects .content .sectitle',
      start: 'top 90%',
    },
  });

  gsap.to('.mcdoimg', {
    duration: 1.5,
    opacity: 1,
    transform: 'translateY(0)',
    ease: 'Sine.easeout',
    scrollTrigger: {
      trigger: '.mcdotext',
      start: 'top 90%',
    },
  });

  gsap.to('.laboraimg', {
    duration: 1.5,
    opacity: 1,
    transform: 'translateY(0)',
    ease: 'Sine.easeout',
    scrollTrigger: {
      trigger: '.laboratext',
      start: 'top 90%',
    },
  });

  gsap.to('.mcdotext .text_item', {
    opacity: 1,
    stagger: 0.02,
    ease: 'Sine.easeout',
    scrollTrigger: {
      trigger: '.mcdotext',
      start: 'top 90%',
    },
  });

  gsap.to('.laboratext .text_item', {
    opacity: 1,
    transform: 'translateX(0)',
    stagger: 0.02,
    ease: 'Sine.easeout',
    scrollTrigger: {
      trigger: '.laboratext',
      start: 'top 90%',
    },
  });
}

export default projectsAnimation