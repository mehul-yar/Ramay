import React from 'react'
import stachu from "../Component/Assets/stachu.png"
import { Rate } from 'antd';
export default function ProductsDetails() {
    return (
        <div className='container mx-auto grid grid-cols-2'>
            <div className='grid place-content-center '>
                <img src={stachu} className='h-96' />

            </div>
            <div className='grid place-content-center'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3 className="font-bold text-lg mb-2">Bal Ram Lalla Murti 3.5 Inch</h3>
                <span className="font-bold mb-2 block">
                    <span className="line-through text-slate-500">$450.00</span> $300.00
                </span>
                <Rate defaultValue={4} className="mb-4" />
                <div className="flex justify-start space-x-4">
                    <button className="bg-yellow-600 h-8 w-32 hover:bg-transparent hover:text-yellow-700 
                            border-2 border-yellow-600 shadow-md">Buy Now</button>
                    <button className="hover:bg-yellow-600 h-8 w-32 bg-transparent text-yellow-700 
                            border-2 border-yellow-600 hover:text-white shadow-md">Add To Cart</button>
                </div>
            </div>



        </div>
    )
}
