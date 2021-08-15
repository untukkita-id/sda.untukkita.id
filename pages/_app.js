import 'tailwindcss/tailwind.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faPhone,
  faMapMarkerAlt,
  faClinicMedical,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

config.autoA11y = true;

library.add(faHome, faPhone, faMapMarkerAlt, faInstagram, faClinicMedical);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
