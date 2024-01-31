import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="p-10 flex flex-col h-full">
        <h1>Welcome to British Airways</h1>
        <h3>
          This site is under construction, some features are not implemented yet
        </h3>
        <p>
          This site use mock data, so the information present here is not real
        </p>
      </div>
    </main>
  );
}
