import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4 py-6">
      <div className="flext items-center space-x-4 text-default-text">
        <Link
          className="text-xl text-default-text hover:text-gray-400  "
          href={"/"}
        >
          Home{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
