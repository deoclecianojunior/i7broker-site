import AssetJs from '@components/asset-js';
import Footer from '@components/footer';
import Header from '@components/header';
import HomeAbout from '@components/home-about';
import HomeSearch from '@components/home-search';
import Head from 'next/head';

export async function getStaticPaths(context: any) {
  return {
    paths : [],
    fallback: 'blocking'
  }
}

export default function Home(props: any) {
  return (
    <>
      <div id="page_wrapper">
        <Header />
        <HomeSearch />
        <HomeAbout />
        <Footer />
      </div>
      <AssetJs />
    </>
  )
}
