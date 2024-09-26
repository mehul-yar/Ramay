
import React from 'react';
import { Rate } from 'antd';
import data from './productsData';



export default function Products() {

    const goToDemoPage = () => {
        window.open('/ProductsDetails', '_blank');
    };


    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                {data.map((product, index) => (
                    <div key={index} className="relative text-center bg-stone-100 p-4 rounded-lg shadow-lg">
                        <span className="absolute top-2 right-2 bg-yellow-600 h-7 w-16 flex items-center justify-center 
                        border-2 border-yellow-600 shadow-sm text-white">15% Off</span>

                        <img className="mx-auto mb-4" src={product.img} alt={`Product ${index + 1}`} />

                        <h3 className="font-bold text-lg mb-2">Bal Ram Lalla Murti 3.5 Inch</h3>

                        <span className="font-bold mb-2 block">
                            <span className="line-through text-slate-500">$450.00</span> $300.00
                        </span>

                        <Rate defaultValue={4} className="mb-4" />

                        <div className="flex justify-center space-x-4">
                            <button onClick={goToDemoPage} className="bg-yellow-600 h-8 w-32 hover:bg-transparent hover:text-yellow-700 
                            border-2 border-yellow-600 shadow-md">Buy Now</button>
                            <button className="hover:bg-yellow-600 h-8 w-32 bg-transparent text-yellow-700 
                            border-2 border-yellow-600 hover:text-white shadow-md">Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


