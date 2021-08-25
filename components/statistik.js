export default function Statistik({ data }) {
  for (let i = 0; i < data.length - 1; i += 1) {
    {
      /* // @@TODO: Add Rendered componentss */
    }
  }

  return (
    <li className="border-2 border-gray-700 rounded-lg mt-4 p-5">
      <div className="rounded-md bg-gray-500 max-w-max">
        {/* // @@TODO: Add Rendered componentss */}
      </div>
    </li>
  );
}

export async function getStaticProps() {
  const data = require('data/scraper-covidsda-sheets.json');
  return {
    props: {
      data,
    },
  };
}
