import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function NavbarButton() {
  return (
    <div className="fixed bottom-0 bg-gray-600 w-screen h-16 px-8 flex flex-row gap-8 justify-center text-white">
      <div className="flex flex-col flex-grow items-center justify-center pt-2 active:bg-red-700 hover:bg-red-600">
        <FontAwesomeIcon icon={faHome} size="lg" />
        <p>Beranda</p>
      </div>
      <div className="flex flex-col flex-grow items-center justify-center pt-2 active:bg-red-700 hover:bg-red-600">
        <FontAwesomeIcon icon={faHome} size="lg" />
        <p>Beranda</p>
      </div>
      <div className="flex flex-col flex-grow items-center justify-center pt-2 active:bg-red-700 hover:bg-red-600">
        <FontAwesomeIcon icon={faHome} size="lg" />
        <p>Beranda</p>
      </div>
      <div className="flex flex-col flex-grow items-center justify-center pt-2 active:bg-red-700 hover:bg-red-600">
        <FontAwesomeIcon icon={faHome} size="lg" />
        <p>Beranda</p>
      </div>
    </div>
  );
}
