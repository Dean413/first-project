import { Icon } from "@iconify/react";
import register from "@iconify/icons-mdi/account-plus"
import "./steps.css"

const Steps = () => {
    return ( 
        <div className="steps">
            <small>steps</small>
            <h3>How it works</h3>
            <div className="process">
                <div className="step-one">
                    < Icon icon={register} width={22} className="step-one-icon"/>
                    <h3 style={{fontWeight: "bolder"}}>Step1</h3>
                    <p>sign up for a free account to access our digital collection</p>
                </div>

                <div className="arrow-right">
                    <p>< Icon icon="vaadin:arrows-long-right" /></p>
                </div>

                <div className="step-two">
                    <Icon icon="material-symbols:domain-verification" width={22} className="step-two-icon"/>
                    <h3 style={{fontWeight: "bolder"}}>Step2</h3>
                    <p>Verify your email address to activate your account</p>
                </div>

                <div className="arrow-right">
                    <p>< Icon icon="vaadin:arrows-long-right" /></p>
                </div>

                <div className="step-three">
                    <Icon icon="iconamoon:enter-bold" width={22} className="step-three-icon"/>
                    <h3 style={{fontWeight: "bolder"}}>Step3</h3>
                    <p>Log in to your account to start exploring our collection</p>
                </div>
                
            </div>

            <div className="schedule">
                    <p>schedule</p>
                    <h2 style={{marginBottom: "12px"}}>Event Schedule</h2>
                    <div className="carry">
                    <div className="eight" style={{backgroundColor: "whitesmoke", marginLeft: "9px", height: "150px", padding: "12px 0 0 12px", position: "relative"}}>
                        <h2 style={{marginLeft: "15px"}}>8:00am</h2>
                        < Icon icon="line-md:map-marker-filled-loop" color="black" fontSize={23} className="icon" />
                        <p>The e-library is available from 8:00 AM to 8:00 PM. Users can access library's
                        digital collection and use other services during these hours.</p>
                       
                    </div>

                    <div className="one" style={{backgroundColor: "whitesmoke", marginLeft: "9px", height: "150px", padding: "15px 0 0 15px", position: "relative"}}>
                        <h2 style={{marginLeft: "15px"}}>1:00pm</h2>
                        < Icon icon="line-md:map-marker-filled-loop" color="black" fontSize={23} className="icon" />
                        <p>The e-library is available from 1:00PM to 5:00 PM. This is a slightly
                        shorter period than weekdays.</p>
        
                    </div>
                    </div>
                </div> 
            <hr />
        </div>
     );
}
 
export default Steps;