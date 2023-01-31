import "../styles/TopBar.css";

const TopBar = () => {
    return(
        <div className="header-container">
            <header className="container">
                <h1>Where in the World?</h1>
                <button type="button" aria-label="Toggle light/dark mode" className="toggle-button">
                    <img src="./images/moon.svg" alt="" />
                    <span>Dark Mode</span>
                </button>
            </header>
        </div>
    );
}

export default TopBar;
