import { Icon } from "@iconify/react/dist/iconify.js";

const Social = () => {
    return ( 
        <div className="social-icon" style={{marginLeft: "-12px"}}>
            <a href="#" style={{marginLeft: "12px"}}><Icon icon="flowbite:facebook-solid" color="black" /></a>
            <a href="#" style={{marginLeft: "12px"}}><Icon icon= "mdi:twitter" color="black" /></a>
            <a href="#" style={{marginLeft: "12px"}}><Icon icon="pepicons-pop:internet" color="black" /></a>
        </div>
        
     );
}
 
export default Social;