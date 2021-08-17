import Link from 'next/link';
import PageTitle from '../components/page-title';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Kontak() {
  return (
    <div id="page-kontak">
      <Header title="Kontak Darurat" />
      <PageTitle title="Layanan" description="Kontak Darurat COVID-19 Kabupaten Sidoarjo" />
      <div className="px-8 pt-4 flex flex-col gap-4">
        <Link href="/" passHref>
          <div className="border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
            <h4 className="text-lg font-bold">Layanan Darurat</h4>
            <p className="font-semibold text-lg">119</p>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
            <h4 className="text-lg font-bold">Dinas Kesehatan</h4>
            <p className="font-semibold text-lg">(031) 8941051</p>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
            <h4 className="text-lg font-bold">Badan Penanggulangan Bencana Daerah</h4>
            <p className="font-semibold text-lg">(031) 8953200</p>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
            <h4 className="text-lg font-bold">RSUD</h4>
            <p className="font-semibold text-lg">(031) 8961649</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
