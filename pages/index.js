import useSWR from 'swr';
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
        <CardStatistikCovid />
        <HomeMenu />
      </main>
    </PageBuilder>
  );
}

function CardStatistikCovid() {
  const fetcher = url => fetch(url).then(r => r.json());
  const { data, error } = useSWR('https://sidoarjo-api.azurewebsites.net/covid/statistik', fetcher);

  if (error)
    return (
      <StatistikCovidSidoarjo
        positif="Gagal Dimuat"
        meninggal="Gagal Dimuat"
        sembuh="Gagal Dimuat"
      />
    );
  if (!data) return <StatistikCovidSidoarjo positif="----" meninggal="----" sembuh="----" />;
  return (
    <StatistikCovidSidoarjo
      positif={data.positif}
      meninggal={data.meninggal}
      sembuh={data.sembuh}
    />
  );
}
