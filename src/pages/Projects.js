import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import CardComponent from '../components/CardComponent'
import { CardColumns } from 'react-bootstrap';
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

    //extract data from port_repos, add language data, and map it to component props
    var port_repos = getPortRepos()

    port_repos.forEach(element => {
        console.log(element.name + ": " + element.language)
    });

    console.log(port_repos)

    // var name = props.name
    // var url = props.url
    // var description = props.description
    // var technology = props.technology

    return (
        <div>
            <div className="mx-5 mt-3 ">
                <CardColumns>

                    {port_repos.map((item) =>
                        <CardComponent

                            
                            name={item["name"]}
                            url={item["html_url"]}
                            description={item["description"]}
                            technology={item["language"]}
                        />

                    )}

                    {/* <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent /> */}
                </CardColumns>
            </div>
        </div >
    )
}
export default Project