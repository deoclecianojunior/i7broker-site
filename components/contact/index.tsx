import { useState } from 'react';

export default function Contact(props: any) {
    const [sended, setSended] = useState(false)
    
    const registerUser = async (event: any) => {
        console.log(props)
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
        const res = await fetch(
        `${props.baseUrl}site/create-business`,
        {
            body: JSON.stringify({
                "name": event.target.name.value,
                "phone_whatsapp": event.target.phone_whatsapp.value,
                "email": event.target.email.value,
                "message": event.target.message.value,
                "properties_id": props.property.id
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }
        )
        const result = await res.json()
        // document.getElementById("contact-form").reset()
        setSended(true);
    }

  return (
    <>
        <div className="widget widget_contact bg-white border p-30 shadow-one rounded mb-30">
            <h5 className="mb-4">Entre em contato</h5>
            <div className="media mb-3">
                <img className="rounded-circle me-3" src="../assets/images/user1.jpg" alt="avata" />
                <div className="media-body">
                    <div className="h6 mt-0">Fábio Baldy</div>
                    <span>(11)99538 9121</span><br />
                    <span>fabiobaldy@baldy.com.br</span>
                </div>
            </div>
            {sended == true &&
                <div className="row">
                    <div className="col">
                        <div className="mb-4">
                            <img src="../assets/images/clipart/9.png" alt="" />
                        </div>
                        <h4 className="mb-3 font-400">Recebemos seu contato</h4>
                        <p>Já sabemos do seu interesse nesse imóvel, estamos trabalhando para atender você e em breve entrará em contato, aguarde nosso contato!</p>
                    </div>
                </div>
            }
            {sended == false &&
                <form className="quick-search form-icon-right" id="contact-form" action="#" method="post" onSubmit={registerUser}>
                    <div className="form-row">
                        <div className="col-12 mb-10">
                            <div className="form-group mb-0">
                                <input type="text" className="form-control" name="name" placeholder="Nome" />
                            </div>
                        </div>
                        <div className="col-12 mb-10">
                            <div className="form-group mb-0">
                                <input type="text" className="form-control" name="phone_whatsapp" placeholder="Telefone" />
                            </div>
                        </div>
                        <div className="col-12 mb-10">
                            <div className="form-group mb-0">
                                <input type="email" className="form-control" name="email" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="col-12 mb-10">
                            <div className="form-group mb-0">
                                <textarea className="form-control" name="message" placeholder="Mensagem"></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group mb-0">
                                <button type="submit" className="btn btn-primary w-100">Enviar sua mensagem</button>
                            </div>
                        </div>
                    </div>
                </form>
            }
        </div>
    </>
  )
}