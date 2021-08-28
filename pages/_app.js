import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';

import {
  faHome,
  faPhone,
  faMapMarkerAlt,
  faClinicMedical,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as ga from '../lib/ga';

config.autoA11y = true;

library.add(faHome, faPhone, faMapMarkerAlt, faInstagram, faClinicMedical, faInfoCircle);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;
