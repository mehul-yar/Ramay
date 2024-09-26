
import React from 'react';
import FooterImg from '../Assets/footer.png';
import Social from '../Assets/social.png';
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div className="bg-yellow-600 text-white pt-10 pb-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">

                {/* Contact Section */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
                    <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                        <p>Jhotwara Pin Code is 302012.<br />Jhotwara is located in Jaipur <br />in Rajasthan, India.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Have Questions?</h3>
                        <p>+91 9876543210<br />+91 9876543210</p>
                    </div>
                </div>

                {/* Center Section - Logo & Description */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <img src={FooterImg} className="w-48 md:w-60" alt="Footer Logo" />
                    <p className="w-72 md:w-96">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        in some form, by injected humour.
                    </p>
                    <div className="flex space-x-4 text-xl">
                        <FacebookOutlined />
                        <LinkedinOutlined />
                        <InstagramOutlined />
                        <YoutubeOutlined />
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Shop</a></li>
                        <li><a href="#" className="hover:underline">My Cart</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t-2 border-white my-4 mx-auto" style={{ width: '90%' }}></div>

            {/* Bottom Section */}
            <div className="container mx-auto px-4 mt-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                    <p>All Rights Reserved 2024</p>
                </div>

                <div className="flex justify-center sm:justify-end">
                    <img src={Social} className="h-5" alt="Social Icons" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
