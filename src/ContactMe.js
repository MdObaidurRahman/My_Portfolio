import React from 'react';
import './ContactMe.css'
import emailjs from 'emailjs-com';
const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2ld70fs', 'template_k9on9la', e.target, "user_ncrVkp8bkmmM5gk8H8J3k")
            .then((result) => {
                console.log(result.text);
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (

        <div className="bg" id="ContactMe">
            <div className="container p-5">

                <form className="row" onSubmit={sendEmail}>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        {/* <h3 className="mb-2 text-primary">CONTACT</h3> */}
                        <h1 className=' pt-5 mb-5 about-text text-center text-capitalize'><span className="readMore">CONTACT ME</span> </h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Your Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <input type="text" name="user_email" placeholder="Email" className="form-control" />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="form-group">
                            <textarea type="text" name="message" placeholder="message..." className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" value="Send" > submit </button>

                    </div>


                </form>
            </div>
        </div >
    );
};

export default ContactMe;