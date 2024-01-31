import Link from "next/link";
const NavBar = () => {
  return (
    <div className="flex w-full justify-between p-5 bg-indigo-200">
      <img
        className="max-h-100"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqI3syPEj12YfWDBZeLfvdDOoQpCMeseXVlA&s"
        }
        alt="avatar"
        style={{ maxHeight: "100px" }}
      />
      <ul className="flex items-center ">
        <li className="p-3">
          <Link href="/">Home</Link>
        </li>
        <li className="p-3">
          <a href="news.asp">Search</a>
        </li>
        <li className="p-3">
          <a href="about.asp">Avatar</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
