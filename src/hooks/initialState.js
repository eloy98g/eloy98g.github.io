// Logos
import flutter from '../assets/logos/flutter.png';
import firebase from '../assets/logos/firebase.png';
import android from '../assets/logos/android.png';
import ios from '../assets/logos/ios.png';
import react from '../assets/logos/react.png';
import web from '../assets/logos/web.png';
import redux from '../assets/logos/redux.png';

// Assets
import mobile1 from '../assets/projects/mcdo/1.png';
import mobile2 from '../assets/projects/mcdo/2.png';
import mobile3 from '../assets/projects/mcdo/3.png';
import dash1 from '../assets/projects/mcdo/dash1.png';
import labdash1 from '../assets/projects/labora/lab-dash1.png';
import labapp1 from '../assets/projects/labora/lab-app1.png';
import labapp2 from '../assets/projects/labora/lab-app2.png';
import labapp3 from '../assets/projects/labora/lab-app3.png';
import labora from '../assets/labora.png';
import mcdologo from '../assets/mcdologo.png';
import clapfy from '../assets/clapfy.png'

const initialState = {
  projects: [
    {
      id: 1,
      title: 'Ronald Mcdonald',
      subtitle: 'Mobile App',
      desc: 'App para las familias que hacen uso de los servicios de la Fundación',
      team: [
        { user: 'jesusrp98', name: 'Jesús Rodríguez' },
        { user: 'veves', name: 'Veves' }
      ],
      techs: [
        { icon: flutter, name: 'Flutter' },
        { icon: firebase, name: 'Firebase' },
        { icon: android, name: 'Android' },
        { icon: ios, name: 'iOS' }
      ],
      images: [mobile1, mobile2, mobile3],
      headers: [clapfy, mcdologo]
    },
    {
      id: 2,
      title: 'Ronald Mcdonald',
      subtitle: 'Dashboard web',
      desc: 'Panel de control web de gestión de la Fundación Ronald McDonald',
      team: [
        { user: 'jesusrp98', name: 'Jesús Rodríguez' },
        { user: 'veves', name: 'Veves' }
      ],
      techs: [
        { icon: flutter, name: 'Flutter' },
        { icon: firebase, name: 'Firebase' },
        { icon: web, name: 'Web' }
      ],
      images: [dash1],
      headers: [clapfy, mcdologo]
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
        { icon: web, name: 'Web' }
      ],
      images: [labdash1],
      headers: [labora]
    },
    {
      id: 4,
      title: 'Labora',
      subtitle: 'Mobile app',
      desc: 'App de búsqueda de trabajos temporales',
      team: [{ user: 'peralson', name: 'Pablo Peralta' }],
      techs: [
        { icon: react, name: 'React Native' },
        { icon: redux, name: 'React Redux' },
        { icon: android, name: 'Android' },
        { icon: ios, name: 'iOS' }
      ],
      images: [labapp1, labapp2, labapp3],
      headers: [labora]
    },
  ],
};

export default initialState;
