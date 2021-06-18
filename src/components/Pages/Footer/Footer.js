import React from 'react';
import './Footer.css';
import { Button } from "../../../Button";
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from "react-icons/all";
import { MdFingerprint } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Adventure newsletter to receive our best vacation deals
                    </p>
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input type='email'
                                   name='email'
                                   placeholder='Your Email'
                                   className='footer-input'
                            />
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Leadership</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Videos</h2>
                            <Link to='/'>Submit Videos</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencers</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Twitter</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                <MdFingerprint className='navbar-icon' />
                                Hallo
                            </Link>
                        </div>
                        <small className='website-rights'>Hallo © 2021</small>
                        <div className='social-icons'>
                            <Link className='social-icon-link facebook'
                                  to='/'
                                  target='_blank'
                                  aria-label='Facebook'
                            >
                                <FaFacebook />
                                {/*<i className='fab fa-facebook-f'></i>*/} {/* alt way */}
                            </Link>
                            <Link className='social-icon-link instagram'
                                  to='/'
                                  target='_blank'
                                  aria-label='Instagram'
                            >
                                <FaInstagram />
                                {/*<i className='fab fa-instagram'></i>*/} {/* alt way */}
                            </Link>
                            <Link className='social-icon-link youtube'
                                  to='/'
                                  target='_blank'
                                  aria-label='Youtube'
                            >
                                <FaYoutube />
                                {/*<i className='fab fa-youtube'></i>*/} {/* alt way */}
                            </Link>
                            <Link
                                className='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <FaTwitter/>
                                {/*<i className='fab fa-twitter'></i>*/} {/* alt way */}
                            </Link>
                            <Link className='social-icon-link linkedin'
                                  to='/'
                                  target='_blank'
                                  aria-label='LinkedIn'
                            >
                                <FaLinkedin />
                                {/*<i className='fab fa-linkedin'></i>*/} {/* alt way */}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Footer;
