import PropTypes from "prop-types";

const PageHeader = ({headerText}) => {
    return <h2 className="page-title centered-text">{headerText}</h2>
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