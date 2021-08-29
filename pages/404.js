import Link from 'next/link';
import PageBuilder from 'components/layout/pageBuilder';

export default function FasilitasKesehatan() {
  const siteInfo = {
    title: 'Halaman Tidak Ditemukan',
    description: 'Coba periksa kembali URL yang dimasukkan dan coba lagi.',
    pageDescription: 'Coba periksa kembali URL yang dimasukkan dan coba lagi.',
    pageTitle: 'Halaman Tidak Ditemukan',
    headerTitle: 'Halaman Tidak Ditemukan',
  };

  return (
    <PageBuilder
      metaTitle={siteInfo.title}
      metaDescription={siteInfo.description}
      pageTitle={siteInfo.pageTitle}
      pageDescription={siteInfo.pageDescription}
      headerTitle={siteInfo.headerTitle}
    >
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
    </PageBuilder>
  );
}
