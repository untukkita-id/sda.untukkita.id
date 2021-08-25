/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import Head from 'next/head';
import PageTitle from 'components/page-title';
import Footer from 'components/footer';
import Header from 'components/header';
import CardFaskes from 'components/card-faskes';
import SectionGrub from 'components/sections';
import NavbarFaskes from 'components/navbar-faskes';

export default function FasilitasKesehatan({ dataFaskes }) {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Daftar Vaksinasi di Kota Sidoarjo',
    description:
      'Daftar Vaksinasi di kota Sidoarjo. Fasilitas Penunjang Kesembuhan COVID-19 kota Sidoarjo',
    image: 'opengraph.jpg',
    url: 'https://covid.sda.untukkita.my.id',
    pageDescription: 'Kumpulan data vaksinasi yang terdapat di kota Sidoarjo',
    pageTitle: 'Vaksinasi Sakit di Kota Sidoarjo',
  };

  const componentList = [];
  for (let i = 0; i < dataFaskes.length; i += 1) {
    componentList.push(
      <CardFaskes
        key={dataFaskes[i].peyelengara}
        nama={dataFaskes[i].peyelengara}
        hotline={dataFaskes[i].narahubung}
        socialmedia={dataFaskes[i].sosialmedia_peyelenggara}
        kategori={dataFaskes[i].jenis_vaksin}
        alamat={dataFaskes[i].tempat_peyelengaraan}
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
      <Header title="Vaksinasi" />
      <NavbarFaskes />
      <PageTitle title={siteInfo.pageTitle} description={siteInfo.pageDescription} />
      <SectionGrub title="Data Vaksinasi">
        <ul>{componentList}</ul>
      </SectionGrub>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const dataFaskes = require('../data/vaksinasi-sheets.json');
  return {
    props: {
      dataFaskes,
    },
  };
}
