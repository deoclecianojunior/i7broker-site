export default function HomeSearch(searchData: any) {
  
  return (
    <>
      <div className="full-row p-0" style={{backgroundImage: 'url(assets/images/background/baldyimoveis-home-land-a5320ba611540502.jpg)', backgroundPosition: 'center center'}}>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-10">
                        <div className="banner-search">
                            <h2 className="text-center mx-auto text-white">Acredite nos seus sonhos!</h2>
                            <span className="d-table mx-auto text-white font-medium mb-4">Vários imóveis a sua disposição</span>
                            <form action="#" className="banner-search-form bg-white p-4" method="POST">
                                <div className="row">
                                    <div className="col-lg-10 col-md-8">
                                        <input type="text" className="form-control" placeholder="Enter Keyword..." />
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <button className="btn btn-primary w-100">Search</button>
                                    </div>
                                </div>
                            </form>
                            <form className="bg-white rounded shadow-sm quick-search p-5 form-icon-right position-relative mt-4" action="#" method="post">
                                <div className="row row-cols-lg-6 row-cols-md-3 row-cols-1 g-3">
                                    <div className="col">
                                        <input type="text" className="form-control" name="keyword" placeholder="Enter Keyword..." />
                                    </div>
                                    <div className="col">
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
                                    <div className="col">
                                        <div className="position-relative">
                                            <input type="text" className="form-control" name="location" placeholder="Location" />
                                            <i className="flaticon-placeholder flat-mini icon-font y-center text-dark"></i>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="position-relative">
                                            <button className="form-control price-toggle toggle-btn" data-target="#data-range-price">Price <i className="fas fa-angle-down font-mini icon-font y-center text-dark"></i></button>
                                            <div id="data-range-price" className="price_range price-range-toggle">
                                                <div className="area-filter price-filter">
                                                    <span className="price-slider">
                                                    <input className="filter_price" type="text" name="price" value="0;10000000" />
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="position-relative">
                                            <button className="form-control text-start toggle-btn" data-target="#aditional-check">Advanced <i className="fas fa-ellipsis-v font-mini icon-font y-center text-dark"></i></button>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-primary w-100">Search</button>
                                    </div>
                                    <div id="aditional-check" className="aditional-features p-5">
                                        <h5 className="mb-3">Aditional Options</h5>
                                        <ul className="row row-cols-lg-4 row-cols-md-2 row-cols-1 custom-check-box mb-4">
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
                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck4" />
                                                <label className="custom-control-label">Fire Security</label>
                                            </li>

                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck5" />
                                                <label className="custom-control-label">Fire Place Facility</label>
                                            </li>
                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck6" />
                                                <label className="custom-control-label">Play Ground</label>
                                            </li>
                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck7" />
                                                <label className="custom-control-label">Ferniture Include</label>
                                            </li>
                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck8" />
                                                <label className="custom-control-label">Marbel Floor</label>
                                            </li>

                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck9" />
                                                <label className="custom-control-label">Store Room</label>
                                            </li>
                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck10" />
                                                <label className="custom-control-label">Hight Class Door</label>
                                            </li>
                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck11" />
                                                <label className="custom-control-label">Floor Heating System</label>
                                            </li>
                                            <li className="col">
                                                <input type="checkbox" className="custom-control-input hide" id="customCheck12" />
                                                <label className="custom-control-label">Garden Include</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}