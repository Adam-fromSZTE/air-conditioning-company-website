import { HeaderProps } from "../interfaces/HeaderInterfaces";
import { toCamelCase } from "../utils/text";

const menuItems = ["Home", "Services", "About Us", "Contact"];

export default function Header({
    isNavbarOpen,
    setNavbarOpen,
    closeNavbar,
}: HeaderProps) {
    return (
        <>
            <header className='mb-20 flex justify-between items-center p-4 sticky z-1'>
                <h1
                    className={`text-2xl font-bold text-gray-800 transition-all duration-300 ${
                        isNavbarOpen ? "blur-md" : "blur-none"
                    }`}
                >
                    Air Conditioning Co.
                </h1>

                {/* MOBILE MENU BUTTON */}
                <button
                    className='md:hidden rounded text-2xl'
                    onClick={() => setNavbarOpen(!isNavbarOpen)}
                    aria-label='Toggle menu'
                >
                    {isNavbarOpen ? "✕" : "☰"}
                </button>

                {/* DESKTOP NAV*/}
                <nav className='hidden md:block'>
                    <ul className='flex flex-row items-center gap-8'>
                        {menuItems.map((item) => (
                            <li key={toCamelCase(item)}>
                                <a
                                    href={toCamelCase(item)}
                                    className='block p-2 text-gray-700 hover:shadow-md hover:rounded-xl hover:bg-gray-200 transition-all duration-300'
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
                onClick={closeNavbar}
                className={`
                    md:hidden fixed inset-0 z-2 bg-gray-400 transition-opacity duration-600
                    ${
                        isNavbarOpen
                            ? "opacity-20"
                            : "opacity-0 pointer-events-none"
                    }
                `}
            />

            <nav
                className={`
                    fixed inset-y-0 right-0 z-3 md:hidden
                    transform transition-all duration-600 ease-in-out bg-gray-100
					rounded-bl-4xl
                    flex flex-col items-center justify-center
                    ${
                        isNavbarOpen
                            ? "translate-x-0 shadow-2xl"
                            : "translate-x-full"
                    } 
                `}
            >
                <ul className='flex flex-col gap-8 text-center text-xl'>
                    {menuItems.map((item) => (
                        <li key={toCamelCase(item)}>
                            <a
                                href={toCamelCase(item)}
                                className='block p-4'
                                onClick={closeNavbar}
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
