// import React from "react";
// import Slider from "react-slick";
// import Flower1 from '../Assets/flower1.png'
// import Flower2 from '../Assets/flower2.png'
// import Flower3 from '../Assets/flower3.png'
// import bg from '../Assets/bg1.png'
// import Will from '../Assets/will.jpg'
// import profile2 from '../Assets/profile2.jpg'
// import profile3 from '../Assets/profile3.jpg'
// import profile4 from '../Assets/profile4.jpg'

// const Testimonial = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//     };

//     return (
//         <div className="bg-stone-100 top-10 py-16 relative mx-auto">
//             <div className="absolute left-0 ">
//                 <img className="w-1/2 " src={bg} />
//             </div>
//             <div className="absolute right-0 float-end">
//                 <img className="w-1/2 " src={bg} />
//             </div>

//             {/* Background image - commented out */}
//             <div className="absolute top-0 right-0 ">
//                 <img className="h-80" src={Flower1} />
//             </div>
//             <div className="absolute top-0 left-0 ">
//                 <img className="h-52" src={Flower2} />
//             </div>
//             <div className="absolute bottom-0 right-0 ">
//                 <img className="h-80" src={Flower3} />
//             </div>

//             <div className="text-center relative z-10">
//                 <h3 className="text-lg text-gray-500 font-semibold">Testimonials</h3>
//                 <h2 className="text-4xl font-bold text-yellow-700 mb-8">What Our Client Says</h2>

//                 <div class="border-t-2 border-yellow-700  mx-auto" style={{ width: '90%' }}></div>
//                 <br />
//                 <Slider {...settings}>
//                     <div>
//                         <p className="text-gray-600 max-w-3xl mx-auto mb-8">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                             enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//                             reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                             nulla pariatur.
//                         </p>

//                         <div className="flex flex-col items-center ">
//                             <div className="rounded-full p-3 border-2  ">
//                                 <img
//                                     src={profile4}
//                                     alt="Client"
//                                     className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
//                                 />
//                             </div>
//                             <h4 className="text-xl font-bold text-yellow-700">Mikasa Akermen</h4>
//                             <p className="text-gray-500">Dress Designer</p>
//                         </div>
//                     </div>

//                     {/* Add more slides here */}
//                     <div>
//                         <p className="text-gray-600 max-w-3xl mx-auto mb-8">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                             enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//                             reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                             nulla pariatur.
//                         </p>

//                         <div className="flex flex-col items-center ">
//                             <div className="rounded-full p-3 border-2  ">
//                                 <img
//                                     src={profile2}
//                                     alt="Client"
//                                     className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
//                                 />
//                             </div>
//                             <h4 className="text-xl font-bold text-yellow-700">Jack Smith</h4>
//                             <p className="text-gray-500">Dress Designer</p>
//                         </div>
//                     </div>
//                     {/**Third slide */}
//                     <div>
//                         <p className="text-gray-600 max-w-3xl mx-auto mb-8">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                             enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//                             reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                             nulla pariatur.
//                         </p>

//                         <div className="flex flex-col items-center ">
//                             <div className="rounded-full p-3 border-2  ">
//                                 <img
//                                     src={profile3}
//                                     alt="Client"
//                                     className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
//                                 />
//                             </div>
//                             <h4 className="text-xl font-bold text-yellow-700">Jack Smith</h4>
//                             <p className="text-gray-500">Dress Designer</p>
//                         </div>
//                     </div>
//                     {/** Fourth slide */}
//                     <div>
//                         <p className="text-gray-600 max-w-3xl mx-auto mb-8">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                             enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//                             reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                             nulla pariatur.
//                         </p>

//                         <div className="flex flex-col items-center ">
//                             <div className="rounded-full p-3 border-2  ">
//                                 <img
//                                     src={Will}
//                                     alt="Client"
//                                     className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
//                                 />
//                             </div>
//                             <h4 className="text-xl font-bold text-yellow-700">Jack Smith</h4>
//                             <p className="text-gray-500">Dress Designer</p>
//                         </div>
//                     </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;




import React from "react";
import Slider from "react-slick";
import Flower1 from '../Assets/flower1.png'
import Flower2 from '../Assets/flower2.png'
import Flower3 from '../Assets/flower3.png'
import bg from '../Assets/bg1.png'
import Will from '../Assets/will.jpg'
import profile2 from '../Assets/profile2.jpg'
import profile3 from '../Assets/profile3.jpg'
import profile4 from '../Assets/profile4.jpg'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,  // Set arrows to false to remove them
    };

    return (
        <div className="bg-stone-100 top-10 py-16 relative mx-auto">
            <div className="absolute left-0 ">
                <img className="w-1/2 " src={bg} />
            </div>
            <div className="absolute right-0 float-end">
                <img className="w-1/2 " src={bg} />
            </div>

            {/* Background image - commented out */}
            <div className="absolute top-0 right-0 ">
                <img className="h-80" src={Flower1} />
            </div>
            <div className="absolute top-0 left-0 ">
                <img className="h-52" src={Flower2} />
            </div>
            <div className="absolute bottom-0 right-0 ">
                <img className="h-80" src={Flower3} />
            </div>

            <div className="text-center relative z-10">
                <h3 className="text-lg text-gray-500 font-semibold">Testimonials</h3>
                <h2 className="text-4xl font-bold text-yellow-700 mb-8">What Our Client Says</h2>

                <div class="border-t-2 border-yellow-700  mx-auto" style={{ width: '90%' }}></div>
                <br />
                <Slider {...settings}>
                    <div>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>

                        <div className="flex flex-col items-center ">
                            <div className="rounded-full p-3 border-2  ">
                                <img
                                    src={profile4}
                                    alt="Client"
                                    className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
                                />
                            </div>
                            <h4 className="text-xl font-bold text-yellow-700">Mikasa Akermen</h4>
                            <p className="text-gray-500">Dress Designer</p>
                        </div>
                    </div>

                    {/* Add more slides here */}
                    <div>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>

                        <div className="flex flex-col items-center ">
                            <div className="rounded-full p-3 border-2  ">
                                <img
                                    src={profile2}
                                    alt="Client"
                                    className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
                                />
                            </div>
                            <h4 className="text-xl font-bold text-yellow-700">Jack Smith</h4>
                            <p className="text-gray-500">Dress Designer</p>
                        </div>
                    </div>
                    {/**Third slide */}
                    <div>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>

                        <div className="flex flex-col items-center ">
                            <div className="rounded-full p-3 border-2  ">
                                <img
                                    src={profile3}
                                    alt="Client"
                                    className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
                                />
                            </div>
                            <h4 className="text-xl font-bold text-yellow-700">Jack Smith</h4>
                            <p className="text-gray-500">Dress Designer</p>
                        </div>
                    </div>
                    {/** Fourth slide */}
                    <div>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>

                        <div className="flex flex-col items-center ">
                            <div className="rounded-full p-3 border-2  ">
                                <img
                                    src={Will}
                                    alt="Client"
                                    className="rounded-full w-16 h-16  bg-no-repeat mx-auto "
                                />
                            </div>
                            <h4 className="text-xl font-bold text-yellow-700">Jack Smith</h4>
                            <p className="text-gray-500">Dress Designer</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
