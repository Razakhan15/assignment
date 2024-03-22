import Sidebar from "@/components/Sidebar";
import Computer from "@/components/view/Computer";
import Mobile from "@/components/view/Mobile";
import { createContext, useState } from "react";

export const AppProvider = createContext();

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = { isMenuOpen, setIsMenuOpen };
  return (
    <AppProvider.Provider value={value}>
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
    </AppProvider.Provider>
  );
}
