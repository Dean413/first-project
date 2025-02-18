import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./button";
import "./steps.css"



const Pricing = () => {

    const check = {
        color: "red"
    }
   
    return ( 
        <div className="pricing">
            <p style={{marginLeft: "-25px"}}>price table</p>
            <h3 style={{marginLeft: "-25px"}}>Our Pricing</h3>

            <div className="pricing-grid">
                <div className="basic" style={{backgroundColor: "whitesmoke"}}>
                    < Icon icon= "ph:microphone" className="icon"/>
                    <h2 style={{fontWeight:"bold", margin: "0 0 12px -35px"}}>Basic</h2>
                    <h1 style={{color: " #0F06FE", fontSize: "", fontWeight: "bold"}}>$20 </h1>
                    <h4  style={{fontWeight:"bolder", margin: "0 0 12px -35px"}}>Month</h4>
                    <p style={{marginLeft: "-15px"}}>Access to limited E-book collections</p>
                    <p style={{marginLeft: "-15px"}}>Free 10 E-books</p>
                    <p style={{marginLeft: "-15px"}}>1 download</p>
                    <p style={{marginLeft: "-15px"}} className="discount">5% off</p>
                    <Button />
                </div>

                <div className="premium">
                    < Icon icon= "fluent:premium-28-regular" className="icon"/>
                    <h2 style={{fontWeight:"bold", marginBottom: "12px"}}>Premium</h2>
                    <h1 style={{fontWeight: "bolder"}}>$30 </h1>
                    <h4 style={{fontWeight:"bolder", marginBottom: "12px"}}>Month</h4>
                    <p>Access to full E-book collections</p>
                    <p>10000 E-books</p>
                    <p>5 downloads</p>
                    <p className="discount">15% off</p>
                    <div style={{marginTop: "18px"}}><a href="#" style={{textDecoration: "none", color: "#0F06FE", fontWeight: "bolder", backgroundColor: "white", padding: "0px 28px 5px 28px", borderRadius: "5px"}}>more...</a></div>
                </div>

                <div className="Elite" style={{backgroundColor: "whitesmoke"}}>
                    < Icon icon= "material-symbols-light:crown-outline" className="icon"/>
                    <h2 style={{fontWeight:"bold", marginBottom: "12px"}}>Elite</h2>
                    <h1 style={{color: " #0F06FE"}}>$58 </h1>
                    <h4 style={{fontWeight:"bolder", marginBottom: "12px"}}>Month</h4>
                    <p>Access to limited E-book collections</p>
                    <p>Audiobooks and digital media</p>
                    <p>10 E-books,  10 downloads</p>
                    <p className="discount">5% off</p>
                    < Button />
                </div>
            </div>
            <hr />
        </div>
     );
}
 
export default Pricing;