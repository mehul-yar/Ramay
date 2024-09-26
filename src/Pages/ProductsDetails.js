// import React from 'react'
// import stachu from "../Component/Assets/stachu.png"
// import { Rate } from 'antd';
// export default function ProductsDetails() {
//     return (
//         <div className='container mx-auto grid grid-cols-2'>
//             <div className='grid place-content-center '>
//                 <img src={stachu} className='h-96' />

//             </div>
//             <div className='grid place-content-center'>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                 <h3 className="font-bold text-lg mb-2">Bal Ram Lalla Murti 3.5 Inch</h3>
//                 <span className="font-bold mb-2 block">
//                     <span className="line-through text-slate-500">$450.00</span> $300.00
//                 </span>
//                 <Rate defaultValue={4} className="mb-4" />
//                 <div className="flex justify-start space-x-4">
//                     <button className="bg-yellow-600 h-8 w-32 hover:bg-transparent hover:text-yellow-700 
//                             border-2 border-yellow-600 shadow-md">Buy Now</button>
//                     <button className="hover:bg-yellow-600 h-8 w-32 bg-transparent text-yellow-700 
//                             border-2 border-yellow-600 hover:text-white shadow-md">Add To Cart</button>
//                 </div>
//             </div>



//         </div>
//     )
// }

import React from 'react';
import stachu from "../Component/Assets/stachu.png";
import { Rate } from 'antd';

export default function ProductsDetails() {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4'>
            {/* Left Section: Image */}
            <div className='grid place-content-center'>
                <img src={stachu} className='w-full md:h-96 object-contain' alt="Product" />
            </div>

            {/* Right Section: Product Details */}
            <div className='grid place-content-center text-left p-4'>
                <p className="mb-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className="font-bold text-lg md:text-xl mb-2">Bal Ram Lalla Murti 3.5 Inch</h3>

                {/* Price */}
                <span className="font-bold mb-4 block text-base md:text-lg">
                    <span className="line-through text-slate-500">$450.00</span> $300.00
                </span>

                {/* Rating */}
                <Rate defaultValue={4} className="mb-4" />

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4">
                    <button className="bg-yellow-600 h-10 w-full md:w-32 text-white hover:bg-transparent hover:text-yellow-700 border-2 border-yellow-600 shadow-md transition-all duration-300">
                        Buy Now
                    </button>
                    <button className="bg-transparent h-10 w-full md:w-32 text-yellow-700 hover:bg-yellow-600 hover:text-white border-2 border-yellow-600 shadow-md transition-all duration-300">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
