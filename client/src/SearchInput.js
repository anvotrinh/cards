import React from "react";

const SearchInput = ({ value, setValue }) => {
  return (
    <div class="input-group searchInput">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        class="form-control"
        placeholder="Search by name"
        aria-label="Search by name"
      />
    </div>
  );
};

export default SearchInput;
