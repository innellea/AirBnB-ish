import Head from 'next/head';

import Banner from '../components/Banner';
import Header from '../components/Header';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Airbnb: Vacation Rentals, Cabins, Beach Houses</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            {/* Header */}
            <Header />
            {/* Banner */}
            <Banner />
        </div>
    );
}
