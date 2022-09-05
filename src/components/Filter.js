import { useState } from "react";
import "./filter.css";
const Filter = ({
  prices,
  onLocationFilter,
  onPriceFilter,
  PropertryTypes,
  onPropertryTypeFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    PropertryType: "",
    from: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "location":
        onLocationFilter(value);
        break;
      case "PropertryType":
        onPropertryTypeFilter(value);
        break;
      case "price":
        onPriceFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      // case "to":
      //   break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="package">
        <div className="filter">
          <form>
            <a className="line">
              <label>loaction</label>
              <br />
              <input
                type="text"
                id="location"
                className="input"
                placeholder="Enter the loaction..."
                value={filters.location}
                onChange={handleInput("location")}
                results
              />
            </a>
            <a className="line">
              <label>When</label>
              <br />
              <input
                type="date"
                className="input"
                id="startDate"
                onChange={handleInput("from")}
                placeholder="Enter the loaction..."
              />
            </a>
            <a className="line">
              <label>Price</label>
              <br />
              <select
                id="price"
                onChange={handleInput("price")}
              >
                <option value="">Select</option>
                {prices.map((price) => (
                  <option value={price} key={price}>
                    {price}
                  </option>
                ))}
              </select>
            </a>
            <a className="line">
              <label>Propertry Type</label>
              <br />
              <select
                id="PropertryType"
                onChange={handleInput("PropertryType")}
              >
                <option value="">Select</option>
                {PropertryTypes.map((PropertryType) => (
                  <option value={PropertryType} key={PropertryType}>
                    {PropertryType}
                  </option>
                ))}
              </select>
            </a>
            <a>
              <button className="btn">Search</button>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
