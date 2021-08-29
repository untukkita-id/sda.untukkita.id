export default function CardStatistik({ positif, sembuh, meninggal }) {
  return (
    <li className="border-2 border-gray-700 rounded-lg mt-4 p-5">
      <div className="rounded-md bg-gray-500 max-w-max">
        <ul>
          <li>{positif}</li>
          <li>{sembuh}</li>
          <li>{meninggal}</li>
        </ul>
      </div>
    </li>
  );
}
