/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import Head from 'next/head';
import PageTitle from 'components/common/page-title';
import Footer from 'components/common/footer';
import Header from 'components/common/header';
import CardFaskes from 'components/card/card-faskes';
import SectionGrub from 'components/common/sections';
import NavbarFaskes from 'components/navigation/navbar-faskes';

export default function FasilitasKesehatan({ dataFaskes }) {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Daftar Puskesmas di Kota Sidoarjo',
    description:
      'Daftar Puskesmas di kota Sidoarjo. Fasilitas Penunjang Kesembuhan COVID-19 kota Sidoarjo',
    image: 'opengraph.jpg',
    url: 'https://covid.sda.untukkita.my.id',
    pageDescription: 'Kumpulan data puskesmas yang terdapat di kota Sidoarjo',
    pageTitle: 'Data Puskesmas di Kota Sidoarjo',
  };

  const componentList = [];
  for (let i = 0; i < dataFaskes.length; i += 1) {
    componentList.push(
      <CardFaskes
        key={dataFaskes[i].nama}
        nama={dataFaskes[i].nama}
        hotline={dataFaskes[i].kontak}
        socialmedia={dataFaskes[i].sosialmedia}
        kategori={dataFaskes[i].jenis}
        alamat={dataFaskes[i].alamat}
      />,
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
      <Header title="Puskesmas" />
      <NavbarFaskes />
      <PageTitle title={siteInfo.pageTitle} description={siteInfo.pageDescription} />
      <SectionGrub title="Data Puskesmas">
        <ul>{componentList}</ul>
      </SectionGrub>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const dataFaskes = require('data/puskesmas-sheets.json');
  return {
    props: {
      dataFaskes,
    },
  };
}
