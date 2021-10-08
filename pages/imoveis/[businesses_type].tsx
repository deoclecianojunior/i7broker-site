import AssetJs from '@components/asset-js';
import Footer from '@components/footer';
import Header from '@components/header';
import HomeProperties from '@components/home-properties';

/**
 * @param context 
 * @returns 
 */
export async function getServerSideProps(context: any) {

  let businessType = context.query.businesses_type
  
  if (businessType == 'compra') {
    businessType = 'sale'
  }
  if (businessType == 'locacao') {
    businessType = 'rent'
  }

  const res = await fetch(`${process.env.BASE_URL_API}site/properties?search=${businessType}:true&&include=cities,states,example_photo`)
  const data = await res.json()
  return {
    props: {
      data: data.data
    }
  }
}

/**
 * @param props 
 * @returns 
 */
export default function Imoveis(props: any) {
  return (
    <>
      <div id="page_wrapper" className="bg-light">
        <Header />
        <HomeProperties properties={props.data}/>
        <Footer />
      </div>
      <AssetJs />
    </>
  )
}
