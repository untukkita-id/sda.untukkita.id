export default function CardFaskes({
  IdFasked,
  name,
  alamat,
  hotline,
  address,
  socialmedia,
  category,
}) {
  return (
    <div id="{IdFaskes}" className="px-8 py-4">
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
              <p className="pl-2">{address}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
