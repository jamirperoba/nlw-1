import React from "react";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css"
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/1716460/avatar.png?width=90" alt="Avatar Jamir"/>
                <div>
                    <strong>Jamir Alves Peroba</strong>
                    <span>TI</span>
                </div>
            </header>

            <p>
                Suashduashdasuhasasu asdhuasdhasuhasuashdaudh had udh asudh asduas duashd .
                <br/><br/>
                SHuashduadha duahsduasdha sudhadua audha sduahs duashdausdh asud hasudhasud asudh asudh asudahs uash dausd hasud hadhuasdh asudhasud
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;