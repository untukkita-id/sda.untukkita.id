import PageTitle from '../components/page-title';
import Footer from '../components/footer';
import Header from '../components/header';
import CardFaskes from '../components/card-faskes';

const DATAFASKES = require('../data/faskes-sheets.json');

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
      <Header title="Fasilitas Kesehatan" />
      <PageTitle
        title="Data Fasilitas Kesehatan di Kota Sidoarjo"
        description="Kumpulan data fasilitas kesehatan yang terdapat di kota Sidoarjo"
      />
      {componentList}
      <Footer />
    </div>
  );
}
