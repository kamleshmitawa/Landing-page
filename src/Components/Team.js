import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Team extends React.Component {
    render() {
        return (
            <div id="team" className="team-page">
                <div class="container-fluid">
                    <div className="my-5">
                        <h2>Meet Our Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                           <br /> incididunt ut labore et dolore magna aliqua.</p>
                        <hr className="underline" />
                    </div>

                    <div className="row mb-5 mx-lg-5">
                        <div className="col-12 col-lg-6 border border-left-0 px-3 py-2">
                            <div className="team-intro mx-2">
                                <div className="team-img float-left img-fluid bg-danger">
                                    <img src="Assests/Team-1.jpg" />
                                </div>
                                <div className="team-info text-left">
                                <h3>Harry Brown</h3>
                                    <p>Sr. UI Designer</p>
                                    <p> Follow me:</p>
                                    <ul className="list-inline follow">
                                 {/* <li> <FontAwesomeIcon icon="facebook" /> </li> */}
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 border border-left-0 px-3 py-2">
                            <div className="team-intro mx-2">
                                <div className="team-img float-left img-fluid bg-danger">
                                    <img src="Assests/Team-2.jpg" />
                                </div>
                                <div className="team-info text-left">
                                <h3>Harry Brown</h3>
                                    <p>Sr. UI Designer</p>
                                    <p> Follow me:</p>
                                    <ul className="list-inline follow">
                                 {/* <li> <FontAwesomeIcon icon="facebook" /> </li> */}
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                    <li className="list-inline-item"> <img src="Assests/icon.png" /> </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row quote px-0">
                        <h4> &quot;  Every Thing is designed.Few Things are Designed well.  &quot;
                            - Brian Reed</h4>
                        <button type="button" className="btn btn-lg">Request a Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Team