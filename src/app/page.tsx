import React from 'react'
import Navbar from "../app/components/Navbar";
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import Offer from './components/Offer';
import Testimonal from './components/Testimonal';
import Footer from './components/Footer';
import Card from './components/Card';
import Menuitem from './components/Menuitem';
import ReservationSection from './components/Reservation';


export default function App() {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen'>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <ProductList/>
      <Banner/>
      <Offer/>
      <Card/>
      <Testimonal/>
     
<Menuitem/>
<ReservationSection/>
<Footer/>

    </div>
  )
}
