import React from 'react'
import Post1 from '../Assets/post1.png'
import Post2 from '../Assets/post2.png'
import Post3 from '../Assets/post3.png'
import { ExpandAltOutlined } from '@ant-design/icons';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import buttonConfig from '../../../package.json'

export default function LatestPost() {
    return (
        <div className='my-16 mx-10 sm:mx-10 lg:mx-16'>
            <h1 className='text-3xl font-bold font-serif'>Our Latest Posts</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10   '>
                <div className='relative text-center bg-stone-100 p-4 rounded-lg shadow-lg'>
                    <img src={Post1} />
                    <div className='flex gap-6 my-1'>
                        <div className='flex justify-start gap-2 text-sm'>
                            <UserOutlined className='text-yellow-600' /> <span>Affiliate</span>
                        </div>
                        <div className='flex justify-end gap-2 text-sm'>
                            <CalendarOutlined className='text-yellow-600' /> <span>15 Jan 2024</span>
                        </div>
                    </div>
                    <p className='text-sm text-left font-bold my-1'>Bal Ram Lalla Murti 3.5 Inch Murti Nakesha</p>
                    <p className='text-left text-sm'>There are many variations of passages of Lorem Ipsum available,</p>
                    <div class="flex justify-start my-2">
                        {/* <button class="bg-yellow-600 h-8 w-32 hover:bg-transparent hover:text-yellow-700 
        border-2 border-yellow-600 shadow-md mt-2 text-white">
                            Know More<ExpandAltOutlined />
                        </button> */}
                        {buttonConfig.buttons1.map((button, index) => (
                            <button key={index} className={button.className}>
                                {button.text} <ExpandAltOutlined />
                            </button>

                        ))}
                    </div>
                </div>
                <div className='relative text-center bg-stone-100 p-4 rounded-lg shadow-lg'>
                    <img src={Post2} />
                    <div className='flex gap-6 my-1'>
                        <div className='flex justify-start gap-2 text-sm'>
                            <UserOutlined className='text-yellow-600' /> <span>Affiliate</span>
                        </div>
                        <div className='flex justify-end gap-2 text-sm'>
                            <CalendarOutlined className='text-yellow-600' /> <span>26 August 2024</span>
                        </div>
                    </div>

                    <p className='text-sm text-left font-bold my-1'>Bal Ram Lalla Murti 3.5 Inch Murti Nakesha</p>
                    <p className='text-left text-sm'>There are many variations of passages of Lorem Ipsum available,</p>
                    <div class="flex justify-start my-2">
                        {buttonConfig.buttons1.map((button, index) => (
                            <button key={index} className={button.className}>
                                {button.text} <ExpandAltOutlined />
                            </button>

                        ))}
                    </div>

                </div>
                <div className='relative text-center bg-stone-100 p-4 rounded-lg shadow-lg'>
                    <img src={Post3} />
                    <div className='flex gap-6 my-1'>
                        <div className='flex justify-start gap-2 text-sm'>
                            <UserOutlined className='text-yellow-600' /> <span>Affiliate</span>
                        </div>
                        <div className='flex justify-end gap-2 text-sm'>
                            <CalendarOutlined className='text-yellow-600' /> <span>16 Sept 2024</span>
                        </div>
                    </div>
                    <p className='text-sm text-left font-bold my-1'>Bal Ram Lalla Murti 3.5 Inch Murti Nakesha</p>
                    <p className='text-left text-sm'>There are many variations of passages of Lorem Ipsum available,</p>
                    <div class="flex justify-start my-2">
                        {buttonConfig.buttons1.map((button, index) => (
                            <button key={index} className={button.className}>
                                {button.text} <ExpandAltOutlined />
                            </button>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
