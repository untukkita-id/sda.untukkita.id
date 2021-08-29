import Link from 'next/link';
import NavbarButton from 'components/navbar-bottom';
import Image from 'next/image';

export default function Header({ title }) {
  return (
    <>
      <header id="header" className="bg-gray-200 py-4 px-8 flex gap-4 items-center">
        <Link href="/" passHref>
          <Image src="/logo-transparent.svg" height={50} width={50} alt="UntukKita.SDA Logo" />
        </Link>
        <p className="text-xl">{title}</p>
      </header>
      <NavbarButton />
    </>
  );
}
