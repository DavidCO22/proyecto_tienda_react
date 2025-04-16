import './homeStyles.css';

function Home() {

return (
    <div className="home-container">
        <h1 className="home-title">Welcome to TiendaMax</h1>
        <p className="home-description">Your one-stop shop for all your needs!</p>
        <div className="home-image-container">
            <img src="logo192.png" alt="TiendaMax" className="home-image" />
        </div>
        <a href=""><button className="home-button">Shop Now</button></a>
    </div>
)

}

export default Home;