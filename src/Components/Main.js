import React from 'react'
import Header from './Header';
import Banner from './Banner'
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import ContactUs from './ContactUs';
import FollowUs from './FollowUs';
import Footer from './Footer';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Banner />
                <Services />
                <Portfolio />
                <Team />
                <ContactUs />
                <FollowUs />
                <Footer />
            </div>
        )
    }
}

export default Main