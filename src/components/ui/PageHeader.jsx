import PropTypes from "prop-types";

const PageHeader = ({headerText}) => {
    return <h1>{headerText}</h1>
}; 

// Definiera egenskapers typer och om de är obligatoriska
PageHeader.propTypes = {
    headerText: PropTypes.string
}; 

// Standardvärde på egenskaper
PageHeader.defaultProps = {
    headerText: "Rubrik för sidan"
};  

export default PageHeader; 