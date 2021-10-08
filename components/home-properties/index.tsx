import ItemPropertyRent from "@components/item-property-rent";

export default function HomeProperties(props: any) {
  return (
    <>
      <div className="full-row py-5" style={{marginTop: '86px'}}>
          <div className="container">
              <div className="row">
                  <div className="col">
                      <nav aria-label="breadcrumb" className="mb-2">
                          <ol className="breadcrumb mb-0 bg-transparent p-0">
                              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li className="breadcrumb-item"><a href="#">Listing</a></li>
                              <li className="breadcrumb-item active text-primary" aria-current="page">List View</li>
                          </ol>
                      </nav>
                      <h3 className="text-secondary">Property Listing List View</h3>
                  </div>
              </div>
          </div>
      </div>
      <div className="full-row pt-0">
          <div className="container">
              <div className="row">
                  <div className="col-xl-4 col-lg-5 order-lg-2">
                      <div className="listing-sidebar">
                          <div className="widget advance_search_widget">
                              <h5 className="mb-30">Search Property</h5>
                              <form className="rounded quick-search form-icon-right" action="#" method="post">
                                  <div className="row g-3">
                                      <div className="col-12">
                                          <input type="text" className="form-control" name="keyword" placeholder="Enter Keyword..." />
                                      </div>
                                      <div className="col-12">
                                          <select className="form-control">
                                            <option>Property Types</option>
                                            <option>House</option>
                                            <option>Office</option>
                                            <option>Appartment</option>
                                            <option>Condos</option>
                                            <option>Villa</option>
                                            <option>Small Family</option>
                                            <option>Single Room</option>
                                          </select>
                                      </div>
                                      <div className="col-12">
                                          <select className="form-control">
                                            <option>Property Status</option>
                                            <option>For Rent</option>
                                            <option>For Sale</option>
                                          </select>
                                      </div>
                                      <div className="col-12">
                                          <div className="position-relative">
                                              <input type="text" className="form-control" name="location" placeholder="Location" />
                                              <i className="flaticon-placeholder flat-mini icon-font y-center text-dark"></i>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="position-relative">
                                              <button className="form-control price-toggle toggle-btn" data-target="#data-range-price">Price <i className="fas fa-angle-down font-mini icon-font y-center text-dark"></i></button>
                                              <div id="data-range-price" className="price_range price-range-toggle w-100">
                                                  <div className="area-filter price-filter">
                                                      <span className="price-slider">
                                                          <input className="filter_price" type="text" name="price" value="0;10000000" />
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <select className="form-control">
                                          <option>Bedrooms</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                        </select>
                                      </div>
                                      <div className="col-12">
                                          <select className="form-control">
                                          <option>Bathrooms</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                        </select>
                                                          </div>
                                                          <div className="col-12">
                                        <select className="form-control">
                                          <option>Garage</option>
                                          <option>Yes</option>
                                          <option>No</option>
                                        </select>
                                      </div>
                                      <div className="col-6">
                                          <input type="text" className="form-control" name="keyword" placeholder="Min Area" />
                                      </div>
                                      <div className="col-6">
                                          <input type="text" className="form-control" name="keyword" placeholder="Max Area" />
                                      </div>
                                      <div className="col-12">
                                          <div className="position-relative">
                                              <button className="form-control text-start toggle-btn" data-target="#aditional-features">Advanced <i className="fas fa-ellipsis-v font-mini icon-font y-center text-dark"></i></button>
                                          </div>
                                      </div>
                                      <div className="col-12 position-relative">
                                          <div id="aditional-features" className="aditional-features visible-static p-5">
                                              <h5 className="mb-3">Aditional Options</h5>
                                              <ul className="row row-cols-1 custom-check-box mb-4">
                                                  <li className="col">
                                                      <input type="checkbox" className="custom-control-input hide" id="customCheck1" />
                                                      <label className="custom-control-label">Air Conditioning</label>
                                                  </li>
                                                  <li className="col">
                                                      <input type="checkbox" className="custom-control-input hide" id="customCheck2" />
                                                      <label className="custom-control-label">Garage Facility</label>
                                                  </li>
                                                  <li className="col">
                                                      <input type="checkbox" className="custom-control-input hide" id="customCheck3" />
                                                      <label className="custom-control-label">Swiming Pool</label>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <button className="btn btn-primary w-100">Search</button>
                                      </div>
                                  </div>
                              </form>
                          </div> 
                      </div>
                  </div>

                  <div className="col-xl-8 col-lg-7 order-lg-1">
                      <div className="row">
                          <div className="col">
                              <div className="woo-filter-bar p-3 d-flex flex-wrap justify-content-between">
                                  <div className="d-flex flex-wrap">
                                      <form className="woocommerce-ordering" method="get">
                                          <select name="orderby1">
                                              <option>Any Status</option>
                                              <option>For Rent</option>
                                              <option>For Sale</option>
                                          </select>
                                          <select name="orderby2">
                                              <option>Default</option>
                                              <option>Most Popular</option>
                                              <option>Top Rated</option>
                                              <option>Newest Items</option>
                                              <option>Price low to high</option>
                                              <option>Price hight to low</option>
                                          </select>
                                      </form>
                                  </div>
                                  <div className="d-flex">
                                      <span className="woocommerce-ordering-pages me-4 font-fifteen">Mostrando {props.properties.length} resultados</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row row-cols-1 g-4">
                        {props.properties.map((property:any, index: number) => {
                            return (<ItemPropertyRent property={property}/>)
                        })}
                      </div>
                      <div className="row">
                          <div className="col mt-5">
                              <nav aria-label="Page navigation example">
                                  <ul className="pagination pagination-dotted-active justify-content-center">
                                      <li className="page-item disabled">
                                          <a className="page-link">Previous Page</a>
                                      </li>
                                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                                      <li className="page-item">
                                          <a className="page-link" href="#">Next Page</a>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>      
    </>
  )
}