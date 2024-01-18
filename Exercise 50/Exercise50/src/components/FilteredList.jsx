import { useState, useMemo } from "react";
import PropTypes from "prop-types";

export function FilteredList({ items }) {
  const [filter, setFilter] = useState("18");

  const filterList = useMemo(() => {
    return items ? items.filter((item) => item.age > parseInt(filter)) : [];
  }, [items, filter]);
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log("Filter Submitted");
  };

  return (
    <div>
      <h2>Filtered List</h2>
      <hr />
      <h5>Filtered by age</h5>
      <form onSubmit={handleFilterSubmit}>
        <input
          type="number"
          value={filter}
          onChange={(e) => setFilter(parseInt(e.target.value))}
        />
        <button type="submit">Apply Filter</button>
      </form>
      <ul>
        {filterList.map((item) => (
          <li key={item.id}>
            {item.name} (Age {item.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

FilteredList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ),
};

export default FilteredList;
