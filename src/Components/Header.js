import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid navigation text-uppercase">

                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler navbar-toggle-lg" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controlg="navbarTogglerDemo02" aria-expanded="falge" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse in-sm" id="navbarTogglerDemo02" area-expanded-lg="falge">
                        <ul class="nav navbar-nav navbar-right mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                            </nav> */}
                <nav className="navbar navbar-expand-lg justify-content-between">
                <button class="navbar-toggle text-right d-lg-none" type="button" data-toggle="collapse-nav" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">Menu</span>
                </button>
                    <a className="logo" href="#home">Tempo</a>
                   <div className="collapse-nav justify-content-end" id="navbarToggler">
                        <ul className="navbar-nav list-inline-lg text-right">
                                <li className="nav-item list-inline-item"> <a className="nav-link active" href="#home">Home</a></li>
                                <li className="nav-item list-inline-item"> <a className="nav-link" href="#service">Service</a> </li>
                                <li className="list-inline-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                                <li className="list-inline-item"><a className="nav-item nav-link" href="#team">our team</a></li>
                                <li className="list-inline-item"> <a className="nav-item nav-link" href="#contact">Contact us</a></li>
                            </ul>
                   </div>
                </nav> 
            </div>
                )
            }
        }
        
export default Header