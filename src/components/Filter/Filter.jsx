import PropTypes from 'prop-types';
import css from "../Filter/Filter.module.css";

const Filter = ({onFilterInput, filter}) => {

const onInput = (evt) => {
    const filterValue = evt.currentTarget.value.trim();
    onFilterInput(filterValue);
  };

    return <div className={css.container}>
      <form name="search">
        <label>
          Find contacts by name
          <input 
            className={css.input}
            type="text"
            onChange={onInput}
          >
          </input>
        </label>
      </form>
    </div>;
}
  
export default Filter;

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}