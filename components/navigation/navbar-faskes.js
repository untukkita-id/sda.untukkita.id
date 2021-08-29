import Link from 'next/link';

export default function NavbarFaskes() {
  return (
    <nav className="static top-5 bg-gray-300 h-12 px-4 flex flex-row gap-2 justify-center">
      <Link href="/fasilitas-kesehatan" passHref>
        <div className="flex flex-col flex-grow items-center justify-center active:bg-gray-200 hover:bg-gray-100 font-semibold text-gray-800">
          <p>Rumah Sakit</p>
        </div>
      </Link>
      <Link href="/fasilitas-kesehatan/puskesmas" passHref>
        <div className="flex flex-col flex-grow items-center justify-center active:bg-gray-200 hover:bg-gray-100 font-semibold text-gray-800">
          <p>Puskesmas</p>
        </div>
      </Link>
      <Link href="/fasilitas-kesehatan/apotek" passHref>
        <div className="flex flex-col flex-grow items-center justify-center active:bg-gray-200 hover:bg-gray-100 font-semibold text-gray-800">
          <p>Apotek</p>
        </div>
      </Link>
      <Link href="/fasilitas-kesehatan/oksigen" passHref>
        <div className="flex flex-col flex-grow items-center justify-center active:bg-gray-200 hover:bg-gray-100 font-semibold text-gray-800">
          <p>Oksigen</p>
        </div>
      </Link>
    </nav>
  );
}
