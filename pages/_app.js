import 'tailwindcss/tailwind.css';

import 'nprogress/nprogress.css';

import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import Layout from '../components/layout';
import '../styles/globals.css';

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
