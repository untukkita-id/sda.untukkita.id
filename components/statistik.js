import CardStatistik from 'components/card-statistik';

export default function Statistik({ data }) {
  <CardStatistik positif={data[0]} sembuh={data[1]} meninggal={data[2]} />;

  return (
    <li className="border-2 border-gray-700 rounded-lg mt-4 p-5">
      <div className="rounded-md bg-gray-500 max-w-max">{CardStatistik}</div>
    </li>
  );
}

export async function getStaticProps() {
  const data = require('../data/scraper-covidsda-sheets.json');
  return {
    props: {
      data,
    },
  };
}
