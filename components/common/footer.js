import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="mt-8  px-8 pt-4 pb-28">
      <div className="pt-8 px-8 border-t-2 border-gray-200" />
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="flex justify-center font-bold text-lg">covid.sidoarjo.untukkita.id</h2>
        <p>
          Proyek Independen yang bertujuan memberikan informasi vaksinasi, fasilitas dan pelayanan
          kesehatan yang ada di kota Sidoarjo.
        </p>
        <Link href="/kontak-kami" passHref>
          <p className="flex justify-center font-bold active:underline hover:underline">
            Daftar Menjadi Kontributor
          </p>
        </Link>
        <Link href="/kebijakan-data" passHref>
          <p className="flex justify-center font-bold active:underline hover:underline">
            Kebijakan Data & Privasi
          </p>
        </Link>
        <Link href="/tentang-kami" passHref>
          <p className="flex justify-center font-bold active:underline hover:underline">
            Tentang Kami
          </p>
        </Link>
        <a href="https://www.netlify.com">
          <Image
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt="Deploys by Netlify"
            width="114"
            height="51"
          />
        </a>
      </div>
    </footer>
  );
}
