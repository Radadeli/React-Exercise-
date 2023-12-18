import PropTypes from 'prop-types';

export function Welcome ({ name, age }) {
    return (
        <div>
        <p>Welcome, {name} </p>
        <p>Your age is {age} </p>
        </div>
    )
}
Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number 
};

export default Welcome;