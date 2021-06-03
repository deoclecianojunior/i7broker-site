export default function HomeSearch() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Acredite nos seus sonhos!</h1>
          <div className="row">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="digite código, cidade, bairro ou palavra-chave..." aria-label="digite código, cidade, bairro ou palavra-chave..." aria-describedby="button-addon2" />
                <a className="btn appointment-btn" type="button" id="button-addon2" href="/search">Pesquisar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}