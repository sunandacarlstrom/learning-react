import Home from "./components/Home";

// importerar datat här för att sedan skicka vidare ner i hierarkin
import vehicles from "./data/vehicles.json";

import "./assets/css/style.css";

const App = () => {
    return (
        <article className="page">
            <Home vehicles={vehicles} />
        </article>
    );
};

export default App;
