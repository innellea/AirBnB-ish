import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children, ...pageProps }) => (
    <div className='layout'>
        <Head>
            <title>Airbnb: Vacation Rentals, Cabins, Beach Houses</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />

        <main> {children}</main>

        <Footer />
    </div>
);

export default Layout;
