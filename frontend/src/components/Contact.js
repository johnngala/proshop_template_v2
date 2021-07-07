import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div >
            <Helmet>
                <title>Beddings & Beyond - Contact</title>
                <meta
                    name='description'
                    content='Contact us'
                />
            </Helmet>
            <div>
                <div className = 'contact'>
                    <div className = 'contact__top'>
                        <h1  className = 'contact__top__h1'>Talk to us</h1>

                        <div className = 'contact__top__section'>
                            <img src = 'images/location.png' alt = 'location' className = 'contact__top__section__img' />
                            <p  className = 'contact__top__paragraph'>Nairobi,Kenya</p>
                        </div>

                        <div className = 'contact__top__section'>
                            <img src = 'images/email.png' alt = 'email' className = 'contact__top__section__img'/>
                            <p  className = 'contact__top__paragraph'>example@gmail.com</p>
                        </div>

                        <div className = 'contact__top__section'>
                            <img src = 'images/phone.png' alt = 'phone' className = 'contact__top__section__img'/>
                            <p  className = 'contact__top__paragraph'>0721413355 </p>
                        </div>  

                        <a href='https://www.instagram.com/beddings123/'>  
                            <div className = 'contact__top__section'>
                                <img src = 'images/instagram.png' alt = 'instagram' className = 'contact__top__section__img'/>
                                <p  className = 'contact__top__paragraph'>Beddings&Beyond</p>
                            </div>  
                        </a> 
                    </div>

                    <div className = 'contact__bottom'>
                        <img src= 'images/contact_us.jpg' alt = 'contact' className = 'contact__bottom__image'/>
                    </div>                    
                </div>
            </div>
        </div>
    );
};



export default Contact;
