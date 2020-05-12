import React from 'react';
import NavbarComponent from '../components/NavbarComponent'

var GitHub = require('github-api');

const Project = (props) => {

    var read_token = "4dc1ad1eb2d5ed95b4ca5aa7871d17f1b1cad197"
 
    var gh = new GitHub({
           token: read_token
     });

    var me = gh.getUser();

    me.listStarredRepos(function(err, repos) {
        console.log(repos)
        // look at all the starred repos!
     });
    return (
        <div>
            <div style={{ fontSize: "large", color: "black" }}>
                <NavbarComponent />
            </div>
        </div>
    )
}
export default Project