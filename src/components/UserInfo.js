import React  from 'react';

import { useSelector } from "react-redux";
const UserInfo = (props) =>{

    const content = useSelector(state => state);
    var data = content.data

   function getUrl() 
    {
        return data.url
    }   
    console.log(getUrl())

    return(

        <div>

        </div>
    )
}
export default UserInfo