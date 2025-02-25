const Hero = () => {
    return (
   <main className="hero container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE 
            THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
            <div className="hero-btn">
                <button>Shop now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="./src/assets/amazon.webp" alt="amazon" height={30} />
                    <img src="./src/assets/flipkart.png" alt="amazon" height={30} />
                </div>
            </div>
    </div>
    <div className="hero-image">
        <img src="./src/assets/shoe.jpeg" alt=" shoe" height={400} />
    </div>
   </main>
    );
};
export default Hero; 