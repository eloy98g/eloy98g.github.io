// Logos
import flutter from '../assets/logos/flutter.png';
import firebase from '../assets/logos/firebase.png';
import android from '../assets/logos/android.png';
import ios from '../assets/logos/ios.png';
import react from '../assets/logos/react.png';
import web from '../assets/logos/web.png';
import redux from '../assets/logos/redux.png';

// Assets
import mcdoapp from '../assets/mocks/mcdo4.png';
import mcdogeneral from '../assets/mocks/mcdogeneral2.png';
import mcdobg from '../assets/mocks/mcdobg.jpg';

import laboraapp from '../assets/mocks/laboraapp1.png';
import laborageneral2 from '../assets/mocks/laborageneral2.png';
import laborabg from '../assets/mocks/laborabg.jpg';


const initialState = {
  projects: [
    {
      id: 'vbG6rLT4UKhS4z3u',
      style: 'linear-gradient(#f7634d, #f6be2b)',
      link: 'https://fundacionronald.org/',
      title: 'FUNDACIÓN INFANTIL RONALD MCDONALD',
      copy: 'Ayudando a familias por toda España',
      resume: `La Fundación tiene como misión crear, buscar y apoyar programas que mejoren de forma directa la salud y el bienestar de los/las niños/as.`,
      subresume: `El proyecto consta de una app para las familias que acceden a los servicios de la Fundación y un panel de control web de gestión utilizado por los administradores.`,
      roles: ['Desarrollador Frontend'],
      first: mcdoapp,
      second: mcdogeneral,
      team: ['https://github.com/jesusrp98', 'https://github.com/veves'],
      tech: [flutter, firebase, android, ios, web],
      mediaImg: mcdobg,
      android: 'https://play.google.com/store/apps/details?id=com.clapfy.phobos&hl=es_419&gl=US',
      ios: 'https://apps.apple.com/bj/app/fundaci%C3%B3n-ronald-mcdonald/id1554478727',
    },
    {
      id: '4KG5SWu7cCnfnupH',
      style: 'linear-gradient( #4b4797,#61bc9e)',
      link: 'https://www.labora.app/',
      title: 'LABORA',
      copy: 'Contrata tu personal en un click',
      resume: `Labora es una empresa dedicada a facilitar las contrataciones temporales al mñaximo, unifica todas las fuentes de personal, gestión legal, control de horas, pagos, seguridad social...`,
      roles: ['Desarrollador Frontend', 'Asistente de diseño'],
      first: laboraapp,
      second: laborageneral2,
      team: ['https://github.com/peralson'],
      tech: [react, redux, android, ios, web],
      mediaImg: laborabg,
      android: 'https://www.labora.app/',
      ios: 'https://www.labora.app/',
    },
  ],
};

export default initialState;
