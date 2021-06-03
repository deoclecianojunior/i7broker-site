import Styles from '@styles/style.module.css';

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>For Sale</h3>
                <p>
                  Rua Correia Dias nº 184, 11º Andar<br/>
                  Paraíso, São Paulo - SP<br/>
                  Brasil <br/><br/>
                  <strong>Phone:</strong> +55 (11) 4172-3225 <br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Apartamento Vila Gumercindo Aluga 2 Quartos 1 Vaga 74 M2 R$ 1.300 São Paulo</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Apartamento Bela Vista à Venda 4 Quartos 1 Suíte 3 Vagas 320 m2 R$2.000.000 São Paulo</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Apartamento Vila da Saúde à Venda 2 Quartos 1 Banheiro 1 Vaga 49 M2 R$ 392.000 São Paulo</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Apartamento Itaim Bibi à Venda 2 Quartos 1 Vaga 52 m2 R$ 3.700 R$ 689.000 São Paulo</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Apartamento Duplex Vila Mariana à Venda 2 Suítes 2 Vagas 85 m2 R$ 1.280.000 São Paulo</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Tipos</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Apartamentos</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Casas</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Chácaras</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Comercial/Industrial</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Fazendas</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Flats</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terrenos</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>For Sale</span></strong>. All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </>
  )
}