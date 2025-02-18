import { Icon } from "@iconify/react/dist/iconify.cjs";

const Features = () => {
    return ( 
        <div className="features">
            <div className="features-image-container"><img src="https://placehold.co/610x723" alt="girl-typing" /></div>
            <p className="pfeatures">Features</p>
            <h2>Our Features</h2>
            <p className="pfeatures2">Borrow e-books and audiobooks for free with your library card and access streaming services for movies, TV shows,music, and more.</p>

            <div className="features-grid">
                <div>
                    <Icon icon="ant-design:database-outlined"width={22} />  
                    <p style={{fontWeight: "bolder"}}>Database</p>
                </div>

                <div>
                    <Icon icon="material-symbols-light:headphones-outline-rounded" width={22} />
                    <p style={{fontWeight: "bolder"}}>Audiobooks</p>
                </div>

                <div>
                    <Icon icon="foundation:magnifying-glass" width={22}/>
                    <p style={{fontWeight: "bolder"}}>Research</p>
                </div>

                <div>
                    <Icon icon="mynaui:book-open" width={22}/>
                    <p style={{fontWeight: "bolder"}}>E-books</p>
                </div>
            </div>
            
           <hr />
        </div>
     );
}
 
export default Features;