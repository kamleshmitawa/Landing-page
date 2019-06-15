import React from 'react'

class Portfolio extends React.Component {
    render() {
        return (
            <div className="container-fluid portfolio-head" id="portfolio">
                <div className="mb-4 px-4">
                    <h2>Our Privious Works</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       <br /> incididunt ut labore et dolore magna aliqua.</p>
                    <hr className="underline" />
                </div>
                    <div className="portfolio-btn">
                        <button type="button" class="btn text-uppercase">all</button>
                        <button type="button" class="btn text-uppercase">app</button>
                        <button type="button" class="btn text-uppercase">card</button>
                        <button type="button" class="btn text-uppercase">logo</button>
                        <button type="button" class="btn text-uppercase">web</button>
                    </div>
                <div className="row portfolio-img">
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-1.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-4.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-3.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-4.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-5.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-3.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-4.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-1.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-4.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-5.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-2.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-12 port-img">
                        <a href="#">
                            <img className="img-fluid float-left" src="Assests/portfolio-5.jpg" />
                            <div className="description" >
                                <h5>App</h5>
                                <p>this is your app</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio