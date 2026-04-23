import Image from "next/image";

export default function ImageSection() {
  return (
    <div className="w-full mt-20 relative">
      <div className="w-full absolute inset-0 bg-[url(/hero-bg.png)] bg-cover bg-top scale-110 -z-10" />
      <div className="w-full max-w-7xl mx-auto">
        <Image
          unoptimized
          src={"/hero.png"}
          width={100}
          height={100}
          alt="hero"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
}
