export default function HomeAbout() {
  return (
    <>
      <div className="full-row bg-light">
            <div className="container">
                <div className="row">
                    <div className="col mb-5">
                        <h2 className="main-title down-line w-50 mx-auto mb-4 text-center w-sm-100">O que você procura?</h2>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="text-center p-35 bg-white transation hover-shadow h-100 rounded">
                            <span className="flaticon-network flat-medium text-primary"></span>
                            <h5 className="mb-3 font-400"><a href="#" className="d-block text-secondary hover-text-primary mt-4">Sobre nós</a></h5>
                            <p>A liderança e o crescimento da BALDY IMÓVEIS fundamentam na busca incansável e constante pela eficiência operacional da Venda e Locação. Profissionais altamente qualificados e capacitados através da Ciências de Dados Aplicada. Conheça nosso BLOG: https://blog.baldyimoveis.com.br/</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center p-35 bg-white transation hover-shadow h-100 rounded">
                            <span className="flaticon-network flat-medium text-primary"></span>
                            <h5 className="mb-3 font-400"><a href="#" className="d-block text-secondary hover-text-primary mt-4">Locação</a></h5>
                            <p>Alugue um imóvem conosco de forma tranqula e 100% digital</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center p-35 bg-white transation hover-shadow h-100 rounded">
                            <span className="flaticon-network flat-medium text-primary"></span>
                            <h5 className="mb-3 font-400"><a href="#" className="d-block text-secondary hover-text-primary mt-4">Compra</a></h5>
                            <p>Vários imíveis a sua disposição, realize o sonho de ter um imóvel próprio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}