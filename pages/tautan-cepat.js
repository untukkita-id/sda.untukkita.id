/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import PageBuilder from 'components/layout/pageBuilder';
import CardTautan from 'components/card/card-tautan';

export default function TautanCepat() {
  const siteInfo = {
    title: 'Daftar Tautan Cepat - UntukKita.SDA',
    description: 'Tautan Cepat Laman Informasi Penting Platform UntukKita.SDA.',
    pageDescription: 'Tautan Cepat Laman Informasi Penting',
    pageTitle: 'Daftar Tautan Cepat',
    headerTitle: 'Tautan Cepat',
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
