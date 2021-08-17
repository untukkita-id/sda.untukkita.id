import Link from 'next/link';
import PageTitle from '../components/page-title';
import Header from '../components/header';
import Footer from '../components/footer';

export default function FasilitasKesehatan() {
  return (
    <div id="page-404">
      <Header title="Beranda" />
      <div className="pt-8">
        <p className="text-4xl font-extrabold text-blue-600 px-8 pt-4">404</p>
        <PageTitle
          title="Halaman Tidak Ditemukan"
          description="Coba periksa kembali URL yang dimasukkan dan coba lagi."
        />
        <Link href="/" passHref>
          <div className="px-8 text-blue-700 hover:text-blue-800 active:underline active:text-blue-900 hover:font-bold cursor-pointer text-lg font-semibold">
            <p>Kembali ke halaman utama</p>
          </div>
        </Link>
        <Link href="/fasilitas-kesehatan" passHref>
          <div className="px-8 text-blue-700 hover:text-blue-800 active:underline active:text-blue-900 hover:font-semibold cursor-pointer mt-1">
            <p>Fasilitas Kesehatan</p>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="px-8 text-blue-700 hover:text-blue-800 active:underline active:text-blue-900 hover:font-semibold cursor-pointer mt-1">
            <p>Layanan Kesehatan</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
