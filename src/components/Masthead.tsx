import Image from "next/image";
import Link from "next/link";

/** Header: logo left, brand mark right (Figma 25:2 / 25:329). */
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
      <Image className="masthead-mark" src="/menu-mark.svg" alt="" width={27} height={40} aria-hidden="true" />
    </header>
  );
}
