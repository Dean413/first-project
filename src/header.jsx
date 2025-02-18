import { Icon } from "@iconify/react/dist/iconify.js";
import "./Header.css"


const Header = () => {
    return ( 
        <div className="header">
            <header>
                <h4>Know us</h4>
                <h1>The world's wisdom at your fingertips</h1>
                <div><img src="https://placehold.co/617x617" alt="Lady-in-a-library" /></div>
                <a href="#">Get Started</a>
            </header>
            <hr />

            <div className="about">
                <div><img src="https://placehold.co/629x575" alt="book-shelf" style={{marginLeft: "80px"}} /></div>
                <h4>About us</h4>
                <h2>About our Company</h2>
                <p>We believe that knowledge should be accessible to everyone, regardless of geographical
                location or socio-economic background. We strive to provide high-quality digital content
                that is relevant, accurate, and engaging and continuously explore new technologies and
                innovative solutions to enhance the user experience and improve our services</p>
                <a href="#" className="read-more">Read more</a>
            </div>
            <hr />

            <div className="services">
                <h2>Our Services</h2>
                <p>Access to a vast collection of e-books, including fiction, non-fiction, 
                classics, and bestsellers</p>                   

                <div className="three-services">
                    <div className="collections">
                        <div><Icon icon="ph:box-arrow-down" width={36} height={36} style={{position: "absolute", top: "10px", left: "190px"}} /></div>
                        <h3>Digital Collections</h3>
                        <p>Access to digital collections, including rare books, and historical documents</p>
                    </div>

                    <div className="audiobooks">
                        <div><Icon icon="simple-icons:audiobookshelf" width={36} height={36} style={{position: "absolute", top: "12px", left: "189px"}}/> </div>
                        <h3>Audio Books</h3>
                        <p>Vast access to audiobooks and other digital resources</p>
                    </div>
                        
                    <div className="e-books">
                        <div><Icon icon= "majesticons:book-open-line"  width={36} height={36} style={{position: "absolute", top: "-65px", left: "190px"}}/></div>
                        <h3>E-books</h3>
                        <p>Access to research tutorials, guides, and instructional resources</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        
        
       

        
     );
}
 
export default Header;