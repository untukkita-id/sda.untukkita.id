export default function CardFaskes({IdFasked, name, alamat, hotline, address, socialmedia, category}) {
  return (
    <div id="{IdFaskes}" className="px-8 py-4">
      <h3 className="text-2xl font-bold">Data Ketersediaan Fasilitas Kesehatan</h3>
      <div className="data-rumah-sakit">
        <div className="alamat-rumah-sakit border-2 border-gray-700 rounded-xl mt-4 p-4">
          <div className="bagian-atas ">
            <div className="heading">
              <h4 className="text-xl font-bold">{nama}</h4>
              <p className="text-lg font-semibold">{category}</p>
            </div>
          </div>
          <div className="bagian-bawah pt-4 flex flex-wrap gap-3">
            <a href="#" className="flex">
              <i className="fa fa-phone-alt self-center" />
              <p className="pl-2">{phone}</p>
            </a>
            <a href="#" className="flex">
              <i className="fas fa-map-marker-alt self-center" />
              <p className="pl-2">
                {address}
                Timur 61215
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="data-apotek">
        <div className="alamat-apotek border-2 border-gray-700 rounded-xl mt-4 p-4">
          <div className="bagian-atas ">
            <div className="heading">
              <h4 className="text-xl font-bold">RSUD Sidoarjo</h4>
              <p className="text-lg font-semibold">Puskesmas</p>
            </div>
          </div>
          <div className="bagian-bawah pt-4 flex flex-wrap gap-3">
            <a href="#" className="flex">
              <i className="fas fa-phone-alt self-center" />
              <p className="pl-2">(031) 8961649</p>
            </a>
            <a href="#" className="flex">
              <i className="fas fa-map-marker-alt self-center" />
              <p className="pl-2">
                Jalan Mojopahit No.667, Sidowayah, Celep, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa
                Timur 61215
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
