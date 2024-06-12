export default function ServiceModal({icon, title, subtitle, paragraph, onClose}){
    return(
        <div className="modal-container">
            <div className="modal-wrapper">
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-content">
                    <img className="modal-img" src={icon} alt="" />
                    <h3 className="modal-title">{title}</h3>
                    <p className="modal-subtitle">{subtitle}</p>
                    <p className="modal-paragraph">{paragraph}</p>
                </div>
            </div>
        </div>
    )
}