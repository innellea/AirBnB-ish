import Head from 'next/head';
import SmallCard from '../components/SmallCard';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
export default function Home({ exploreData, cardsData }) {
    return (
        <div>
            <Head>
                <title>Airbnb: Vacation Rentals, Cabins, Beach Houses</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />

            <Banner />
            <main className='px-8 mx-auto max-w-7xl sm:px-16'>
                <section className='pt-6'>
                    <h2 className='pb-5 text-4xl font-semibold'>
                        Explore Nearby
                    </h2>
                    {/* Pull some data from a server - API endpoints */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {exploreData?.map((item) => (
                            <SmallCard
                                key={item.img}
                                location={item.location}
                                distance={item.distance}
                                img={item.img}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className='py-8 text-4xl font-semibold'>
                        Live Anywhere
                    </h2>
                    <div className='flex p-3 -ml-3 overflow-scroll mspace-x-3 scrollbar-hide'>
                        {cardsData?.map(({ img, title }) => (
                            <MediumCard key={img} img={img} title={title} />
                        ))}
                    </div>
                </section>
                <LargeCard />
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then(
        (res) => res.json()
    );

    const cardsData = await fetch('https://jsonkeeper.com/b/VHHT').then((res) =>
        res.json()
    );
    return {
        props: {
            exploreData,
            cardsData
        }
    };
}
