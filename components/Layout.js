import Head from 'next/head';
import Header from './Header';

function Layout({title, description, keywords, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className="mx-[6%] my-7">
        {children}
      </main>
    </>
  );
}

Layout.defaults = {
    title:'AS Blog',
    description:'The best tech blog right now',
    keywords:'Tech, Programming, Coding, Web development'
}
export default Layout;
