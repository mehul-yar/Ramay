
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';
import Products from './Component/Products/Products';
import Testimonial from './Component/Testimonial/Testimonial';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Footer } from 'antd/es/layout/layout';

import Footer from './Component/Footer/Footer';
import LatestPost from './Component/LatestPost/LatestPost';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Dashboard />
      <Products />
      <Testimonial />
      <LatestPost />
      <Footer />
    </div>
  );
}

export default App;
