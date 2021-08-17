import Link from 'next/link';
import PageTitle from '../components/page-title';
import Header from '../components/header';
import Footer from '../components/footer';

export default function FasilitasKesehatan() {
  return (
    <div id="page-404">
      <Header title="Beranda" />
      <div className="pt-8">
        <p className="text-4xl font-extrabold text-blue-600 px-8 pt-4">505</p>
        <PageTitle
          title="Halaman Tidak Ditemukan"
          description="Coba periksa kembali URL yang dimasukkan dan coba lagi."
        />
        <Link href="/" passHref>
          <div className="px-8 text-blue-500 hover:text-indigo-700 hover:underline">
            <p>Kembali ke halaman utama</p>
          </div>
        </Link>
        <Link href="/fasilitas-kesehatan" passHref>
          <div className="px-8 text-blue-500 hover:text-indigo-700 hover:underline">
            <p>Fasilitas Kesehatan</p>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="px-8 text-blue-500 hover:text-indigo-700 hover:underline">
            <p>Layanan Kesehatan</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
