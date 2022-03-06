import React from "react";
import "./form.css";


const Form = () => {

    const [form, setForm] = React.useState({
        company: "",
        name: "",
        email: "",
        phone: "",
    })

    const [validated, setValidated] = React.useState(false);

    const [countryCode, setCountryCode] = React.useState("+44");

    React.useEffect(() => {
            fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=17762ff46b6f4a4baa47ee4310d358b0`)
                .then(res => res.json())
                .then(data => {
                    setCountryCode(data.calling_code);
                })
    }, []);

    const [error, setError] = React.useState("");

    const handleForm = (e) => {
        e.preventDefault();
        const company = e.target.company.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;

        if (company.length > 80) {
            setError("Company name should be less than 80 characters and should not contain numbers");
            return false
        }

        if (name.length > 50) {
            setError("Name should be less than 50 characters");
            return false
        }

        //validate phone based on this regex /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone) === false) {
            setError("Please enter valid phone number");
            return false
        }

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            setError("Please enter valid email");
            return false
        }

        const formData = {
            company,
            name,
            email,
            phone
        }
        setForm(formData);
        setValidated(true);
    }




    return (
        <>
            {
                !validated && 
                <div className="form-section-form">
                <div className="form-center">
                    <h4>Find inbound call centers for your company</h4>
                    <p className="form-des">Use our AI and Big Data driven call center sourcing solution</p>
                    <form className="form" onSubmit={handleForm}>
                        <div className="form-error">{error}</div>
                        <div className="form-group">
                            <label htmlFor="formcompany">Company</label>
                            <input type="text" className="form-control" id="formcompany" name="company" aria-describedby="company" placeholder="Company" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formName">Name</label>
                            <input type="text" className="form-control" id="formName" name="name" aria-describedby="Name" placeholder="Full name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formPhone">Phone</label>
                            <input type="text" className="form-control" id="formPhone" name="phone" aria-describedby="Phone" placeholder={countryCode} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formEmail">E-mail</label>
                            <input type="text" className="form-control" id="formEmail" name="email" aria-describedby="Email" placeholder="name@mail.com" />
                        </div>
                        <button type="submit">Get Informed</button>
                    </form>
                </div>

            </div>
            }

            {
                validated &&
                <div className="form-section-form">
                <div className="form-center">
                    <h4>Thank you for your request!</h4>
                    <p>You’ve taken the first step. Our experts will get in touch with you soon.</p>

                    <hr/>

                    <div>
                        <div className="submit-info"><div className="submit-title">Company</div><div>{form.company}</div></div>
                        <div className="submit-info"><div className="submit-title">Name</div><div>{form.name}</div></div>
                        <div className="submit-info"><div className="submit-title">Phone</div><div>{form.phone}</div></div>
                        <div className="submit-info"><div className="submit-title">Email</div><div>{form.email}</div></div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Form;