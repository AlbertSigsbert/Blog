import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiSun, FiMenu, FiX } from "react-icons/fi";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mx-[6%] my-8 flex flex-wrap justify-between">
        <div>
          <Link href="/">
            <a className="font-fancy text-xl">AS Blog</a>
          </Link>
        </div>
        <nav className="hidden sm:flex gap-x-8 font-base font-semibold">
          <Link href="/blogs">
            <a>All Blogs</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
        <div className="flex gap-x-4">
          <span>
            <FiSearch />
          </span>
          <span>
            <FiSun />
          </span>
          <span
            className="inline-block sm:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </span>
        </div>
      </header>

      {/* Dropdown Menu */}
      {open && (
        <div className="fixed inset-0 mx-[6%] my-16 z-10 bg-white overflow-y-auto drop-shadow-xl">
          <nav className="h-full w-full flex flex-col space-y-8 text-center justify-center font-base font-semibold">
            <Link href="/blogs">
              <a>All Blogs</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
