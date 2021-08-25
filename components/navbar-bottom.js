import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClinicMedical, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function NavbarButton() {
  return (
    <nav className="fixed bottom-0 bg-gray-600 w-screen h-16 px-8 flex flex-row gap-4 justify-center text-white">
      <Link href="/" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 active:bg-gray-800 hover:bg-gray-700">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <p>Beranda</p>
        </div>
      </Link>
      <Link href="/fasilitas-kesehatan" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 active:bg-gray-800 hover:bg-gray-700">
          <FontAwesomeIcon icon={faClinicMedical} size="lg" />
          <p>Faskes</p>
        </div>
      </Link>
      <Link href="/tentang-kami" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 active:bg-gray-800 hover:bg-gray-700">
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <p>Informasi</p>
        </div>
      </Link>
    </nav>
  );
}
