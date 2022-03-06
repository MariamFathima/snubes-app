import Form from "./form";
import "./formSection.css";
const FormSection = () => {
    return (
        <div className="form-section">
            <div className="form-section-inner">
                <div className="form-section-outter">
                    <Form />
                </div>
                <div className="form-section-text">
                    <div className="form-section-text-inner">
                        <h5>Welcome to Europes largest call center database</h5> 
                        <div>
                            <div className="form-trade">
                                <div className="form-trade-inner">
                                    <h4>500+</h4>
                                    <p>Tenders</p>
                                </div>
                                <div className="form-trade-inner">
                                    <h4>500+</h4>
                                    <p>Tenders</p>
                                </div>
                                <div className="form-trade-inner">
                                    <h4>500+</h4>
                                    <p>Tenders</p>
                                </div>
                                <div className="form-trade-inner">
                                    <h4>500+</h4>
                                    <p>Tenders</p>
                                </div>
                            </div>
                        </div>   
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default FormSection;