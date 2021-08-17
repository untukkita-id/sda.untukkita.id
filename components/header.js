import Image from 'next/image';
import NavbarButton from './navbar-bottom';

export default function Header({ title }) {
  return (
    <>
      <header id="header" className="bg-gray-200 py-4 px-8 flex gap-4">
        <Image src="/logo.svg" height={30} width={50} alt="UntukKita.SDA Logo" />
        <p className="text-lg">{title}</p>
      </header>
      <NavbarButton />
    </>
  );
}
