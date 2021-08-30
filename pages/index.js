import PageBuilder from 'components/layout/pageBuilder';

import HomeMenu from 'components/home/home-menu';
import StatistikCovidSidoarjo from 'components/home/statistik';

export default function Home({ dataStatistik }) {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Informasi Vaksinasi dan Fasilitas Kesehatann di Kota Sidoarjo',
    description:
      'Kumpulan Informasi Vaksinasi dan Fasilitas Kesehatan di Kota Sidoarjo. Inisiatif independen informasi vaksinasi COVID-19 dan fasilitas kesehatan di kota Sidoarjo.',
    pageDescription:
      'Situs ini merupakan proyek independen yang bertujuan untuk memberikan informasi vaksinasi serta fasilitas kesehatan yang ada di Kota Sidoarjo.',
    pageTitle: 'Informasi Vaksinasi dan Fasilitas Kesehatan Kota Sidoarjo',
    headerTitle: 'Beranda',
  };

  return (
    <PageBuilder
      metaTitle={siteInfo.title}
      metaDescription={siteInfo.description}
      pageTitle={siteInfo.pageTitle}
      pageDescription={siteInfo.pageDescription}
      headerTitle={siteInfo.headerTitle}
    >
      <main>
        <StatistikCovidSidoarjo
          positif={dataStatistik.positif}
          meninggal={dataStatistik.meninggal}
          sembuh={dataStatistik.sembuh}
        />
        <HomeMenu />
      </main>
    </PageBuilder>
  );
}

export async function getStaticProps() {
  // eslint-disable-next-line import/no-unresolved
  const dataStatistik = require('data/scraper-covidsda-sheets.json');
  return {
    props: {
      dataStatistik,
    },
  };
}
