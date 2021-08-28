export default function StatistikCovidSidoarjo({ positif, sembuh, meninggal }) {
  return (
    <>
      <div className="flex flex-col border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
        <h3 className="font-bold text-lg uppercase">Positif</h3>
        <p className="mt-1">{positif}</p>
      </div>
      <div className="flex flex-col border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
        <h3 className="font-bold text-lg uppercase">Positif</h3>
        <p className="mt-1">{sembuh}</p>
      </div>
      <div className="flex flex-col border-2 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
        <h3 className="font-bold text-lg uppercase">Positif</h3>
        <p className="mt-1">{meninggal}</p>
      </div>
    </>
  );
}
