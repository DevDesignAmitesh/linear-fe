import Image from "next/image";

export type TemplateProps = {
  title: string;
  description: string;
  img: string;
  list: string[];
  serial: string;
};

export function Template({
  description,
  img,
  list,
  title,
  serial,
}: TemplateProps) {
  return (
    <div className="w-full py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col w-full">
          {/* text content */}
          <div className="flex justify-between w-full">
            <p className="text-5xl font-medium text-neutral-100 w-full max-w-lg">{title}</p>

            <div className="flex flex-col items-start">
              <p className="text-xl text-gray-300 w-full max-w-md text-left">
                {description}
              </p>

              <div className="text-neutral-500 flex gap-4 mt-6">
                {/* rendring the list */}
                {list.map((ls, idx) => (
                  <p key={ls}>
                    {serial}.{idx} {ls}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* img content */}
          <Image
            alt="img"
            unoptimized
            src={img}
            height={100}
            width={100}
            className="w-full bg-cover bg-center py-10"
          />
        </div>
      </div>
    </div>
  );
}
