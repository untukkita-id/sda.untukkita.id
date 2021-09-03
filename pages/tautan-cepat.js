/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import PageBuilder from 'components/layout/pageBuilder';
import CardTautan from 'components/card/card-tautan';

export default function TautanCepat() {
  const siteInfo = {
    title: 'UntukKita Sidoarjo - Daftar Vaksinasi di Kota Sidoarjo',
    description: 'Kumpulan data vaksinasi yang terdapat di kota Sidoarjo',
    pageDescription: 'Kumpulan data vaksinasi yang terdapat di kota Sidoarjo',
    pageTitle: 'Vaksinasi Sakit di Kota Sidoarjo',
    headerTitle: 'Vaksinasi',
  };

  return (
    <PageBuilder
      metaTitle={siteInfo.title}
      metaDescription={siteInfo.description}
      pageTitle={siteInfo.pageTitle}
      pageDescription={siteInfo.pageDescription}
      headerTitle={siteInfo.headerTitle}
    >
      <div id="home" className="text-gray-700">
        <CardTautan />
      </div>
    </PageBuilder>
  );
}
