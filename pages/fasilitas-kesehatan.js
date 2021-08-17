import dynamic from 'next/dynamic';
import Head from 'next/head';
import PageTitle from '../components/page-title';
import Footer from '../components/footer';
import Header from '../components/header';
import CardFaskes from '../components/card-faskes';
import SectionGrub from '../components/sections';

import DATAFASKES from '../data/faskes-sheets.json';

export default function FasilitasKesehatan() {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Daftar Fasilitas Kesehatan di Kota Sidoarjo',
    description:
      'Daftar Fasilitas Kesehatan di kota Sidoarjo. Fasilitas Penunjang Kesembuhan COVID-19 kota Sidoarjo',
    image: 'opengraph.jpg',
    url: 'https://covid.sda.untukkita.my.id',
    pageDescription: 'Kumpulan data fasilitas kesehatan yang terdapat di kota Sidoarjo',
    pageTitle: 'Data Fasilitas Kesehatan di Kota Sidoarjo',
  };
  const componentList = [];

  for (let i = 0; i < DATAFASKES.length; i += 1) {
    componentList.push(
      <CardFaskes
        key={DATAFASKES[i].nama}
        nama={DATAFASKES[i].nama}
        hotline={DATAFASKES[i].kontak}
        socialmedia={DATAFASKES[i].sosialmedia}
        kategori={DATAFASKES[i].jenis}
        alamat={DATAFASKES[i].alamat}
      />
    );
  }

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
      <Header title="Fasilitas Kesehatan" />
      <PageTitle title={siteInfo.pageTitle} description={siteInfo.pageDescription} />
      <SectionGrub title="Data Fasilitas Kesehatan">
        <ul>{componentList}</ul>
      </SectionGrub>
      <Footer />
    </div>
  );
}
