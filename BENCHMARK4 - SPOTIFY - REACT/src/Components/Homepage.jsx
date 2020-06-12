import React, { Component } from 'react';
import { Navbar, Nav, li } from 'react-bootstrap';
import SingleArtist from "./SingleArtist"


class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            eminem: []
        }
    }

    url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

    componentDidMount = () => {

        fetch(this.url + "eminem", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "35a27be37cmshaec950e654b09a5p10fd4cjsna2f6cbc02f43"
            }
        })
            .then((response) => response.json())
            .then((responseObject) => {
                console.log(responseObject);
                this.setState({ eminem: responseObject })
            })
            .catch((err) => {
                this.setState({ error: true });
                console.log('An error occucred:', err);
            })

    }

    render() {
        console.log(this.state.eminem);
        return (
            <>
                <div className="col-12 col-md-9 offset-md-3 container-b">
                    <div className="row">
                        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                            <a href="#">TRENDING</a>
                            <a href="#">PODCAST</a>
                            <a href="#">MOODS AND GENRES</a>
                            <a href="#">NEW RELEASES</a>
                            <a href="#">DISCOVER</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-10">
                            <div id="rock">
                                <h2>Eminem</h2>
                                <div className='row'>
                                    {/* {this.state.eminem.data
                                        .map(eminem => {
                                            <SingleArtist item={eminem} />
                                        })} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <div id="pop">
                                <h2>Sia</h2>
                                <div
                                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                                    id="popSection"
                                ></div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }


}
export default HomePage; 