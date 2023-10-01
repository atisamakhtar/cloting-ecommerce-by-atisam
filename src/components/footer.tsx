"use client"

import React, {useContext} from 'react';
import logo from "public/media/Logo.webp";
import Image from 'next/image';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import {ProductsContext} from "../../context/productsContext";
import styles from "../css/footer.module.css";

// AiOutlineTwitter

const Footer = () => {

    const availableProducts = useContext(ProductsContext);

    // console.log("availableProducts from footer", availableProducts)

    return (
        <>
            <section className={`py-[4rem] px-[8rem] upper-footer ${styles.footerCss}`} >
                <div className='w-[75%] flex justify-between flex-col' >
                    <Image width="180" src={logo} alt="footer logo" />
                    <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className='flex' >
                        <AiOutlineTwitter className="text-4xl mr-5 rounded-md bg-gray-200 p-2" />
                        <BiLogoFacebook className="text-4xl mr-5 rounded-md bg-gray-200 p-2" />
                        <BiLogoLinkedin className="text-4xl mr-5 rounded-md bg-gray-200 p-2" />
                    </div>
                </div>
                <div style={{ "color": "#666" }} >
                    <h3 className='font-bold text-xl pb-4' >Company</h3>
                    <ul>
                        <li className='pb-3 font-normal'>About</li>
                        <li className='pb-3 font-normal'>Terms of Use</li>
                        <li className='pb-3 font-normal'>Privacy Policy</li>
                        <li className='pb-3 font-normal'>How it Works</li>
                        <li className='pb-3 font-normal'>Contact Us</li>
                    </ul>
                </div>
                <div style={{ "color": "#666" }} >
                    <h3 className='font-bold text-xl pb-4' >Company</h3>
                    <ul>
                        <li className='pb-3 font-normal'>About</li>
                        <li className='pb-3 font-normal'>Terms of Use</li>
                        <li className='pb-3 font-normal'>Privacy Policy</li>
                        <li className='pb-3 font-normal'>How it Works</li>
                        <li className='pb-3 font-normal'>Contact Us</li>
                    </ul>
                </div>
                <div style={{ "color": "#666" }} >
                    <h3 className='font-bold text-xl pb-4' >Company</h3>
                    <ul>
                        <li className='pb-3 font-normal'>About</li>
                        <li className='pb-3 font-normal'>Terms of Use</li>
                        <li className='pb-3 font-normal'>Privacy Policy</li>
                        <li className='pb-3 font-normal'>How it Works</li>
                        <li className='pb-3 font-normal'>Contact Us</li>
                    </ul>
                </div>
            </section>
            <section className={`border-t-[1px] border-black ${styles.copyright}`}>
                <p className='text-gray-500 my-[1.5rem] mx-[8rem] text-center' >Copyright © 2022 Dine Market</p>
                <p className='text-gray-500 my-[1.5rem] mx-[8rem] text-center' >
                    Design by.
                    <span className='font-bold text-black'>Weird Design Studio</span>
                </p>
                <p className='text-gray-500 my-[1.5rem] mx-[8rem] text-center' >
                    Design by.
                    <span className='font-bold text-black'>Weird Design Studio</span>
                </p>
            </section>
        </>
    )
}

export default Footer