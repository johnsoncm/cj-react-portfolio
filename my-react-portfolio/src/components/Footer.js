import React from 'react';
import Github from '../assets/images/icons8-github-50.png'
import Email from '../assets/images/icons8-email-50.png'
import LinkedIn from '../assets/images/icons8-linkedin-50.png'
import Phone from '../assets/images/icons8-ringing-phone-50.png'


function Footer() {
    return(
          
        <div class="navbar navbar-expand-lg navbar-light" id="contact">
            <div class="container-fluid">
                {/* <a class="navbar-brand-contact">Contact Me</a> */}

                <span class="navbar-text">

                    <a class="nav-link" href="https://www.linkedin.com/in/casey-johnson-11336b4a/" target="_blank" rel="noreferrer"> <i
                            class="fab fa-linkedin"></i>
                            <img src={LinkedIn} alt="icon of linkedin" className="icon"/>
                            </a>


                    <span>
                        <a class="nav-link" href="https://github.com/johnsoncm" target="_blank" rel="noreferrer"><i
                                class="fab fa-github"></i>
                                <img src={Github} alt="icon of linkedin" className="icon"/>
                                </a>
                    </span>
                    <span>
                        <a class="nav-link" href="mailto:johnsoncm3@gmail.com">
                        <img src={Email} alt="icon of linkedin" className="icon"/>
                        </a>
                    </span>
                    <span>
                        <a class="nav-link active" aria-current="page" href="tel:2769716670">
                        <img src={Phone} alt="icon of linkedin" className="icon"/>
                        </a>
                    </span>
                </span>
            </div>
          
        </div>





    )

}

export default Footer;