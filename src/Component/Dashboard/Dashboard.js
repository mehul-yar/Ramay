import React from 'react'
import Image1 from '../Assets/image1.png'
import Image2 from '../Assets/image2.png'
import Image3 from '../Assets/image3.png'
import bg from '../Assets/bg.png'
import { Row, Col, Button, } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';

import buttonConfig from '../../../package.json'

export default function Dashboard() {
    return (
        <div className='my-16'>


            <div className="flex flex-wrap mx-4">
                {/* Image Section: Hidden on small screens */}
                <div className="w-1/2  items-center justify-center hidden sm:flex ">
                    <img className="w-96" src={Image1} alt="Description" />
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-1/2 inline items-center pt-10 pr-16 relative">
                    <span className="text-yellow-700">About</span>
                    <h1 className="h1Tag lg:text-5xl sm:text-3xl  font-bold text-black font-mono text-left ">
                        Lorem ipsum dolor sit <span className="text-yellow-700">consectetur</span>
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words.
                    </p>
                    <br />

                    {buttonConfig.buttons1.map((button, index) => (
                        <button key={index} className={button.className}>
                            {button.text} <ExpandAltOutlined />
                        </button>

                    ))}

                    {/* Background Image */}
                    <div className="absolute top-0 right-0">
                        <img className="w-80 h-96" src={bg} />
                    </div>
                </div>
            </div>



            <div className="flex flex-wrap mt-16 mx-4">
                {/* Content Section */}
                <div className="w-full sm:w-1/2 inline items-center pt-10 pl-16 relative">
                    <span className="text-yellow-700">Nakshatra</span>
                    <h1 className="h1Tag lg:text-5xl sm:text-3xl  font-bold text-black font-mono text-left ">
                        Lorem ipsum dolor sit <span className="text-yellow-700">consectetur</span>
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even slightly believable. If you are going to use a passage of
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                        middle of text.
                    </p>
                    <br />

                    {buttonConfig.buttons1.map((button, index) => (
                        <button key={index} className={button.className}>
                            {button.text} <ExpandAltOutlined />
                        </button>

                    ))}

                    {/* Background Image */}
                    <div className="absolute top-0 left-0">
                        <img className="w-80 h-96" src={bg} />
                    </div>
                </div>

                {/* Image Section: Hidden on small screens */}
                <div className="w-full sm:w-1/2  items-center justify-center hidden sm:flex">
                    <img className="w-96" src={Image2} alt="Description" />
                </div>
            </div>




            <div className="flex flex-wrap mx-4">
                {/* Image Section: Hidden on small screens */}
                <div className="w-1/2  items-center justify-center hidden sm:flex ">
                    <img className="w-96" src={Image3} alt="Description" />
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-1/2 inline items-center pt-10 pr-16 relative">
                    <span className="text-yellow-700">About</span>
                    <h1 className="h1Tag lg:text-5xl sm:text-3xl  font-bold text-black font-mono text-left ">
                        Lorem ipsum dolor sit <span className="text-yellow-700">consectetur</span>
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words.
                    </p>
                    <br />
                    {/* <button className="bg-yellow-600 h-8 w-32 hover:bg-transparent hover:text-yellow-700 
        border-2 border-yellow-600 shadow-md">
                        Know More <ExpandAltOutlined />
                    </button> */}
                    {buttonConfig.buttons1.map((button, index) => (
                        <button key={index} className={button.className}>
                            {button.text} <ExpandAltOutlined />
                        </button>

                    ))}

                    {/* Background Image */}
                    <div className="absolute top-0 right-0">
                        <img className="w-80 h-96" src={bg} />
                    </div>
                </div>
            </div>


            {/* <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row> */}
        </div>
    )
}
