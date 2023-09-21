import React, { useState } from "react";
import { Input, Dropdown } from "antd";
import styles from "@/styles/Searchcomponent.module.css";

export const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const data = [
    { id: 1, name: "bandwcar1.jpg", tag: "black and white car" },
    { id: 2, name: "whitecar1.jpg", tag: "white car" },
    { id: 3, name: "blackcar1.jpg", tag: "black car" },
    { id: 4, name: "graycar1.jpg", tag: "gray car" },
    { id: 5, name: "orangecar1.jpg", tag: "orange car" },
    { id: 6, name: "yellowcar1.jpg", tag: "yellow car" },
    { id: 7, name: "sportcar1.jpg", tag: "sport car" },
    { id: 8, name: "carengine1.jpg", tag: "car engine" },
    { id: 9, name: "minicar1.jpg", tag: "mini car" },
    { id: 10, name: "blackbike.jpg", tag: "black bike" },
    { id: 11, name: "carseats.jpg", tag: "car seats" },
    { id: 12, name: "redbike.jpg", tag: "red bike" },
    { id: 13, name: "nicebike.jpg", tag: "nice bike" },
    { id: 14, name: "bicycle.jpg", tag: "bicycle" },
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    // Filter the data based on the search query
    const filteredResults = data.filter((item) =>
      item.tag.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredResults);
    setIsEmpty(false);
    if (value.length === 0) {
      // console.log("No results");
      setIsEmpty(true);
      setFilteredData(["empty"]);
    }

    // console.log("Filtered data: " + filteredData);
  };

  //   console.log(222, searchQuery);
  //   console.log("filter results: ", filteredData);

  return (
    <div>
      <Input
        size="large"
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for Images..."
      />
      {isEmpty ? null : (
        <ul>
          {filteredData?.map((item, index) => (
            <li key={index}>
              <div className={styles.searchContainer}>
                <div className={styles.searchItem}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={`/${item.name}`}
                  />
                  <div>{item.tag}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
