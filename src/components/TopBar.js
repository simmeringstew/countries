import "../styles/TopBar.css";

const TopBar = ({ mode, updateMode }) => {

    const colors = [
        {
            text: "hsl(200, 15%, 8%)",
            input: "hsl(0, 0%, 52%)",
            background: "hsl(0, 0%, 98%)",
            elements: "hsl(0, 0%, 100%)",
            src: "./images/moon.svg",
            span: "Dark Mode"
        },
        {
            text: "hsl(0, 0%, 100%)",
            input: "hsl(209, 23%, 22%)",
            background: "hsl(207, 26%, 17%)",
            elements: "hsl(209, 23%, 22%)",
            src: "./images/sun.svg",
            span: "Light Mode"
        }
    ];

    const handleClick = () => {
        const root = document.documentElement;
        const mode = document.querySelector(".mode").textContent;
        const icon = document.querySelector(".mode-icon");
        if (mode === "Dark Mode") {
            root.style.setProperty("--clr-text", colors[1].text);
            root.style.setProperty("--clr-input", colors[1].input);
            root.style.setProperty("--clr-background", colors[1].background);
            root.style.setProperty("--clr-elements", colors[1].elements);
            icon.src = colors[1].src;
            updateMode(colors[1].span);
        }
        else {
            root.style.setProperty("--clr-text", colors[0].text);
            root.style.setProperty("--clr-input", colors[0].input);
            root.style.setProperty("--clr-background", colors[0].background);
            root.style.setProperty("--clr-elements", colors[0].elements);
            icon.src = colors[0].src;
            updateMode(colors[0].span);
        }
    }

    return(
        <div className="header-container">
            <header className="container">
                <h1>Where in the World?</h1>
                <button type="button" aria-label="Toggle light/dark mode" className="toggle-button" onClick={handleClick}>
                    <img src="./images/moon.svg" alt="" className="mode-icon" />
                    <span className="mode">{mode}</span>
                </button>
            </header>
        </div>
    );
}

export default TopBar;
