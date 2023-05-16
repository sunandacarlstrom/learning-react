import Card from "../ui/Card";

// Importerar specifikt css
import "./vehicle.css"; 

const Vehicle = ({ vehicle }) => {
    return (
        <Card key={vehicle.id}>
            <img src={require(`../../assets/images/${vehicle.imageUrl}`)} alt={vehicle.model} />
            <div className="card-body">
                {vehicle.manufacturer} - {vehicle.model}
            </div>
        </Card>
    );
};

export default Vehicle;
