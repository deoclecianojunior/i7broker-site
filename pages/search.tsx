import Footer from '@components/footer';
import Header from '@components/header';
import HomeAbout from '@components/home-about';
import HomeSearch from '@components/home-search';
import Head from 'next/head';

export async function getServerSideProps(context: any) {

  return {
    props: {
      id: 'adfasdfd'
    }
  }
}


/**
 * @param props 
 * @returns 
 */
export default function Search(props: any) {
  return (
    <>
      <Head>
        <title>For Sale Bootstrap Template - Index {props.id}</title>
      </Head>
      <Topbar />
      <main>
        <Header />
        <HomeSearch props={props}/>
        <HomeAbout />
        <Footer />
      </main>
    </>
  )
}
