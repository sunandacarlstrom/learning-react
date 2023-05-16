import React, { useState } from "react";
import PageHeader from "../ui/PageHeader";
import Vehicle from "./Vehicle";

const VehicleList = () => {
    // här används React hook 'useState' för att endast uppdatera där förändringar görs t.ex. lägger till en ny bil i listan
    const [vehicles, updateVehicles] = useState([
        { id: 1, manufacturer: "Volvo", model: "V90" },
        { id: 2, manufacturer: "Volkswagen", model: "Tiguan" },
        { id: 3, manufacturer: "Ford", model: "Kuga" },
        { id: 4, manufacturer: "Kia", model: "Ceed" },
        { id: 5, manufacturer: "Ford", model: "Focus" },
        { id: 6, manufacturer: "BMW", model: "X3i" },
        { id: 7, manufacturer: "Volvo", model: "XC60" },
        { id: 8, manufacturer: "BMW", model: "326i" },
        { id: 9, manufacturer: "Toyota", model: "Yaris" },
    ]);

    // skapar en funktion som hanterar klickhändelsen
    const handleAddVehicleClick = () => {
        const newVehicle = {
            id: 10,
            manufacturer: "Fiat",
            model: "Uno",
        };
        // plockar isär den array som ligger där i och appenda det nya objektet på befintlig array med spread operator
        updateVehicles((list) => [...list, newVehicle]);
    };

    return (
        <>
            <PageHeader headerText="Våra aktuella bilar i lager" />
            <button className="btn" onClick={handleAddVehicleClick}>
                Lägg till ny bil
            </button>
            <ul>
                {vehicles.map((vehicle) => (
                    // skriv ut React.Fragment för att lösa problemet som uppstår med att VARJE child måste ha en unik nyckel
                    <React.Fragment key={vehicle.id}>
                        <Vehicle vehicle={vehicle} />
                    </React.Fragment>
                ))}
            </ul>
        </>
    );
};

export default VehicleList;
