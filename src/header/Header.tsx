import { useEffect } from 'react';

const Navbar = () => {
    const navItems = [
        { id: 1, text: 'About', path: '#about' },
        { id: 2, text: 'Tech', path: '#tech' },
        { id: 3, text: 'Work', path: '#work' },
    ];

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClick = (event: any) => {
            event.preventDefault();
            const target = event.target.getAttribute('href');
            const element = document.querySelector(target);
            element.scrollIntoView({ behavior: 'smooth' });
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', handleClick);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <div className='w-1/3 mx-auto'>

            <div className='flex  items-center w-full p-5' style={{ scrollBehavior: 'smooth' }}>
                <h1 className='w-1/3 '><img src="/icon.png" alt="Anas" className='w-20' /></h1>

                <ul className='w-2/3 flex justify-between '>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='cursor-pointer text-xl'
                        >
                            <a href={item.path}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
