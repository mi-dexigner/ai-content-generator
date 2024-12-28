import SideNav from "@/app/dashboard/_components/SideNav";
import Header from "@/app/dashboard/_components/Header";

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            <aside className="md:w-64 hidden md:block fixed"><SideNav /></aside>
        <main className="md:ml-64">
            <Header />
            {children}
        </main>
        </div>
    );
}