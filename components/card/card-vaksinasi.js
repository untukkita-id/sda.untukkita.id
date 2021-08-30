import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function CardVaksinasi({
  peyelengara,
  pelaksanaan,
  jenis_vaksin,
  tempat_peyelengaraan,
  sosialmedia_peyelenggara,
}) {
  return (
    <li className="border-2 border-gray-700 rounded-lg mt-4 p-5">
      <div className="rounded-md bg-gray-500 max-w-max">
        <p className="text-xs font-semibold text-white py-1 px-2">{jenis_vaksin}</p>
      </div>
      <p className="text-lg font-bold mt-2">{peyelengara}</p>
      <div className="pt-2 flex flex-wrap flex-col gap-3">
        <div className="flex gap-2 text-md">
          <FontAwesomeIcon className="self-auto" icon={faCalendarAlt} size="lg" />
          <p>{pelaksanaan}</p>
        </div>

        <Link href={`https://www.google.com/search?q=${tempat_peyelengaraan}`} passHref>
          <a className="flex gap-2 text-md">
            <FontAwesomeIcon className="self-auto" icon={faMapMarkerAlt} size="lg" />
            {tempat_peyelengaraan}
          </a>
        </Link>

        <Link href={`https://instagram.com/${sosialmedia_peyelenggara}`} passHref>
          <a className="flex gap-2 text-md">
            <FontAwesomeIcon className="self-center" icon={faInstagram} size="lg" />
            {sosialmedia_peyelenggara}
          </a>
        </Link>
      </div>
    </li>
  );
}
