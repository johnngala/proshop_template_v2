import React from 'react'

function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'footer__logo'>
                <img src ='images/logo.jpg' alt = 'footer' className = 'footer__image' />
            </div>
            <div className = 'footer__copyright'>
                &copy; Bold Collections 2021
            </div>
            
            <a href =" http://www.johnngala.com/">
                <h5 className = 'footer__dev'>DevelopedbyJohnNgala&trade;</h5>
            </a>
        </div>
    )
}

export default Footer
