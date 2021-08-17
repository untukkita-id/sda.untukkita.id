import Link from 'next/link';
import PageTitle from '../components/page-title';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Kontak() {
  return (
    <div id="page-kontak">
      <Header title="Kontak Darurat" />
      <PageTitle
        title="Kontak Darurat COVID-19 Sidoarjo"
        description="Daftar kontak darurat terkait COVID-19 untuk kota Sidoarjo."
      />
      <div className="px-8 flex flex-col gap-4">
        <Link href="tel:119" passHref>
          <div className="border-4 border-red-900 bg-red-600 rounded-lg mt-4 p-5 text-white active:bg-red-800 hover:bg-red-700 hover:underline active:font-bold cursor-pointer">
            <h4 className="text-lg font-bold">Layanan Darurat</h4>
            <p className="font-semibold text-lg">119</p>
          </div>
        </Link>
        <Link href="tel:0318941051" passHref>
          <div className="border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100 cursor-pointer active:border-4">
            <h4 className="text-lg font-bold hover:underline">Dinas Kesehatan</h4>
            <p className="text-lg">(031) 8941051</p>
          </div>
        </Link>
        <Link href="tel:0318953200" passHref>
          <div className="border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100 cursor-pointer active:border-4">
            <h4 className="text-lg font-bold hover:underline">
              Badan Penanggulangan Bencana Daerah
            </h4>
            <p className="text-lg">(031) 8953200</p>
          </div>
        </Link>
        <Link href="tel:0318961649" passHref>
          <div className="border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100 cursor-pointer active:border-4">
            <h4 className="text-lg font-bold hover:underline">RSUD Kota Sidoarjo</h4>
            <p className="text-lg">(031) 8961649</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
