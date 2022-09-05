import { useEffect, useState } from "react";
import "./App.css";
import "./components/card.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import data from "./MOCK_DATA.json";

import dayjs from "dayjs";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App() {
  const [allData, setData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const generatePriceDataForDropdown = () => {
    return [...new Set(data.map((item) => item.price))];
  };

  const handleFilterlocation = (desr) => {
    const filteredData = data.filter((item) => {
      if (item.desr.toLowerCase().includes(desr.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };
  const handleFilterPrice = (price) => {
    const filteredData = data.filter((item) => {
      if (item.price === price) {
        return item;
      }
    });

    setData(filteredData);
  };

  const generatePropertryTypeDataForDropdown = () => {
    return [...new Set(data.map((item) => item.PropertryType))];
  };
  const handleFilterPropertryType = (PropertryType) => {
    const filteredData = data.filter((item) => {
      if (item.PropertryType === PropertryType) {
        return item;
      }
    });
    setData(filteredData);
  };
  const handleFilterDate = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setData(filteredData);
  };


  return (
    <>
      <Navbar />
      <div className="center">
        {/* <Search/> */}
        <div class="topnav">
          <a href="#home">Search properties to rent</a>
          <div class="search-container">
            {/* onSubmit={handleFilter} */}
            <form>
              <div className="boader">
                <input
                  type="text"
                  placeholder="Search with Search Bar"
                  name="Username"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  results
                />
                <button type="submit">
                  <i class="fa fa-angle-down"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Filter
          prices={generatePriceDataForDropdown()}
          onLocationFilter={handleFilterlocation}
          onPriceFilter={handleFilterPrice}
          PropertryTypes={generatePropertryTypeDataForDropdown()}
          onPropertryTypeFilter={handleFilterPropertryType}
          onDateFilter={handleFilterDate}
        />

        <div class="row">
          {allData.filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.tittle.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }}).map((item) => (
            <div class="column" key={item.id}>
              <div class="card">
                <div className="postion">
                  <img src={item.image} />
                  <div className="newtittle">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    Popular
                  </div>
                </div>

                <div className="context">
                  <div className="month">
                    <ul>
                      <li>
                        <p>
                          {item.price}
                          <span>/months</span>
                        </p>
                      </li>
                      <li>
                        <button className="btn">
                     
                          <i class="fa fa-heart-o"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="name">{item.tittle}</div>
                  <div className="ders">{item.desr}</div>
                  <div className="bottom">
                    <p>
                      <i class="fa fa-bed" aria-hidden="true"></i> {item.beds}{" "}
                      Beds
                    </p>
                    <p>
                      <i class="fa fa-bath" aria-hidden="true"></i>{" "}
                      {item.bathrooms} Bathrooms
                    </p>
                    <p>
                      <i class="fa fa-xing-square" aria-hidden="true"></i>{" "}
                      {item.size}
                      m2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
