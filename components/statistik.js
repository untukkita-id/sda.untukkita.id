export default function Statistik({ featuredAngkaKejadian }) {
  const AngkaKejadian = []
  for (let i = 0; i < featuredAngkaKejadian.length; i += 1) {
    AngkaKejadian.push();
  }

  return (
    <li className="border-2 border-gray-700 rounded-lg mt-4 p-5">
      <div className="rounded-md bg-gray-500 max-w-max">
        // @@TODO: Add Rendered componentss
      </div>
    </li>
  );
}


export async function getStaticProps() {
  const featuredAngkaKejadian = require('../data/angka-kejadian.json');
  return {
    props: {
      featuredAngkaKejadian,
    },
  };
}
