export default function StatistikCovidSidoarjo({ positif, sembuh, meninggal }) {
  return (
    <>
      <div id="data-statistik" className="px-8 py-4">
        <h2 className="text-2xl font-bold">Statistik COVID-19 Kabupaten Sidoarjo</h2>
        <div className="mt-4 flex flex-col w-full gap-4 flex-wrap text-center">
          <div className="flex flex-col border-2 text-red-900 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
            <p className="text-5xl font-bold">{positif}</p>
            <h3 className="font-bold text-lg uppercase">Positif</h3>
          </div>
          <div className="flex flex-col-2 gap-4">
            <div className="flex flex-col w-full border-2 text-green-900 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
              <p className="text-4xl font-bold">{sembuh}</p>
              <h3 className="font-bold text-lg uppercase">Sembuh</h3>
            </div>
            <div className="flex flex-col w-full border-2 text-yellow-900 border-gray-700 rounded-lg p-4 active:bg-gray-200 hover:bg-gray-100">
              <p className="text-4xl font-bold">{meninggal}</p>
              <h3 className="font-bold text-lg uppercase">Meninggal</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
