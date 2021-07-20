import React, { createRef, Fragment } from "react";

export default function Input({ id }) {
  const inputRef = createRef([]);

  const onChange = (e) => {
    // HANDLE CHANGE
    inputRef.current.style.border = "2px solid green";
  };

  return (
    <Fragment>
      <input
        ref={inputRef}
        type="text"
        value=""
        onChange={onChange}
        onClick={onChange}
      />
    </Fragment>
  );
}
