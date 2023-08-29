import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, handleChange}) => {
	return (
		<label className={css.label}>
		Find contacts by name
		<input 
		type="text" 
		name="filter"
		className={css.input}
		onChange={handleChange}
		value={value} />
		</label>
	);
}

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};
export default Filter