import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const setInitialTheme = `
      const isDark = window.localStorage.getItem('airbnbTheme') ? (window.localStorage.getItem('airbnbTheme') === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.body.classList.add('dark');
      }
    `;
        return (
            <Html>
                <link
                    href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap'
                    rel='stylesheet'
                />
                <Head />
                <body>
                    <script
                        dangerouslySetInnerHTML={{ __html: setInitialTheme }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
