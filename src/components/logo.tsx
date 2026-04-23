import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-2">
      <Image
        loading="eager"
        height={100}
        width={100}
        src={"/wordmark-light.svg"}
        alt="logo"
        className="w-22"
      />
    </Link>
  );
}
