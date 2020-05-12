import React, { useState, useEffect } from 'react';
import NavbarComponent from '../components/NavbarComponent'
import axios from 'axios';

const Project = (props) => {

    var read_token = "4dc1ad1eb2d5ed95b4ca5aa7871d17f1b1cad197"
    const [data, setData] = useState({ hits: [] });
    //don't bother trying anything with this token, it is read only.
    useEffect(() => {

         // eslint-disable-next-line react-hooks/exhaustive-deps
        const fetchData = async () => {
            const result = await
                axios({
                    url: 'https://api.github.com/users/Lav-Hinsu',
                    headers: {
                        Authorization: 'Bearer ' + read_token
                    }
                });
            setData(result.data);
        };
        
        // eslint-disable-next-line react-hooks/exhaustive-deps  
        fetchData();
    }, []);
    console.log(data)
    return (
        <div>
            <div style={{ fontSize: "large", color: "black" }}>
                <NavbarComponent />
            </div>
        </div>
    )
}
export default Project