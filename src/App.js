
// import './App.css';
// import Dashboard from './Component/Dashboard/Dashboard';
// import Main from './Component/Main/Main';
// import Navbar from './Component/Navbar/Navbar';
// import Products from './Component/Products/Products';
// import Testimonial from './Component/Testimonial/Testimonial';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import { Footer } from 'antd/es/layout/layout';

// import Footer from './Component/Footer/Footer';
// import LatestPost from './Component/LatestPost/LatestPost';
// import ProductsDetails from './Pages/ProductsDetails';




// function App() {
//   return (
//     <Router>

//       <Routes>
//         {/* Main route with all the components */}
//         <Route path="/" element={
//           <>

//             <div className="App">
//               <Navbar />
//               <Main />
//               <Dashboard />
//               <Products />
//               <Testimonial />
//               <LatestPost />
//               <Footer />
//               <ProductsDetails />
//             </div>
//           </>
//         } />

//         {/* Route for Cricket Demo */}
//         <Route path="/ProductsDetails" element={<ProductsDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';
import Products from './Component/Products/Products';
import Testimonial from './Component/Testimonial/Testimonial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from './Component/Footer/Footer';
import LatestPost from './Component/LatestPost/LatestPost';
import ProductsDetails from './Pages/ProductsDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Main route with all the components */}
          <Route path="/" element={
            <>
              <Main />
              <Dashboard />
              <Products />
              <Testimonial />
              <LatestPost />

            </>
          } />

          {/* Route for Product Details */}
          <Route path="/ProductsDetails" element={<ProductsDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
