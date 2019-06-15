import React from 'react'

class Services extends React.Component {
    render() {
        return (
            <div className="container" id="service">
                <div className="row services">
                       <div className="col-12">
                       <h2> Our Service</h2>
                           </div>
                      <div className="col-12">
                           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                           <br/> incididunt ut labore et dolore magna aliqua. </p>
                           <hr className="underline" />
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12 service-design ml-3 ml-lg-0"> 
                        <div className="img-fluid design-img">
                            <img src="Assests/icon.png" height="50px" width="50px" />
                        </div>
                        <div className="design-content">
                            <h5>Design</h5>
                            <p>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                        </div>  
                    </div>
                    <div className="col-lg-4 col-sm-12 service-design ml-3 ml-lg-0"> 
                        <div className="img-fluid design-img">
                            <img src="Assests/icon.png" height="50px" width="50px" />
                        </div>
                        <div className="design-content">
                            <h5>Design</h5>
                            <p>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                        </div>  
                    </div>
                    <div className="col-lg-4 col-sm-12 service-design ml-3 ml-lg-0"> 
                        <div className="img-fluid design-img">
                            <img src="Assests/icon.png" height="50px" width="50px" />
                        </div>
                        <div className="design-content">
                            <h5>Design</h5>
                            <p>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                        </div>  
                    </div>

                </div>
                    
                </div>
        )
    }
}

export default Services