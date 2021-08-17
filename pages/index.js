import dynamic from 'next/dynamic';
import Head from 'next/head';

const PageTitle = dynamic(() => import('../components/page-title'));
const HomeMenu = dynamic(() => import('../components/home/home-menu'));
const Footer = dynamic(() => import('../components/footer'));
const Header = dynamic(() => import('../components/header'));

export default function Home() {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Informasi Vaksinasi dan Fasilitas Kesehatann di Kota Sidoarjo',
    description:
      'Kumpulan Informasi Vaksinasi dan Fasilitas Kesehatan di Kota Sidoarjo. Inisiatif independen informasi vaksinasi COVID-19 dan fasilitas kesehatan di kota Sidoarjo.',
    image: 'opengraph.jpg',
    url: 'https://covid.sda.untukkita.my.id',
    github: 'untukkita-id',
    linkedin: 'untukkita-id',
    instagram: 'untukkita.sda',
    email: 'halo@untukkita.sda',
    pageDescription:
      'Situs ini merupakan proyek independen yang bertujuan untuk memberikan informasi vaksinasi serta fasilitas kesehatan yang ada di Kota Sidoarjo.',
    pageTitle: 'Informasi Vaksinasi dan Fasilitas Kesehatan Kota Sidoarjo',
  };

  return (
    <div id="home" className="text-gray-700">
      <Head>
        <title>{siteInfo.title}</title>
        <meta name="description" content={siteInfo.description} />
        <meta name="title" content={siteInfo.title} />
        <meta property="og:url" content="https://covid.sda.untukkita.my.id/" />
        <meta property="og:title" content={siteInfo.title} />
        <meta property="og:description" content={siteInfo.description} />
        <meta property="twitter:title" content={siteInfo.title} />
        <meta property="twitter:description" content={siteInfo.description} />
      </Head>
      <Header title="Beranda" />
      <PageTitle title={siteInfo.pageTitle} description={siteInfo.pageDescription} />
      <main>
        <HomeMenu />
      </main>
      <Footer />
    </div>
  );
}
