import Footer from '@components/footer';
import Header from '@components/header';
import HomeAbout from '@components/home-about';
import HomeSearch from '@components/home-search';
import Topbar from '@components/topbar';
import Head from 'next/head';

export default function Search() {
  return (
    <>
      <Head>
        <title>For Sale Bootstrap Template - Index</title>
      </Head>
      <Topbar />
      <main>
        <Header />
        <HomeSearch />
        <HomeAbout />
        <Footer />
      </main>
    </>
  )
}
