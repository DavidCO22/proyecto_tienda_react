import { useState } from 'react';
import './contactStyles.css';

function ContactPage() {

    const [infoData, changeInfo] = useState(true)

    return(

        <div className="contact-container">


            <h1>Quieres saber mas? </h1>
            <h2>Contactanos o Inscribete para ver mas Ofertas</h2>
            <div className="contact-form-container">
                <form className="contact-form">
                    <input type="text" placeholder="Nombre" required />
                    <input type="email" placeholder="Correo Electronico" required />
                    <textarea placeholder="Mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </form>

            <div className="vision-mission">
                
                <div className="mv-container" onClick={() => changeInfo(!infoData)}>

                    { 
                    
                        infoData ? 
                            <>  
                            <h3>Mision</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ea inventore voluptas minima tempora hic cupiditate obcaecati, 
                                neque assumenda repellat eius, quos aut, quia iusto laborum voluptate 
                                repellendus nesciunt! Nulla, ducimus.ipsum dolor sit amet consectetur adipisicing elit. 
                                Ea inventore voluptas minima tempora hic cupiditate obcaecati, 
                                neque assumenda repellat eius, quos aut, quia iusto laborum voluptate 
                                repellendus nesciunt! Nulla, ducimus
                            </p>
                            </>
                        :
                            <>
                            <h3>Vision</h3>
                            <p>
                                minima tempora hic cupiditate obcaecati, 
                                neque assumenda repellat eius, quos aut, quia iusto laborum voluptate 
                                repellendus nesciunt! Nulla, ducimusconsectetur adipisicing elit. 
                                Ea inventore voluptas minima tempora hic cupiditate obcaecati, 
                                neque assumenda repellat eius, quos aut, quia iusto laborum voluptate 
                                repellendus nesciunt! Nulla, ducimus
                            </p>
                            </>

                    }

                 </div>

                
            </div>
            </div>




        </div>



    )

}

export default ContactPage;