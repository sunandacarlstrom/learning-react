import VehicleList from "../vehicles/VehicleList";
import PageHeader from "./PageHeader";

const Home = () => {
    return (
        <>
            <section className="container">
                <PageHeader headerText="Välkommen till Westcoast Cars (Home component)" />
                <p>Detta är vår startsida</p>
            </section>
            <hr />
            <VehicleList />
        </>
    );
};

export default Home;
