import React, { useState, useEffect } from 'react';
import NavbarComponent from '../components/NavbarComponent'
import axios from 'axios';

const Project = (props) => {
    var read_token = "4dc1ad1eb2d5ed95b4ca5aa7871d17f1b1cad197"
    const [data, setData] = useState({ hits: [] });
    //  don't bother trying anything with this token, it has no permissions.
    //  i add it here because of githubs 30 requests/day rate limit. with this you can go nuts
    //  on the refresh button
    useEffect(() => {
        const fetchData = async () => {
            const result = await
                axios({
                    url: 'https://api.github.com/users/Lav-Hinsu/repos',
                    headers: {
                        Authorization: 'Bearer ' + read_token
                    }
                });
            setData(result.data);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);

    function getPortRepos() {
        var portRepos=[]
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            // console.log(obj.description)
            if (obj.description != null) {
                if (obj.description.includes("(portfolio)")) {
                    portRepos.push(obj)
                }
            }
        }
        // console.log(portRepos)
        return portRepos
    }
    var port_repos = getPortRepos()
    console.log(port_repos)

    return (
        <div>
            <div style={{ fontSize: "large", color: "black" }}>
                <NavbarComponent />
            </div>
        </div>
    )
}
export default Project