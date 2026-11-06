import Image from "next/image";
import Link from "next/link";

export default function Masthead() {
  return (
    <header className="masthead">
      <Link href="/" aria-label="An Khê Wellness — Price List">
        <Image
          src="/logo-ankhe.svg"
          alt="An Khê — Where calm flows naturally"
          width={189}
          height={45}
          priority
        />
      </Link>
    </header>
  );
}
