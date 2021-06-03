import header from './header.module.css'
import style from '@styles/style.module.css';
export default function Header() {
  return (
    <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
            <h1 className="logo me-auto"><a href="/">For Sale</a></h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><a className="nav-link scrollto active" href="/">Home</a></li>
                    <li><a className="nav-link scrollto">Locação</a></li>
                    <li><a className="nav-link scrollto">Compra</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}