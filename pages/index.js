import Sidebar from "@/components/Sidebar";
import Computer from "@/components/view/Computer";
import Mobile from "@/components/view/Mobile";
import { AppProvider } from "@/context/context";
import { useContext } from "react";

export default function Home() {
  const {isMenuOpen, setIsMenuOpen } = useContext(AppProvider);
  return (
    <main className="flex">
      <div className=" relative">
        <Sidebar />
      </div>
      <div className={`hidden lg:block ${isMenuOpen && "ml-44"}`}>
        <Computer />
      </div>
      <div className="lg:hidden absolute w-full -z-10">
        <Mobile />
      </div>
    </main>
  );
}
