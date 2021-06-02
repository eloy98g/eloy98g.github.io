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
      images: [mobile1, mobile2, mobile3],
      headers: [clapfy, mcdologo]
    },
    {
      id: 3,
      title: 'Labora',
      subtitle: 'Workers app',
      desc: 'App de búsqueda de trabajos temporales',
      team: [{ user: 'peralson', name: 'Pablo Peralta' }],
      techs: [
        { icon: react, name: 'React Native' },
        { icon: redux, name: 'React Redux' },
        { icon: android, name: 'Android' },
        { icon: ios, name: 'iOS' }
      ],
      images: [mobile1, mobile2, mobile3],
      headers: [labora]
    },
    {
      id: 4,
      title: 'Labora',
      subtitle: 'Dashboard web',
      desc: 'Panel de control web de gestión privada de las empresas',
      team: [{ user: 'peralson', name: 'Pablo Peralta' }],
      techs: [
        { icon: react, name: 'React Native' },
        { icon: redux, name: 'React Redux' },
        { icon: web, name: 'Web' }
      ],
      images: [mobile1, mobile2, mobile3],
      headers: [labora]
    }
  ],
};

export default initialState;
