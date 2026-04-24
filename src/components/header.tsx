import HeaderCtas from "./headerCtas";
import HeaderItems from "./headerItems";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full bg-neutral-950 py-4 top-0 z-100 left-1/2 -translate-x-1/2 fixed border-b border-neutral-900">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex h-full justify-center items-center gap-4">
          <HeaderItems />
          <hr className="h-5 w-0.5 bg-neutral-800" />
          <HeaderCtas />
        </div>
      </div>
    </header>
  );
}
