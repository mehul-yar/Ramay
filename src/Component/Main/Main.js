

import React from 'react';
import Background from '../Assets/home.png';
import Stachu from '../Assets/stachu.png';
import { ExpandAltOutlined } from '@ant-design/icons';
import './Main.css';

import buttonConfig from '../../../package.json'

export default function Main() {
    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between bg-cover bg-center min-h-screen px-5 py-10"
            style={{
                backgroundImage: `url(${Background})`,
            }}
        >
            {/* First Section with Text */}
            <div className="w-full md:w-1/2 text-left space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-black font-mono">
                    Lorem ipsum dolor sit amet, <span className="text-yellow-700">consectetur,</span>
                </h1>
                <p className="text-black">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>

                <div className="flex space-x-4 mt-4">

                    {/* <button className="bg-yellow-600 h-10 w-32 hover:bg-transparent hover:text-yellow-700 border-2 border-yellow-600 shadow-md transition-all duration-300">
                        Know More <ExpandAltOutlined />
                    </button>
                    <button className="h-10 w-32 bg-transparent text-yellow-700 hover:bg-yellow-600 border-2 border-yellow-600 hover:text-white shadow-md transition-all duration-300">
                        Contact Us <ExpandAltOutlined />
                    </button> */}

                    {buttonConfig.buttons.map((button, index) => (
                        <button key={index} className={button.className}>
                            {button.text} <ExpandAltOutlined />
                        </button>

                    ))}

                </div>
            </div>

            {/* Second Section with Image */}
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img className="max-h-96" src={Stachu} alt="Stachu" />
            </div>
        </div>
    );
}
