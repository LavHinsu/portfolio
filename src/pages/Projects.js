import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import CardComponent from '../components/CardComponent'
import { CardColumns } from 'react-bootstrap';
const Project = (props) => {
    var read_token = "4dc1ad1eb2d5ed95b4ca5aa7871d17f1b1cad197"

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
        dispatch(fetchData())
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

port_repos.forEach(element => {
    console.log(element.name + ": " + element.language)
});

console.log(port_repos)

return (
    <div>

        <div className="mx-5 mt-4 ">
            <hr></hr>
            <CardColumns>

                {port_repos.map((item) =>
                    <CardComponent
                        name={item["name"]}
                        url={item["html_url"]}
                        description={item["description"]}
                        technology={item["language"]}
                    />

                )}

            </CardColumns>
        </div>
    </div >
)
}
export default Project