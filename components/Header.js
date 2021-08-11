import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';

import Image from 'next/image';

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 px-5 py-5 bg-white shadow-md md:px-10 '>
            {/* left */}
            <div className='relative flex items-center h-10 my-auto cursor-pointer'>
                <Image
                    src='/static/images/logo.png'
                    layout='fill'
                    alt='logo'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* Middle - Search */}

            <div className='flex items-center py-2 rounded-full md:shadow-sm md:border-2'>
                <input
                    className='flex-grow pl-5 text-gray-600 placeholder-gray-300 bg-transparent outline-none'
                    type='text'
                    placeholder='Start your search'
                />
                <SearchIcon className='flex hidden h-8 p-2 mx-auto text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2' />
            </div>
            {/* Right */}
            <div className='flex items-center justify-end space-x-4 text-gray-600'>
                <p className='hidden cursor-pointer md:inline-flex'>
                    Become a host
                </p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center px-2 space-x-2 border-2 rounded-full cursor-pointer'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    );
}

export default Header;
