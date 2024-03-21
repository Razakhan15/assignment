import Sidebar from "./components/Sidebar";
import Computer from "./view/Computer";
import Mobile from "./view/Mobile";

export default function Home() {
  return (
    <main className="flex">
      <div className="w-1/6 relative">
      <Sidebar/>
      </div>
      <div className="hidden lg:block">
        <Computer/>
      </div>
      <div className="lg:hidden absolute w-full -z-10">
        <Mobile/>
      </div>
    </main>
  );
}
