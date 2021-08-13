import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
const Search = () => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formatStartDate = format(new Date(startDate), 'dd/mm/yyyy');
    const formatEndDate = format(new Date(endDate), 'dd/mm/yyyy');
    const range = `${formatStartDate} - ${formatEndDate}`;
    return (
        <div className='flex'>
            <section className='flex-grow px-6 pt-14'>
                <p className='text-sm '>
                    400+ Stays for {range} | {noOfGuests} guests
                </p>
                <h1 className='mt-2 mb-6 text-3xl font-semibold'>
                    Stays in {location}
                </h1>
                <div className='hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap'>
                    <p className='button'>Cancellation flexibility</p>
                    <p className='button'>Type of place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms & Beds</p>
                    <p className='button'>More filters</p>
                </div>
            </section>
        </div>
    );
};
export default Search;
