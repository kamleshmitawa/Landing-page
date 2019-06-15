import React from 'react'

class ContactUs extends React.Component {
    render() {
        return (
            <div className="conatiner" id="contact">
                <div className="contact">
                    <h1>Quick Contact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  <br />
                        incididunt ut labore et dolore magna aliqua.
                        </p>
                    <hr className="underline" />
                </div>
                <div className="container">
                    <form className="my-5">
                        <div className="form-row form-group">
                            <div className="col-lg-4 col-12 my-3">
                                <input type="text" className="form-control form-input" placeholder="Your Name" />
                            </div>
                            <div className="col-lg-4 col-12 my-3">
                                <input type="text" className="form-control form-input" placeholder="Your Email" />
                            </div>
                            <div className="col-lg-4 col-12 my-3">
                                <input type="text" className="form-control form-input" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="form-row form-group d-block my-5">
                            <textarea type="text" className="form-control contact-msg pt-3 pb-5 pl-4" placeholder="Message" />
                        </div>
                        <button type="button" className="btn contact-btn"> Submit Now </button>
                    </form>
                </div>
            </div>
        )
    }

}

export default ContactUs