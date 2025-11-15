import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-base-content pt-10">
            <div className="footer sm:footer-horizontal p-10">
                {/* About Section */}
                <nav>
                    <h6 className="footer-title text-[#8249EB]">About</h6>
                    <p className="w-64">
                        We provide top-quality services and digital solutions to help
                        your business grow. Your satisfaction is our priority.
                    </p>
                </nav>
                {/* Services */}
                <nav>
                    <h6 className="footer-title text-[#8249EB]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                {/* Company */}
                <nav>
                    <h6 className="footer-title text-[#8249EB]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                {/* Contact */}
                <nav>
                    <h6 className="footer-title text-[#8249EB]">Contact</h6>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-[#8249EB]" /> <span>+880 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-[#8249EB]" /> <span>info@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#8249EB]" />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </nav>
                {/* Newsletter */}
                <nav>
                    <h6 className="footer-title text-[#8249EB]">Newsletter</h6>
                    <p className="mb-2">Subscribe to get updates & offers</p>
                    <div className="form-control w-72">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="input input-bordered w-full"
                            />
                            <button className="btn mt-2 bg-[#8249EB] text-white hover:bg-[#6c37c0]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    {/* Social */}
                    <div className="flex gap-5 text-2xl mt-5">
                        <a className="hover:text-[#8249EB] transition duration-200 cursor-pointer">
                            <FaFacebookF />
                        </a>
                        <a className="hover:text-[#8249EB] transition duration-200 cursor-pointer">
                            <FaTwitter />
                        </a>
                        <a className="hover:text-[#8249EB] transition duration-200 cursor-pointer">
                            <FaYoutube />
                        </a>
                    </div>
                </nav>
            </div>
            {/* Bottom Bar */}
            <div className="border-t border-gray-400 py-4 text-center">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
