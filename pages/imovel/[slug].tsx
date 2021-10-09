import AssetJs from '@components/asset-js';
import Contact from '@components/contact';
import Footer from '@components/footer';
import Header from '@components/header';
import RelatedProperties from '@components/related-properties';
import Carousel from 'react-bootstrap/Carousel';
import './imovel.module.css';

/**
 * @param context 
 * @returns 
 */
 export async function getStaticPaths(context: any) {
    return {
      paths : [{
        params: {
            slug: 'modelo-de-contrato-de-locacao'
        }
      }],
      fallback: 'blocking'
    }
  }

/**
 * @param context 
 * @returns 
 */
export async function getStaticProps(context: any) {
    const res = await fetch(`${process.env.BASE_URL_API}site/properties/${context.params.slug}?include=cities,states,property_types,all_property_images`)
    const data = await res.json()
    return {
        props: {
            property: data.data
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
        <div className="full-row py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav aria-label="breadcrumb" className="mb-2">
                            <ol className="breadcrumb mb-0 bg-transparent p-0">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Property</a></li>
                                <li className="breadcrumb-item active text-primary" aria-current="page">Single Property</li>
                            </ol>
                        </nav>
                        <h3 className="text-secondary">Single Property</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className="full-row pt-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 order-xl-2">
                        <Contact property={props.property} />
                        <RelatedProperties/>
                    </div>
                    <div className="col-xl-8 order-xl-1">
                        <div className="property-overview border summary rounded bg-white p-30 mb-30">
                            <div className="row mb-2">
                                <div className="col-auto">
                                    <span className="d-inline-block text-primary">{props.property?.property_types?.data?.name}</span>
                                    <h4 className="font-400"><a className="text-secondary" href="property-single-v1.html">{props.property.title}</a></h4>
                                    <span className="mb-2 d-block font-fifteen"><i className="fas fa-map-marker-alt text-primary"></i> {props.property.cities.data.name} - {props.property.states.data.name} </span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <Carousel>
                                        {props.property.all_property_images.data.map((image:any, index: number) => {
                                            return (
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block"
                                                        src={image.path}
                                                        alt="First slide"
                                                        style={{width:"100%", maxHeight: "600px" ,objectFit:"contain"}}
                                                    />
                                                </Carousel.Item>
                                            )
                                        })}
                                    </Carousel> 
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="row">
                                    <div className="col">
                                        <div className="my-4">
                                            <ul className="quick-meta">
                                                <li className="bg-secondary w-auto">
                                                    <a data-fancybox="" className="px-5 text-white" href={props.property.embed_youtube} title="video popup">
                                                        <i className="fas fa-download flat-mini"></i> Vídeo
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="product-offers mt-2">
                                        <ul className="product-offers-list">
                                            <li className="product-offer-item"> <strong>Venda </strong>R${props.property.sale_price}</li>
                                            <li className="product-offer-item"> <strong>Locação </strong>R${props.property.rent_price}</li>
                                            <li className="product-offer-item"> <strong>Condomínio </strong>R${props.property.condominium_price}</li>
                                            <li className="product-offer-item"> <strong>IPTU </strong>R${props.property.iptu_tax}</li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="mt-2">
                                        <ul className="list-three-fold-width d-table">
                                            <li><span className="font-500">Quartos:</span> {props.property.bedrooms}</li>
                                            <li><span className="font-500">Banheiros:</span> {props.property.bathrooms}</li>
                                            <li><span className="font-500">Área construida:</span> {props.property.building_area} mt<sup>2</sup></li>
                                            <li><span className="font-500">Suites:</span> {props.property.room_suite}</li>
                                            <li><span className="font-500">Vagas:</span> {props.property.parking_spaces}</li>
                                            <li><span className="font-500">Mobiliado:</span> {props.property.furnished || "Sim"} {!props.property.furnished || "Não"} </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-1">
                                <div className="col">
                                    <h5 className="mb-3">Sobre o imóvel</h5>
                                    <div dangerouslySetInnerHTML={{__html: props.property.about}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="property-overview border rounded bg-white p-30 mb-30">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <h5 className="mb-3">Características</h5>
                                    <ul className="list-three-fold-width list-style-tick">
                                        <li>Fitness Lab and Room</li>
                                        <li>Swiming Pools</li>
                                        <li>Parking Facility</li>
                                        <li>Green Park View</li>
                                        <li>Playground Include</li>
                                        <li>Garden</li>
                                        <li>Kitchen Furniture</li>
                                        <li>Fire Security</li>
                                        <li>High className Door</li>
                                        <li>Store Room</li>
                                        <li>Marble Floor</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="property-overview border rounded bg-white p-30 mb-30">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <h5 className="mb-3">Tour 360</h5>
                                    <iframe width={"100%"} height={500} src={props.property.embed_tour_360} allowFullScreen={true}></iframe>
                                </div>
                            </div>
                        </div>
                        
                        <div className="property-overview border rounded bg-white overflow-hidden mb-30">
                            <div className="row row-cols-1">
                                <div className="col">
                                        
                                </div>
                            </div>
                        </div>                                            
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </div>
      <AssetJs />
      return (
        <>
            <script src="../assets/js/greensock.js"></script>
            <script src="../assets/js/layerslider.transitions.js"></script>
            <script src="../assets/js/layerslider.kreaturamedia.jquery.js"></script>
            <script src="../assets/js/single-property-slide.js"></script>
            <script src="../assets/js/bootstrap-select.min.js"></script>
        </>
    </>
  )
}
