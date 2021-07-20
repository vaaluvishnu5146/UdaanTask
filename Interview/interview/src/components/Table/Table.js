import React, { createRef } from "react";
import "./Table.scss";

import Cell from "../../elements/Cells/Cells";

const Table = ({ rows, columns }) => {
  const cellRef = createRef(null);

  const handleCellClick = () => {
    console.log(cellRef.current);
    // cellRef.current.style.border = "2px solid green";
  };

  const renderTableBody = () => {
    let row = [];
    for (var i = 0; i < rows; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (var j = 0; j < columns; j++) {
        let cellID = `cell${i}-${j}`;
        cell.push(<Cell key={cellID} id={cellID} onClick={handleCellClick} />);
      }
      row.push(
        <tr key={i} id={rowID}>
          {cell}
        </tr>
      );
    }
    return row;
  };

  return (
    <div>
      <table
        style={{
          width: "100%",
        }}
      >
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
