import NavbarButton from './navbar-bottom';

export default function Header({ title }) {
  return (
    <>
      <div id="header" className="bg-gray-200 py-4 px-8 flex gap-4">
        <div className="border-2 border-gray p-2" />
        <p className="text-lg">{title}</p>
      </div>
      <NavbarButton />
    </>
  );
}
