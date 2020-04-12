import React from "react";
import "./search-box-styles.css";

export const SearchBox = (props) => (
  <input
    className="search"
    type="search"
    // placeholder="search monsters..."
    // onChange={(e) => this.setState({ searchField: e.target.value })}
    placeholder={props.placeholder}
    onChange={props.handleChange}
  />
);
