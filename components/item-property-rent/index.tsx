import './item-property-rent.module.css';

export default function ItemPropertyRent(props: any) {
  return (
    <>
        <div className="col">
            <div className="property-list-1 bg-white property-block border transation-this hover-shadow">
                <div className="overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom m-2">
                    <div className="cata position-absolute">
                    {props.property.rent == true &&
                        <span className="sale bg-secondary text-white">Aluguel</span>
                    }
                    {props.property.sale == true &&
                        <span className="sale bg-secondary text-white">Venda</span>
                    }
                    </div>
                    <a href={"/imovel/"+props.property.slug}><img src={props.property.example_photo.data.path} className="image-property" alt="Image Not Found!" /></a>
                </div>
                <div className="property_text p-3">
                    <span className="d-inline-block text-primary">{props.property.cities.data.name} - {props.property.states.data.name}</span>
                    <h5 className="mt-2"><a className="font-400 text-secondary" href={"/imoveis/"+props.property.slug}>{props.property.title}</a></h5>
                    <span className="mt-2 d-block font-fifteen"><i className="fas fa-map-marker-alt text-primary"></i> {props.property.street}, {props.property.neighborhood} </span>
                    <div className="property-overview summary rounded bg-white">
                        <div className="product-offers mt-2">
                            <ul className="product-offers-list">
                            {props.property.rent == true &&
                                <li className="product-offer-item"> <strong>Aluguel </strong>R${props.property.rent_price}</li>
                            }
                            {props.property.sale == true &&
                                <li className="product-offer-item"> <strong>Venda </strong>R${props.property.sale_price}</li>
                            }
                            <li className="product-offer-item"> <strong>Condomínio </strong>R${props.property.condominium_price}</li>
                            <li className="product-offer-item"> <strong>IPTU </strong>R${props.property.iptu_tax}</li> 
                            </ul>
                        </div>
                    </div>
                    <div className="quantity font-fifteen">
                        <ul className="d-flex">
                            <li><span>Quartos:</span> {props.property.bathrooms} </li>
                            <li><span>Banheiros:</span> {props.property.bedrooms} </li>
                            <li><span>Area:</span> {props.property.building_area} mt<sup>2</sup></li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center post-meta mt-4">
                        <div className="agent">
                            <a href="#" className="d-flex text-general align-items-center"><img className="rounded-circle me-2" src="assets/images/team/1.jpg" alt="avata" /><span>Fábio Baldy</span></a>
                        </div>
                        {/* <div className="post-date ms-auto"><span>2 Month Ago</span></div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}