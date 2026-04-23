import HeaderCtas from "./headerCtas";
import HeaderItems from "./headerItems";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full bg-neutral-950 top-0 z-100 left-1/2 -translate-x-1/2 py-4 fixed max-w-7xl flex justify-between items-center border-b border-neutral-900">
      <Logo />
      <div className="flex h-full justify-center items-center gap-4">
        <HeaderItems />
        <hr className="h-5 w-0.5 bg-neutral-800" />
        <HeaderCtas />
      </div>
    </header>
  );
}
