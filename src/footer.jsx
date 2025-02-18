import { Icon } from "@iconify/react/dist/iconify.cjs";
import "./steps.css"

const Footer = () => {
    return ( 
        <div className="footer" style={{textAlign: "center"}}>
            <p>counters</p>
            <h3 style={{marginBottom: "22px"}}>Our Numbers</h3>

            <div className="numbers">
                <div className="book">
                    <Icon icon="mynaui:book-open" width={22} />
                    <p style={{fontWeight: "bolder", color: "#0F06FE"}} className="fontfamily">100</p>
                    <p style={{fontWeight: "bolder"}}>E-books</p>
                </div>

                <div className="mic">
                    <Icon icon="iconamoon:microphone-duotone" width={22} />
                    <p style={{fontWeight: "bolder", color: "#0F06FE"}} className="fontfamily">120</p>
                    <p style={{fontWeight: "bolder"}}>Feedbacks</p>
                </div>

                <div className="users">
                    <Icon icon="mdi:register-outline" width={22} />
                    <p style={{fontWeight: "bolder", color: "#0F06FE"}} className="fontfamily">300</p>
                    <p style={{fontWeight: "bolder"}}>Users</p>
                </div>

                <div className="Audiobooks">
                    <Icon icon="material-symbols-light:headphones-outline" width={22} />
                    <p style={{fontWeight: "bolder", color: "#0F06FE"}} className="fontfamily">175</p>
                    <p style={{fontWeight: "bolder"}}>Audiobooks</p>
                </div>
            </div>    
            <hr />

                <div className="faq">
                    <p>FAQ</p>
                    <p style={{fontWeight: "bolder", marginBottom: "8px"}}>Frequently Asked Questions</p>
                    <p style={{marginBottom: "12px"}}>Here are some potential Frequently Asked Questions by some 
                    e-library users </p>

                    <div className="paragraphs" style={{textAlign: "left"}}>
                        <p> <Icon icon="mingcute:question-fill" width={18} />How do i access the libray</p>
                        <p> <Icon icon="mingcute:question-fill" width={18} />How do i borrow an e-book or audiobook</p>
                        <p> <Icon icon="mingcute:question-fill" width={18} />How long can i keep an e-book or an audiobook</p>
                        <p> <Icon icon="mingcute:question-fill" width={18} />Can i download e-book or audiobooks to my device</p>
                    </div>

                    <div className="last" style={{backgroundColor: "#0F06FE", color: "white", height: "90px"}}>
                        <footer style={{marginTop: "32px"}}>
                            <div style={{margin: "20px 0 2px 0"}}><p >Dive Into Our Digital World</p></div>
                            
                            <nav>
                                <a href="#"><Icon icon="flowbite:facebook-solid" color="white" width={22}  style={{margin: "10px 0 10px 10px"}} /></a>
                                <a href="#"><Icon icon= "mdi:twitter" color="white"  width={22} style={{margin: "10px 0 10px 10px"}} /></a>
                                <a href="#"><Icon icon="pepicons-pop:internet" color="white"  width={22} style={{margin: "10px 0 10px 10px"}} /></a>
                            </nav>
                        </footer>
                    </div>
                </div>
        </div>
     );
}
 
export default Footer;