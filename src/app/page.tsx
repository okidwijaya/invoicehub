import NavigationBar from "@/components/navigation/NavigationBar";
import SideBarNavigation from "@/components/navigation/SideBarNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-[auto_1fr] h-screen w-full">
      <aside className="bg-primaryColor w-full h-full text-secondaryColor px-[38px] py-[28px]">
        <SideBarNavigation />
      </aside>
      <main className="w-full bg-quinaryColor h-full">
        <NavigationBar />
        <div className="px-[38px] py-[28px]">
          <h2>Invoices</h2>
        </div>
      </main>
    </div>
  );
}
