import Link from 'next/link';

export default function Footer() {
  return (
    <div id="footer" className="mt-8  px-8 pt-4 pb-20 text-center">
      <div className="pt-8 px-8 border-t-2 border-gray-200" />
      <p className="font-bold text-lg">covid.sidoarjo.untukkita.id</p>
      <p>
        Proyek Independen yang bertujuan memberikan informasi vaksinasi dan fasilitas kesehatan yang
        ada di kota Sidoarjo.
      </p>
      <Link href="/kebijakan-data" passHref>
        <p className="mt-4 font-bold active:underline hover:underline">Kebijakan Data & Privasi</p>
      </Link>
      <Link href="/tentang-kami" passHref>
        <p className="mt-4 font-bold active:underline hover:underline">Tentang Kami</p>
      </Link>
    </div>
  );
}
