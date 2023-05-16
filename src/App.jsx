// Här vill jag endast rendera Home-komponenten

import Home from "./components/ui/Home";

import "./assets/css/style.css";

const App = () => {
    return (
        <article className="page">
            <Home />
        </article>
    );
};

export default App;
