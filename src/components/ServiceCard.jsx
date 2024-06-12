import { useState } from "react"
import ServiceModal from "./ServiceModal"

export default function ServiceCard({icon, title, subtitle, paragraph}){
    const [modal, setModal] = useState(false)

    function toggleModal(){
        setModal(!modal)
    }

    return(
        <>
            <div className="service-card" onClick={() => setModal(true)}>
                <img className="service-card-img" src={icon} />
                <h3 className="service-card-title">{title}</h3>
                <p className="service-card-subtitle">{subtitle}</p>
                <button className="service-card-btn">ПОДРОБНЕЕ &rarr;</button>
            </div>

            {modal && <ServiceModal icon={icon} title={title} subtitle={subtitle} paragraph={paragraph} onClose={toggleModal} />}
        </>
    )
}