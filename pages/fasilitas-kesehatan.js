import dynamic from 'next/dynamic';
import Head from 'next/head';
import PageTitle from '../components/page-title';
import Footer from '../components/footer';
import Header from '../components/header';
import CardFaskes from '../components/card-faskes';
import SectionGrub from '../components/sections';

// eslint-disable-next-line import/no-unresolved
import DATAFASKES from '../data/faskes-sheets.json';

export default function FasilitasKesehatan() {
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
        <title>UntukKita Sidoarjo - Daftar Fasilitas Kesehatan di Kota Sidoarjo</title>
      </Head>
      <Header title="Fasilitas Kesehatan" />
      <PageTitle
        title="Data Fasilitas Kesehatan di Kota Sidoarjo"
        description="Kumpulan data fasilitas kesehatan yang terdapat di kota Sidoarjo"
      />
      <SectionGrub title="Data Fasilitas Kesehatan">
        <ul>{componentList}</ul>
      </SectionGrub>
      <Footer />
    </div>
  );
}
