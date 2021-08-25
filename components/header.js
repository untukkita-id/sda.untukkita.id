import Link from 'next/link';
import NavbarButton from 'components/navbar-bottom';

export default function Header({ title }) {
  return (
    <>
      <header id="header" className="bg-gray-200 py-4 px-8 flex gap-4 items-center">
        <Link href="/" passHref>
          <img src="/logo-transparent.svg" height={50} width={50} alt="UntukKita.SDA Logo" />
        </Link>
        <p className="text-xl">{title}</p>
      </header>
      <NavbarButton />
    </>
  );
}
