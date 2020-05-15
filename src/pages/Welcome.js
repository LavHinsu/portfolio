import React  from 'react';
// import NavbarComponent from '../components/NavbarComponent'
import CenterComponent from '../components/CenterComponent'

const Welcome = (props) => {
    
    var Background=`https://source.unsplash.com/PBZsk31orGM/`
    return (
        <div id="welcome" style={{ 
            width:"100vw" ,
            height: "100vh",
            position:"fixed",
            background:`url(${Background})`,
            backgroundRepeat:"no-repeat" ,
            backgroundSize:"cover",
            
            }} >
            <CenterComponent />
        </div>
    )
}
export default Welcome