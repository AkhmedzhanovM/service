import { serviceCards } from "../data/serviceCards.data";
import ServiceCard from "./ServiceCard";

export default function ServiceCards(){    
    return(
        <div className="service-cards">
            {serviceCards.map((serviceCard) => (
                <ServiceCard 
                    key={serviceCard.icon} 
                    icon={serviceCard.icon} 
                    title={serviceCard.title} 
                    subtitle={serviceCard.subtitle}
                    paragraph={serviceCard.paragraph}
                />
            ))}
        </div>
    )
}