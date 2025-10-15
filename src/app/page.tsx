"use client";

import { useState } from "react";
import Header from "./pages/Header";
import Info from "./pages/Info";

export default function Home() {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const closeNavbar = () => setNavbarOpen(false);

    return (
        <>
            <Header
                isNavbarOpen={isNavbarOpen}
                setNavbarOpen={setNavbarOpen}
                closeNavbar={closeNavbar}
            />
            <div
                className={`transition-all duration-600 ${
                    isNavbarOpen ? "blur-md" : "blur-none"
                }`}
            >
                <Info />
            </div>
        </>
    );
}
