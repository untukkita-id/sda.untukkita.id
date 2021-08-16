import dynamic from 'next/dynamic';

const PageTitle = dynamic(() => import('../components/page-title'));
const HomeMenu = dynamic(() => import('../components/home/home-menu'));
const Footer = dynamic(() => import('../components/footer'));
const Header = dynamic(() => import('../components/header'));

export default function Home() {
  return (
    <div id="home" className="text-gray-700">
      <Header title="Beranda" />
      <PageTitle
        title="Kumpulan Informasi Vaksinasi dan Fasilitas Kesehatan kota Sidoarjo"
        description="Situs ini merupakan proyek independen yang bertujuan untuk memberikan informasi vaksinasi serta fasilitas kesehatan yang ada di Kota Sidoarjo."
      />
      <HomeMenu />
      <Footer />
    </div>
  );
}
