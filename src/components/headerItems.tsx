import Link from "next/link";

type HeaderItemsDataProps = {
  id: string;
  label: string;
  href: string;
  isContent?: boolean;
};

const HeaderItemsData: HeaderItemsDataProps[] = [
  {
    id: crypto.randomUUID(),
    label: "product",
    href: "/",
    isContent: true,
  },
  {
    id: crypto.randomUUID(),
    label: "resources",
    href: "/",
    isContent: true,
  },
  {
    id: crypto.randomUUID(),
    label: "customers",
    href: "/",
    isContent: false,
  },
  {
    id: crypto.randomUUID(),
    label: "pricing",
    href: "/",
    isContent: false,
  },
  {
    id: crypto.randomUUID(),
    label: "now",
    href: "/",
    isContent: false,
  },
  {
    id: crypto.randomUUID(),
    label: "contact",
    href: "/",
    isContent: false,
  },
];

export default function HeaderItems() {
  return (
    <div className="flex justify-center items-center text-[13px]">
      {HeaderItemsData.map((item) => (
        <Link href={item.href} className="py-1 px-3 rounded-full text-gray-400 capitalize hover:text-neutral-200 hover:bg-neutral-800 transition-all duration-200">
          {item.label}
        </Link>
      ))}
    </div>
  );
}
