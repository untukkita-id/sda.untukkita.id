import Head from 'next/head';
import useSWR from 'swr';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../../components/page-title';
import Footer from '../../components/footer';
import Header from '../../components/header';
import CardFaskes from '../../components/card-faskes';
import SectionGrub from '../../components/sections';
import NavbarFaskes from '../../components/navbar-faskes';

const fetcher = url => fetch(url).then(res => res.json());

export default function FasilitasKesehatan() {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Daftar Apotek di Kota Sidoarjo',
    description:
      'Daftar Apotek di kota Sidoarjo. Fasilitas Penunjang Kesembuhan COVID-19 kota Sidoarjo',
    image: 'opengraph.jpg',
    url: 'https://covid.sda.untukkita.my.id',
    pageDescription: 'Kumpulan data apotek yang terdapat di kota Sidoarjo',
    pageTitle: 'Data Apotek di Kota Sidoarjo',
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
      <Header title="Apotek" />
      <NavbarFaskes />
      <PageTitle title={siteInfo.pageTitle} description={siteInfo.pageDescription} />
      <SectionGrub title="Data Apotek">
        <ul>
          <CardFasilitasKesehatan />
        </ul>
      </SectionGrub>
      <Footer />
    </div>
  );
}

function CardFasilitasKesehatan() {
  const { data, error } = useSWR('/api/data/faskes/apotek', fetcher);
  if (error) return <p className="text-lg text-red-600">Data Gagal Untuk Dimuat</p>;
  if (!data) return <p className="text-lg justify-center mt-6">Data Sedang Dimuat...</p>;
  const componentList = [];
  for (let i = 0; i < data.length; i += 1) {
    componentList.push(
      <CardFaskes
        key={data[i].nama}
        nama={data[i].nama}
        hotline={data[i].kontak}
        socialmedia={data[i].sosialmedia}
        kategori={data[i].jenis}
        alamat={data[i].alamat}
      />
    );
  }

  return componentList;
}
