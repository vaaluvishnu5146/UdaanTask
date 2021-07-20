import React, { Fragment, useState } from "react";
import Input from "../Input/input";

const Cell = ({ id, key, ref, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Fragment>
      <td id={id} key={key} ref={ref} onClick={handleClick}>
        <Input id={id} />
      </td>
    </Fragment>
  );
};

export default Cell;
