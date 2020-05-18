import React, { useEffect } from 'react';
// import NavbarComponent from '../components/NavbarComponent'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { Container, Col, Row, Image } from 'react-bootstrap';
const About = (props) => {

    var read_token = "4dc1ad1eb2d5ed95b4ca5aa7871d17f1b1cad197"

    const content = useSelector(state => state);
    const dispatch = useDispatch();

    function fetchUserData() {
        return dispatch => {
            axios({
                url: 'https://api.github.com/users/Lav-Hinsu',
                headers: {
                    Authorization: 'Bearer ' + read_token
                }
            }).then(res => dispatch(
                {
                    type: "FETCH_USER_DATA",
                    data: res.data
                }));
        }

    };
    useEffect(() => {
        dispatch(fetchUserData());
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);
    var data = content.user_data
    console.log(data)
    var avatar_url = data.avatar_url
    var name = data.name
    // var location = data.location
    // var html_url = data.html_url
    // var email = data.email
    // var public_repos = data.public_repos
    return (
        <div>
            <div>
                <Container style={{ display: "flex", justifyContent: "center", marginTop: "10vh", justifyItems: "center" }}>
                    <Row>
                        <Col sm>
                            <Image src={avatar_url} style={{ height: "20vh" }} roundedCircle fluid />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h3>
                                    {name}
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )

}
export default About