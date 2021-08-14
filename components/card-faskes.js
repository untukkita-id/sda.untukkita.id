import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function CardFaskes({ nama, hotline, socialmedia, kategori, alamat }) {
  return (
    <div className="border-2 border-gray-700 rounded-lg mt-4 p-5">
      <div className="rounded-md bg-gray-500 max-w-max">
        <p className="text-xs font-semibold text-white py-1 px-2">{kategori}</p>
      </div>
      <h3 className="text-xl font-bold mt-2">{nama}</h3>
      <div className="pt-2 flex flex-wrap flex-col gap-3">
        <Link href={`https://www.google.com/search?q=${alamat}`} passHref>
          <a className="hover:text-indigo-700 hover:font-medium active:text-blue-800 active:font-bold">
            Alamat: <span className="underline">{alamat}</span>
          </a>
        </Link>

        <Link href={`tel:${hotline}`} passHref>
          <a className="hover:text-indigo-700 hover:font-medium active:text-blue-800 active:font-bold">
            Telepon: <span className="underline">{hotline}</span>
          </a>
        </Link>

        <Link href={`tel:${socialmedia}`} passHref>
          <a className="hover:text-indigo-700 hover:font-medium active:text-blue-800 active:font-bold">
            Instagram: <span className="underline">{socialmedia}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
