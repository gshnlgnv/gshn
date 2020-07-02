import React from 'react';
import './Gshnlogocss.css';
import lg_center from './lg_center.png';
import lg_upright from './lg_upright.png';
import lg_upleft from './lg_upleft.png';
import lg_downright from './lg_downright.png';
import lg_downleft from './lg_downleft.png';
import alpaca from './alpaca.png';

const UPLEFT = 'UPLEFT';
const UPRIGHT = 'UPRIGHT';
const DOWNLEFT = 'DOWNLEFT';
const DOWNRIGHT = 'DOWNRIGHT';

export default class Gshnlogo extends React.Component {
    state = {logoSRC: lg_center}
    showAlpaca = [];
    navigationENUM = {
        [UPLEFT]: lg_upleft,
        [UPRIGHT]: lg_upright,
        [DOWNLEFT]: lg_downleft,
        [DOWNRIGHT]: lg_downright
    };

    alpacaEnterWebsitePicture = {alpaca}

    changeImage = (navigation) => {
        
        this.setState({
            logoSRC: this.navigationENUM[navigation]
        })
              
        this.addToArray(String(navigation));

    }
       
    addToArray = (chtoto) => {
        this.showAlpaca.push(chtoto)

        if (this.showAlpaca.length > 8) {
            this.showAlpaca.shift();
        }

        

        if (this.showAlpaca.join("") === `${UPLEFT}${UPRIGHT}${DOWNRIGHT}${DOWNLEFT}${UPLEFT}${UPRIGHT}${DOWNRIGHT}${DOWNLEFT}`) {
            console.log("j");
                        
        }
    }


    render() {
        return (
            <div>
                <div>
                <div className="back">
                  
                   <div id="upleft" onMouseEnter={ () => this.changeImage(UPLEFT) }>
                    
                  </div>
                  <div id="upright" onMouseEnter={ () => this.changeImage(UPRIGHT) }>
                    
                  </div>
                  <div id="downleft" onMouseEnter={ () => this.changeImage(DOWNLEFT) }>
                    
                  </div>
                  <div id="downright" onMouseEnter={ () => this.changeImage(DOWNRIGHT) }>
                    
                  </div>  
                  
                  <div className="front">
                   <img id="logo" src={this.state.logoSRC} alt={"alpaca"}/>  
                  </div>
                  
                  
                </div>
                
                </div>
                <div className="diva"> 
                <a className="a" href="https://gshn.ru/ToDoList/build/index.html">Вход на сайт</a>

                </div>
                                
            </div>

            
        )
 
    }

}