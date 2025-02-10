import type { Metadata } from "next";
import "@/../../src/app/globals.css";
import SideBarNavigation from "@/components/navigation/SideBarNavigation";
import NavigationBar from "@/components/navigation/NavigationBar";

export const metadata: Metadata = {
    title: "Invoice Hub",
    description: "Nabitu Invoices",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="md:grid md:grid-cols-[auto_1fr] h-screen w-full">
            <aside className="bg-primaryColor w-full h-full text-secondaryColor px-[38px] py-[28px]">
                <SideBarNavigation />
            </aside>
            <main className="w-full bg-quinaryColor h-full">
                <NavigationBar />
                <div className="px-[38px] py-[28px]">
                    {children}
                </div>
            </main>
        </div>
    );
}
