import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'About', path: '#about' },
        { id: 2, text: 'Tech', path: '#tech' },
        { id: 3, text: 'Work', path: '#work' },
        { id: 4, text: 'Contact', path: '#contact' },
    ];

    return (
        <div className='flex justify-between items-center w-full p-5' >

            <ul className='hidden md:w-1/3 md:flex md:justify-between '>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='cursor-pointer text-xl'
                    >
                        <a href={item.path}>{item.text}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 mt-12'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }

            >

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl duration-300 cursor-pointer border-gray-600'
                    >
                        <a href={item.path}>{item.text}</a>
                    </li>
                ))}
            </ul>

            <h1 className='w-1/3 flex flex-row justify-end'><img src="/src/assets/icon.png" alt="Anas" className='w-20' /></h1>

        </div>
    );
};

export default Navbar;