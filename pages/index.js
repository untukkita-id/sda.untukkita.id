import PageTitle from '../components/page-title';
import HomeMenu from '../components/home/home-menu';
import Footer from '../components/footer';
import Header from '../components/header';

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
