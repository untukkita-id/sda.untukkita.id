import 'tailwindcss/tailwind.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

config.autoA11y = true;

library.add(faHome, faPhone);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
