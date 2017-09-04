import React from 'react';

class Child extends React.Component {
    render() {
        return(
            <div>
                    <p className="App-intro">Check out some other great hiking resources!</p>
                     <ul className="link-flex">
                     <li><a href="https://www.alltrails.com/mobile">
                     <img className="link-size" src="https://farm5.staticflickr.com/4331/36781178376_c3afa36a8b.jpg" alt=""></img>
                     </a></li>
                    <li><a href="http://www.redcross.org/get-help/how-to-prepare-for-emergencies/mobile-apps">
                     <img className="link-size" src="https://farm5.staticflickr.com/4344/36829054811_2fb20cea4c.jpg" alt=""></img>
                     </a></li>
                     <li><a href="http://weatherlive.info/">
                     <img className="link-size" src="https://farm5.staticflickr.com/4433/36133854594_e9b45d84b5.jpg" alt=""></img>
                     </a></li>
                    </ul>

                <div><p>Copyright © Russell Hayes Web Design 2017</p></div>
            </div>
        )
    }
}
export default Child