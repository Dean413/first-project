import { Icon } from "@iconify/react/dist/iconify.js";
import Social from "./social-icon";
import "./steps.css"

const Testimonials = () => {
    return ( 
        <div className="testimonials">
                <p style={{textAlign: "center"}}>Testimonials</p>
                <h3 style={{textAlign: "center"}}>What our clients say</h3>
                <div style={{width: "65%", marginLeft: "60px", marginTop: "12px"}} className="testimonials-image"><img src="https://placehold.co/628x495" alt="Client" style={{width: "100%"}}/></div>
            <div className="review">
                <p style={{marginLeft: "7px"}}><Icon icon="gridicons:quote" color="blue" className="quote"/></p>
                <p style={{width: "90%", marginLeft: "7px"}}>I was skeptical about using an e-library at first, but the e-library has exceeded my expectations! The selection is vast, and the download process is seamless. The user-friendly interface and vast collection have made studying so much easier!.</p>
                 <footer style={{margin: "12px 0 8px 7px"}}>
                    <p style={{fontWeight: "bolder"}}>Dean Bill</p>
                    <small>CEO</small>
                </footer>
            </div>
            
            <hr />
            
            <div className="team" style={{textAlign: "center"}}>
                <p>The team</p>
                <h3>Meet Our Team</h3>

                <div className="team-image" style={{marginTop: "12px"}}>
                    <div>
                        <img src="https://placehold.co/200x200" alt="library-director"  style={{borderRadius: 100}}/>
                        <p style={{fontWeight: "bolder"}}>Alex Cobbs</p>
                        <p>Library Director</p>
                        <Social />
                    </div>

                    <div>
                        <img src="https://placehold.co/200x200" alt="Head-Librarian"  style={{borderRadius: 100}}/>
                        <p style={{fontWeight: "bolder"}}>Mary Thompson</p>
                        <p>Head Librarian</p>
                        <Social />
                    </div>

                    <div>
                        <img src="https://placehold.co/200x200" alt="Technical-services-manager"  style={{borderRadius: 100}}/>
                        <p style={{fontWeight: "bolder"}}>Patricia Walz</p>
                        <p>Technical Services Manager</p>
                        <Social />
                    </div>

                    <div>
                        <img src="https://placehold.co/200x200" alt="Administrative-Assistant"  style={{borderRadius: 100}}/>
                        <p style={{fontWeight: "bolder"}}>Peter Reigns</p>
                        <p>Administrative Assistant</p>
                        <Social />
                    </div>
                </div>
                <hr />
            </div>

        </div>
     );
}
 
export default Testimonials;