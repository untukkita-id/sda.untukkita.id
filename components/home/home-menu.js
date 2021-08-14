import Link from 'next/link';

export default function HomeMenu() {
  const menuItems = [
    {
      title: 'Fasilitas Kesehatan',
      description: 'Daftar Rumah Sakit, Puskesmas dan Apotek',
      link: '/fasilitas-kesehatan',
    },
    {
      title: 'Layanan Kesehatan',
      description: 'Daftar Layanan Ambulance, Oksigen, dan Ambulance',
      link: '/layanan-kesehatan',
    },
  ];

  let componentList = [];
  componentList = menuItems.map((item, index) => {
    return (
      <Link key={item.link} href={item.link} passHref>
        <div
          key={item.link}
          className="flex flex-col border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100"
        >
          <h4 className="font-bold text-lg uppercase">{item.title}</h4>
          <p className="mt-1">{item.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <div id="home-menu" className="px-8 pt-4">
      <h3 className="text-2xl font-bold">Layanan Tanggap COVID-19 kota Sidoarjo</h3>
      <div className="border-4 border-red-700 bg-red-500 rounded-lg mt-4 p-5 text-white active:bg-red-700 hover:bg-red-600">
        <h4 className="text-xl font-bold uppercase">Kontak Darurat</h4>
        <p className="mt-1">Kontak Darurat COVID-19 kota Sidoarjo</p>
      </div>
      <div className="mt-4 flex flex-col w-full gap-4 flex-wrap">{componentList}</div>
    </div>
  );
}
