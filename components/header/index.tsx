import header from './header.module.css'
import style from '@styles/style.module.css';
export default function Header() {
  return (
    <>
        <header className="nav-on-top shadow-sm bg-white">
            <div className="main-nav py-2 xs-p-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-lg nav-secondary nav-primary-hover nav-line-active">
                                <a className="navbar-brand" href={`${process.env.BASE_URL}`}>
                                    <img className="nav-logo" src={'https://images.1negocio.com/imagens/site/logo/baldyimoveis-creci33217j-3-e9bcbe3611495702.png'} width={175} height={60} alt="Image not found !" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon flaticon-menu flat-small text-primary"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                            <a className="nav-link" href={`${process.env.BASE_URL}`}>Início</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={`${process.env.BASE_URL}imoveis`}>Todos os imóveis</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={`${process.env.BASE_URL}imoveis/locacao`}>Locação</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href={`${process.env.BASE_URL}imoveis/compra`}>Compra</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="ms-2 btn btn-primary md-mx-none rounded-pill">Contato</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}