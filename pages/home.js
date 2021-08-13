export default function home() {
  return (
    <div>
      <div id="home">
        <div className="px-8 p-16 text-gray-700">
          <h3 className="text-3xl font-bold uppercase">Pusat Informasi Seputar COVID-19</h3>
          <p>
            Situs ini berisi informasi yang merupakan inisiatif sukarela warga sidoarjo yang
            terdampak COVID-19
          </p>
        </div>
      </div>
      <div id="informasi" className="py-2">
        <div className="px-8 py-8 text-gray-700">
          <h3 className="text-2xl font-bold">
            Cek Data Ketersediaan Oksigen, Ambulance, dan lainnya
          </h3>
          <div className="kontak-darurat border-2 border-gray-700 rounded-xl mt-4 p-5 flex">
            <div className="heading flex-1 pr-3">
              <h4 className="text-xl font-bold">Kontak Darurat</h4>
              <p>Situs dan kontak penting terkait COVID-19</p>
            </div>
            <div className="arrow self-center">
              <i className="fas fa-chevron-right ml-2" />
            </div>
          </div>
          <div className="objek mt-4">
            <ul className="grid grid-cols-2 gap-3">
              <a
                href="Rumah-Sakit.html"
                className="
              border-2 border-gray-700
              rounded-xl
              p-5
              text-center
              font-bold
              text-lg
            "
              >
                <p>Rumah Sakit</p>
              </a>
              <a
                href="#"
                className="
              border-2 border-gray-700
              rounded-xl
              p-5
              text-center
              font-bold
              text-lg
            "
              >
                <p>Ambulance</p>
              </a>
              <a
                href="#"
                className="
              border-2 border-gray-700
              rounded-xl
              p-5
              text-center
              font-bold
              text-lg
            "
              >
                <p>Oksigen</p>
              </a>
              <a
                href="#"
                className="
              border-2 border-gray-700
              rounded-xl
              p-5
              text-center
              font-bold
              text-lg
            "
              >
                <p>Vaksinasi</p>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div id="artikel" className="py-2">
        <div className="px-8 py-8 text-gray-700">
          <h3 className="text-2xl font-bold">Informasi Terkini</h3>
          <cardInfornasi />
        </div>
      </div>
      <div id="pranala" className="pt-2">
        <div className="px-8 py-8 text-gray-700">
          <h3 className="text-2xl font-bold pb-2">Pranala-pranala Penting</h3>
          <div className="data-interaktif grid gap-3">
            <a href="#" className="border-b-2 border-gray-700 pb-2">
              Peta Rasio Lacak--Isolasi
            </a>
            <a href="#" className="border-b-2 border-gray-700 pb-2">
              Peta Rasio Lacak--Isolasi
            </a>
            <a href="#" className="border-b-2 border-gray-700 pb-2">
              Peta Rasio Lacak--Isolasi
            </a>
            <a href="#" className="border-b-2 border-gray-700 pb-2">
              Peta Rasio Lacak--Isolasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
