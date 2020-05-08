import React  from 'react';
import NavbarComponent from '../components/NavbarComponent'
import CenterComponent from '../components/CenterComponent'

const Welcome = (props) => {
    
    var Background=`https://source.unsplash.com/4hbJ-eymZ1o/`
    return (
        <div style={{ 
            alignItems: "center", 
            alignContent: "center",
            width:"100vw" ,
            height:"100vh", 
            background:`url(${Background})`,
            backgroundRepeat:"no-repeat" ,
            backgroundSize:"cover",
            overflow:"hidden"
            }}>
            <div style={{ fontSize: "large", color: "black" }}>
                <NavbarComponent />
            </div>
            <CenterComponent />
        </div>
    )
}
export default Welcome