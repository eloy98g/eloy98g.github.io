// Logos
import flutter from '../assets/logos/flutter.png';
import firebase from '../assets/logos/firebase.png';
import android from '../assets/logos/android.png';
import ios from '../assets/logos/ios.png';
import react from '../assets/logos/react.png';
import web from '../assets/logos/web.png';
import redux from '../assets/logos/redux.png';

// Assets
import mcdoapp1 from '../assets/mocks/mcdo1.png';
import mcdoapp2 from '../assets/mocks/mcdo2.png';
import mcdoapp3 from '../assets/mocks/mcdo3.png';
import mcdodash1 from '../assets/mocks/mcdodash1.png';
import mcdodash2 from '../assets/mocks/mcdodash2.png';
import mcdogeneral from '../assets/mocks/mcdogeneral.png';

import laboraapp1 from '../assets/mocks/labora1.png';
import laboraapp2 from '../assets/mocks/labora2.png';
import laboradash1 from '../assets/mocks/laboradash1.png';
import laboradash2 from '../assets/mocks/laboradash2.png';
import laborageneral from '../assets/mocks/laborageneral.png';

// Icons
import labora from '../assets/labora.png';
import mcdologo from '../assets/mcdologo.png';
import clapfy from '../assets/clapfy.png';

const initialState = {
  projects: [
    {
      id: 1,
      title: 'Ronald Mcdonald',
      subtitle: 'App',
      desc:
        'App para las familias que hacen uso de los servicios de la Fundación',
      team: [
        { user: 'jesusrp98', name: 'Jesús Rodríguez' },
        { user: 'veves', name: 'Veves' },
      ],
      techs: [
        { icon: flutter, name: 'Flutter' },
        { icon: firebase, name: 'Firebase' },
        { icon: android, name: 'Android' },
        { icon: ios, name: 'iOS' },
      ],
      images: [mcdoapp1],
      headers: [clapfy, mcdologo],
      details: {
        title: {
          text: 'Proyecto Fundación Ronald Mcdonald',
          subtext: 'Sistema de gestión de las familias que entren utilicen sus servicios',
          image: mcdogeneral ,
        },
        middle: [
          {
            text: 'aaaa',
            image: mcdoapp1 ,
            meta: 'reverse',
          },
        ],
        end: {
          title: '',
          image: {},
        },
      },
    },
    {
      id: 2,
      title: 'Ronald Mcdonald',
      subtitle: 'Dashboard web',
      desc: 'Panel de control web de gestión de la Fundación Ronald McDonald',
      team: [
        { user: 'jesusrp98', name: 'Jesús Rodríguez' },
        { user: 'veves', name: 'Veves' },
      ],
      techs: [
        { icon: flutter, name: 'Flutter' },
        { icon: firebase, name: 'Firebase' },
        { icon: web, name: 'Web' },
      ],
      images: [mcdodash1],
      headers: [clapfy, mcdologo],
    },
    {
      id: 3,
      title: 'Labora',
      subtitle: 'Dashboard web',
      desc: 'Panel de control web de gestión privada de las empresas',
      team: [{ user: 'peralson', name: 'Pablo Peralta' }],
      techs: [
        { icon: react, name: 'React Native' },
        { icon: redux, name: 'React Redux' },
        { icon: web, name: 'Web' },
      ],
      images: [laboraapp1],
      headers: [labora],
    },
    {
      id: 4,
      title: 'Labora',
      subtitle: 'App',
      desc: 'App de búsqueda de trabajos temporales',
      team: [{ user: 'peralson', name: 'Pablo Peralta' }],
      techs: [
        { icon: react, name: 'React Native' },
        { icon: redux, name: 'React Redux' },
        { icon: android, name: 'Android' },
        { icon: ios, name: 'iOS' },
      ],
      images: [laboradash1],
      headers: [labora],
    },
  ],
};

export default initialState;
