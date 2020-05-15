import React, { useEffect } from 'react';
// import NavbarComponent from '../components/NavbarComponent'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { CardColumns, Card } from 'react-bootstrap';

const Project = (props) => {
    var read_token = "4dc1ad1eb2d5ed95b4ca5aa7871d17f1b1cad197"
    //  don't bother trying anything with this token, it has no permissions.
    //  i add it here because of githubs 30 requests/day rate limit & with this you can go nuts
    //  on the refresh button


    const content = useSelector(state => state);
    const dispatch = useDispatch();

    function fetchData() {
        return dispatch => {
            axios({
                url: 'https://api.github.com/users/Lav-Hinsu/repos',
                headers: {
                    Authorization: 'Bearer ' + read_token
                }
            }).then(res => dispatch({
                type: "FETCH_DATA",
                data: res.data
            }));
        }

    };
    useEffect(() => {
        dispatch(fetchData());
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);

    function getPortRepos() {
        var portRepos = []
        for (var i = 0; i < content.data.length; i++) {
            var obj = content.data[i];
            // console.log(obj.description)
            if (obj.description != null) {
                if (obj.description.includes("(portfolio)")) {
                    portRepos.push(obj)
                }
            }
        }
        console.log(portRepos)
        return portRepos
    }
    var port_repos = getPortRepos()
    console.log(port_repos)

    return (
        <div>
            <div className="mx-5 mt-3">
                <CardColumns>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                </CardColumns>
            </div>
        </div >
    )
}
export default Project