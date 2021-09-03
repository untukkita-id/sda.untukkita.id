import Link from 'next/link';

export default function CardTautan() {
  const menuItems = [
    {
      title: 'Beranda',
      link: '/',
    },
    {
      title: 'Daftar Fasilitas Kesehatan',
      link: '/fasilitas-kesehatan',
    },
    {
      title: 'Kumpulan Informasi',
      link: '/informasi',
    },
    {
      title: 'Formulir: Menjadi Relawan',
      link: 'https://airtable.com/shrqv0a9lF6p7XBuz',
    },
    {
      title: 'Formulir: Kontak Aduan',
      link: 'https://airtable.com/shr6zXgSN0FIetWrn',
    },
    {
      title: 'Data Vaksinasi',
      link: '/vaksinasi',
    },
  ];

  let componentList = [];
  componentList = menuItems.map(item => {
    return (
      <Link key={item.link} href={item.link} passHref>
        <div
          key={item.link}
          className="flex flex-col border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100 active:outline-black hover:cursor-pointer"
        >
          <h3 className="font-bold text-lg">{item.title}</h3>
        </div>
      </Link>
    );
  });

  return (
    <div id="home-menu" className="px-8 pt-4">
      <div className="mt-4 flex flex-col w-full gap-4 flex-wrap">{componentList}</div>
    </div>
  );
}
