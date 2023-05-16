import React, { useState } from "react";
import PageHeader from "../ui/PageHeader";
import Vehicle from "./Vehicle";

const VehicleList = ({ vehicles }) => {
    if (!vehicles || vehicles.length === 0) {
        return (
            <>
                <PageHeader headerText={"Inga bilar i lager, tyvärr"} />
            </>
        );
    }

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
