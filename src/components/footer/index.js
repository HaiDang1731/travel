import React from 'react';
const Footer = () => {
    return (
        <>
            <footer className="ftco-footer bg-bottom ftco-no-pt" style={{ backgroundImage: "url(images/bg_3.jpg)" }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">About</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li className="ftco-animate"><a href="#"><span className="fa fa-twitter"></span></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="fa fa-facebook"></span></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="fa fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon fa fa-map-marker"></span><span className="text"> Hoang Quoc Viet, Cau Giay, Ha Noi </span></li>
                                        <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+84327182537</span></a></li>
                                        <li><a href="#"><span className="icon fa fa-paper-plane"></span><span className="text">truonghocdot05@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;