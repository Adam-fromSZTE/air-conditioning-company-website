"use client";

import { useState } from "react";
import { toCamelCase } from "../utils/text";

const menuItems = ["Home", "Services", "About Us", "Contact"];

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);

    return (
        <>
            <header className='flex justify-between items-center p-4 sticky z-50 bg-white/90 shadow-md rounded-xl'>
                <h1 className='text-2xl font-bold text-gray-800'>
                    Air Conditioning Co.
                </h1>

                {/* MOBILE MENU BUTTON */}
                <button
                    className='md:hidden rounded hover:bg-gray-200 transition text-2xl text-gray-700'
                    onClick={() => setOpen(!isOpen)}
                    aria-label='Toggle menu'
                >
                    {isOpen ? "✕" : "☰"}
                </button>

                {/* DESKTOP NAV*/}
                <nav className='hidden md:block'>
                    <ul className='flex flex-row items-center gap-8'>
                        {menuItems.map((item) => (
                            <li key={toCamelCase(item)}>
                                <a
                                    href={toCamelCase(item)}
                                    className='block p-2 text-gray-700 hover:shadow-md hover:rounded-xl transition-all duration-200'
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* MOBILE NAV*/}
            <div
                onClick={closeMenu}
                className={`
                    md:hidden fixed inset-0 z-30 bg-gray-400 transition-opacity duration-600
                    ${isOpen ? "opacity-20" : "opacity-0 pointer-events-none"}
                `}
            />

            <nav
                className={`
                    fixed inset-y-0 right-0 z-40 h-auto md:hidden
                    transform transition-all duration-600 ease-in-out
					rounded-bl-4xl
                    flex flex-col items-center justify-center
                    ${isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"} 
                `}
            >
                <ul className='flex flex-col gap-8 text-center text-xl'>
                    {menuItems.map((item) => (
                        <li key={toCamelCase(item)}>
                            <a
                                href={toCamelCase(item)}
                                className='block p-4 text-gray-700 hover:text-gray-400 transition z-50'
                                onClick={closeMenu}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
