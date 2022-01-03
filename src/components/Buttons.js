export default function Button({onButton}){
    return(
        <div className="buttonDiv" onClick={onButton}>
            <button className="btn"><img src="imgs/blue_t.png" className="imgBtn" alt="tshit" data-key="type" data-value="tshirt"/></button>
            <button className="btn"><img src="imgs/blue_p.png" className="imgBtn" alt="pants" data-key="type" data-value="pants"/></button>
            <button className="btn"><img src="imgs/blue_s.png" className="imgBtn" alt="skirt" data-key="type" data-value="skirt"/></button>
            <button className="btn colorBtn blue" data-key="color" data-value="blue">Blue</button>
            <button className="btn colorBtn yellow" data-key="color" data-value="yellow">Yellow</button>
            <button className="btn colorBtn pink" data-key="color" data-value="pink">Pink</button>
        </div>
    );
}