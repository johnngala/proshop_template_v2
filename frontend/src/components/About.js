import React from 'react';
import { Helmet } from 'react-helmet';


const About = () => {
  
    return (
        <main className='about'>
            <Helmet>
                <title>Beddings & Beyond - About</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>

            <header className='about__header'>
                <h1 className='about__heading'>Who we are!</h1>
            </header>

             <div className = 'about__image'>
                    <img src = 'images/about.jpg' alt = 'about' className = 'about__us__image'/>
            </div>
            
            <section className='about__info'>
                <div className='about__about'>  
                    <h1 className='about__subheading'>Beddings and Beyond Kenya</h1>
                    <p className='about__paragraph'>
                        What better way to end a long hard day than climbing into a uxury beddings?We offer sumptous bedsheets,duvets & duvet covers,fiber pillows & throw pillows.
                        For all your Luxury Home and Hotel Bedding needs.
                    </p>    
                </div>
                
            </section>
            
        </main>
    );
};

export default About;
