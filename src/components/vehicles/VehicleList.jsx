import React from "react";
import PageHeader from "../ui/PageHeader";
import Vehicle from "./Vehicle";

const VehicleList = () => {
    // Hårdkodad array
    const vehicles = [
        { id: 1, manufacturer: "Volvo", model: "V90" },
        { id: 2, manufacturer: "Volkswagen", model: "Tiguan" },
        { id: 3, manufacturer: "Ford", model: "Kuga" },
        { id: 4, manufacturer: "Kia", model: "Ceed" },
        { id: 5, manufacturer: "Ford", model: "Focus" },
        { id: 6, manufacturer: "BMW", model: "X3i" },
        { id: 7, manufacturer: "Volvo", model: "XC60" },
        { id: 8, manufacturer: "BMW", model: "326i" },
        { id: 9, manufacturer: "Toyota", model: "Yaris" },
    ];

    return (
        <>
            <PageHeader headerText="Våra aktuella bilar i lager" />
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
