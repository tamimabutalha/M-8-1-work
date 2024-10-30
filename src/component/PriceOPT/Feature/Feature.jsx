import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div className="">
            <p className="flex items-center"> <IoCheckmarkCircleOutline className="bg-purple-500 rounded-lg"></IoCheckmarkCircleOutline> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string.isRequired
}
export default Feature;