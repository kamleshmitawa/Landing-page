import React from 'react'
import './Body.css'

class Banner extends React.Component {
    render() {
        return (
            <div id="home">
                <div className="container-fluid banner text-uppercase text-lg-justify">
                        <h1 className="display-lg-4 small-sm"> WELCOME tO  <span className="font-weight-bold">TEMPO</span> </h1>
                        <p>MULTIPURPOSE HTML5 bootstrap TEMPLATE.</p>
                        <button type="button" className="btn btn-outline-secondary btn-lg  banner-btn text-uppercase mt-5">Learn More</button>
                </div>
                <div className="conatiner-fluid">
                    <div className="col-12 col-sm-6 banner-heading py-5">
                        <h1 className="display-lg-5"> Say Hey to Tempo !!</h1>
                        <p>Full Responsive HTML5 Bootstrap Template</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner