export default function HomeAbout() {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="content">
                <h3>Quem somos?</h3>
                <p>
                  A liderança e o crescimento da BALDY IMÓVEIS fundamentam na busca incansável e constante pela eficiência operacional da Venda e Locação. Profissionais altamente qualificados e capacitados através da Ciências de Dados Aplicada. Conheça nosso BLOG: https://blog.baldyimoveis.com.br/
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn"> Saber mais <i className="bx bx-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-6 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4><a href="busca.html">Locação</a></h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                  </div>
                  <div className="col-xl-6 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4><a href="busca.html">Compra</a></h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}