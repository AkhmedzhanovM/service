import ServiceCards from "./ServiceCards";
import ServiceHeading from "./ServiceHeading";

export default function Services(){
    return(
        <div className="service">
            <ServiceHeading /> 
            <ServiceCards />
        </div>
    )
}