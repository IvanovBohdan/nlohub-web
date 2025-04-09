import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="flex flex-col h-screen bg-zinc-100 text-zinc-800">
            <NavBar />

            <div className="flex-1 overflow-hidden flex flex-col px-1">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}
