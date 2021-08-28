import Link from 'next/link';

export default function CardInformasi({ title, description, slug }) {
  return (
    <Link href={`/informasi/${slug}`} passHref>
      <div className="artikel-terbaru border-2 border-gray-700 rounded-lg mt-4 p-5 flex hover:cursor-pointer">
        <div className="heading flex-1 pr-3">
          <h4 className="text-lg font-bold">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
