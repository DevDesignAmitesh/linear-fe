import Image from "next/image";

export default function ImageSection() {
  return (
    <div className="w-full py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto absolute inset-0 bg-[url(/hero-bg.png)] bg-cover bg-top bg-no-repeat scale-200 -z-10" />
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
