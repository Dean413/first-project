const Button = () => {
    const buttonStyle = {
        textDecoration: "none",
        color: "white",
        backgroundColor: "blue",
        padding: "0px 28px 1px 28px",
        borderRadius: "5px" 
    }

    return ( 
        <div className="button">
            <a href="#" style={buttonStyle}>more...</a>
        </div>
     );
}
 
export default Button;