import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function CardFaskes({ nama, hotline, socialmedia, kategori, alamat }) {
  function stripgooglemapaddress(address) {
    const a = address.split(',');
    const result = `${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}`;
    return result;
  }

  return (
    <li className="border-2 border-gray-700 rounded-lg mt-4 p-5">
      <div className="rounded-md bg-gray-500 max-w-max">
        <p className="text-xs font-semibold text-white py-1 px-2">{kategori}</p>
      </div>
      <p className="text-lg font-bold mt-2">{nama}</p>
      <div className="pt-2 flex flex-wrap flex-col gap-3">
        <Link href={`tel:${hotline}`} passHref>
          <a className="flex gap-2 text-lg text-blue-700 hover:text-indigo-800 hover:font-medium active:text-blue-900 active:font-bold hover:cursor-pointer">
            <FontAwesomeIcon className="self-center" icon={faPhone} />
            {hotline}
          </a>
        </Link>

        <Link href={`https://www.google.com/search?q=${alamat}`} passHref>
          <a className="flex gap-2 text-md">
            <FontAwesomeIcon className="self-auto" icon={faMapMarkerAlt} size="lg" />
            {stripgooglemapaddress(alamat)}
          </a>
        </Link>

        <Link href={`https://instagram.com/${socialmedia}`} passHref>
          <a className="flex gap-2 text-md">
            <FontAwesomeIcon className="self-center" icon={faInstagram} size="lg" />
            {socialmedia}
          </a>
        </Link>
      </div>
    </li>
  );
}
