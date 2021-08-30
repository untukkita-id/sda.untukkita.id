/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import PageBuilder from 'components/layout/pageBuilder';
import SectionGrub from 'components/common/sections';
import CardVaksinasi from 'components/card/card-vaksinasi';

export default function FasilitasKesehatan({ dataVaksinasi }) {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Daftar Vaksinasi di Kota Sidoarjo',
    description:
      'Daftar Vaksinasi di kota Sidoarjo. Fasilitas Penunjang Kesembuhan COVID-19 kota Sidoarjo',
    image: 'opengraph.jpg',
    url: 'https://covid.sda.untukkita.my.id',
    pageDescription: 'Kumpulan data vaksinasi yang terdapat di kota Sidoarjo',
    pageTitle: 'Vaksinasi Sakit di Kota Sidoarjo',
    headerTitle: 'Vaksinasi',
  };

  const componentList = [];
  for (let i = 0; i < dataVaksinasi.length; i += 1) {
    componentList.push(
      <CardVaksinasi
        key={dataVaksinasi[i].peyelengara}
        peyelengara={dataVaksinasi[i].peyelengara}
        pelaksanaan={dataVaksinasi[i].pelaksanaan}
        sosialmedia_peyelenggara={dataVaksinasi[i].sosialmedia_peyelenggara}
        jenis_vaksin={dataVaksinasi[i].jenis_vaksin}
        tempat_peyelengaraan={dataVaksinasi[i].tempat_peyelengaraan}
      />,
    );
  }

  return (
    <PageBuilder
      metaTitle={siteInfo.title}
      metaDescription={siteInfo.description}
      pageTitle={siteInfo.pageTitle}
      pageDescription={siteInfo.pageDescription}
      headerTitle={siteInfo.headerTitle}
    >
      <div id="home" className="text-gray-700">
        <SectionGrub title="Data Vaksinasi">
          <ul>{componentList}</ul>
        </SectionGrub>
      </div>
    </PageBuilder>
  );
}

export async function getStaticProps() {
  const dataVaksinasi = require('data/vaksinasi-sheets.json');
  return {
    props: {
      dataVaksinasi,
    },
  };
}
