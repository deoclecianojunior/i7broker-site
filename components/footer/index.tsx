import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="full-row bg-primary py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8">
                        <h3 className="text-white xs-text-center my-20 font-400">Procurando por algo específico?</h3>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="#" className="btn btn-white y-center position-relative d-table xs-mx-auto ms-auto">Entre em contato conosco</a>
                    </div>
                </div>
            </div>
        </div>
        <footer className="full-row footer-default-dark bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-widget mb-4">
                            <div className="footer-logo mb-4">
                                <a href="#">
                                <Image className="nav-logo" src='https://images.1negocio.com/imagens/site/logo/baldyimoveis-creci33217j-3-e9bcbe3611495702.png' width={175} height={60} />
                                </a>
                            </div>
                            <p>
                            A liderança e o crescimento da BALDY IMÓVEIS fundamentam na busca incansável e constante pela eficiência operacional da Venda e Locação. Profissionais altamente qualificados e capacitados através da Ciências de Dados Aplicada. Conheça nosso BLOG: https://blog.baldyimoveis.com.br/
                            </p>
                        </div>
                        <div className="footer-widget media-widget mb-4">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-widget contact-widget mb-4">
                            <h3 className="widget-title mb-4">Contact Info</h3>
                            <ul>
                                <li>Unicoder Design Agency 301 The Greenhouse, Custard Factory, London, E3 8DY.</li>
                                <li>+1 246-345-0695</li>
                                <li>helpline@homex.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-widget footer-nav mb-4">
                            <h3 className="widget-title mb-4">Quick Links</h3>
                            <ul>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Investment Solution</a></li>
                                <li><a href="#">Frequenly Ask Question</a></li>
                                <li><a href="#">How It Work</a></li>
                                <li><a href="#">Become a Member</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright bg-footer text-default py-4">
            <div className="container">
                <div className="row row-cols-md-2 row-cols-1">
                    <div className="col">
                        <span className="text-white">© {new Date().getFullYear()} I7broker </span>
                    </div>
                    <div className="col">
                        <ul className="line-menu float-end list-color-gray">
                            <li><a href="#">Politica & Privacidade </a></li>
                            <li>|</li>
                            <li><a href="#">Site Map</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}