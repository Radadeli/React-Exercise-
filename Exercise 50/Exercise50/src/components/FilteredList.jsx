import { useState, useMemo } from "react"
import PropTypes from "prop-types";
export function FilteredList({ items }) {
    const [filter, setFilter] = useState(18)

    const filterList = useMemo(() => {
        console.log("Filtering... ")
        return items.filter((item) => item.age> filter )
    }, [items, filter])

    return(
        <div>
            <h2>Filtered List</h2>
            <hr />
            <h5>Filtered by age</h5>
            <input type="number"
            value={filter}
            onChange={(e) => setFilter(parseInt(e.target.value))} 
            />

            <ul>
                {filterList.map((item) => (
                    <li key={item.id}>
                        {item.name} (Age {item.age})
                    </li>
                ))}
            </ul>
        </div>

)

}
FilteredList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      })
    ).isRequired,
}