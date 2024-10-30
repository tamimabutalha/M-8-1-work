import PropTypes from "prop-types";
import Feature from "./Feature/Feature";

const PriceOPT = ({ option }) => {
    const { name, price, features } = option;
    
    return (
        <div className="bg-blue-500 rounded-md p-6 text-white">
            <h2 className="text-center">
                <span className="text-6xl font-extrabold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center">{name}</h4>
            <ul className="mt-4">
                {features.map((feature, index) => (
                    <Feature key={index} feature={feature} />
                ))}
            </ul>
        </div>
    );
};

PriceOPT.propTypes = {
    option: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        features: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
};

export default PriceOPT;
