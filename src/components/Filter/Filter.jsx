import css from "../Filter/Filter.module.css";



export const Filter =({onChange }) => {  


    return (<div className={css.container}>
      <form name="search">
        <label>
          Find contacts by name
          <input 
            className={css.input}
            type="text"
            onChange={evt => onChange(evt.currentTarget.value)}
          >
          </input>
        </label>
      </form>
    </div>);
  }