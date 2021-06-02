import React from 'react'
import Faq from '../components/FAQ/Faq'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import HomeSection from '../components/HomeSection/HomeSection'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search Section/Search'
import WhyTrans from '../components/Why Trns/WhyTrans'
import Working from '../components/Working/Working'

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeSection/>
            <WhyTrans/>
            <Working/>
            <Features/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Home
