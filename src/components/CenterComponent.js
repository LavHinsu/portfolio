import React  from 'react';
import Typewriter from 'typewriter-effect';
import { Button} from 'react-bootstrap';


const CenterComponent = (props) => {

    var email = "hinsulav105@gmail.com"
    function mail(){
        window.location.href = `mailto:${email}`;
    }

    return (
        <div style={{color:"white"}}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap');
            </style>
            <div class="jumbotron bg-transparent mx-auto" fluid>
                <div class="row">
                    <div class="col align-self-center" style={{ fontSize: "4.5rem",fontFamily:'Playfair Display' }}>
                        {"I'm Lav,& I'm a"}
                        <Typewriter
                            options={{
                                strings: ['Front-End', 'Back-End', 'Full-Stack', 'Mobile'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        {"Developer "}
                        
                    </div>
                    
                </div>
                <Button variant="secondary" 
                size = "lg" 
                style = {{color:"White",marginTop:"2vh", fontFamily:"Playfair Display"}}
                onClick= {mail}
                >
                    Get In Touch
                </Button>
            </div>
        </div>
    )

}
export default CenterComponent