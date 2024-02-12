import './FilterZone.css';

const FilterZone = ({ onChangeFilters }) => {
  return (
    <div className="filter-box">
      <form>
        <div className="input-box">
          <label id="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="nope"
            onChange={onChangeFilters}
          />
        </div>
        <div className="input-box">
          <label id="status">Buy / Sell</label>
          <select name="status" id="status" onChange={onChangeFilters}>
            <option value={0}>All</option>
            <option value={1}>Buy</option>
            <option value={2}>Sell</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilterZone;
