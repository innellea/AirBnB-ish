import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useState } from 'react';

const Header = ({ placeholder }) => {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();
    const resetInput = () => {
        setSearchInput('');
        setStartDate(new Date());
        setEndDate(new Date());
        setNoOfGuests(1);
    };
    const handleSelect = (ranges) => {
        console.log(ranges);
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: noOfGuests
            }
        });
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 px-5 py-5 bg-white shadow-md md:px-10 '>
            {/* left */}
            <div
                onClick={() => router.push('/')}
                className='relative flex items-center h-10 my-auto cursor-pointer'
            >
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
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
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
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        onChange={handleSelect}
                        rangeColors={['#FD5861']}
                    />
                    <div className='flex items-center mb-4 border-b'>
                        <h2 className='flex-grow text-2xl font-semibold '>
                            Number of guests {noOfGuests}
                        </h2>
                        <UsersIcon className='h-5' />

                        <input
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            value={noOfGuests}
                            type='number'
                            min={1}
                            className='w-12 pl-2 text-lg red-400'
                        />
                    </div>
                    <div className='flex'>
                        <button
                            onClick={resetInput}
                            className='flex-grow text-gray-500'
                        >
                            Cancel
                        </button>
                        <button
                            onClick={search}
                            className='flex-grow text-red-400'
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
