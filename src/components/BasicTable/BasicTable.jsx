import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./BasicTable.css";

const BasicTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="basic-table-container">
      <div className="table-scroll-container">
        <table className="basic-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={`header-cell txt-color ${
                      header.column.getIsSorted()
                        ? header.column.isSortedDesc
                          ? " 🔼"
                          : " 🔽"
                        : ""
                    }`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {/* Sorting indicator */}
                    {header.column.getIsSorted() && (
                      <div
                        className={`sort-indicator ${
                          header.column.isSortedDesc ? "desc" : "asc"
                        }`}
                      ></div>
                    )}
                  </th>
                ))}
                <th className="header-cell"></th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={rowIndex % 2 === 0 ? "even-row" : "odd-row"}
              >
                {row.getVisibleCells().map((cell, index) => {
                  let cellClassName = "data-cell";

                  if (cell.column.id === "status") {
                    switch (row.original.status) {
                      case "Revoked":
                        cellClassName += " revoked-text";
                        break;
                      case "Expired":
                        cellClassName += " expired-text";
                        break;
                      case "Pending":
                        cellClassName += " pending-text";
                        break;
                      case "Active":
                        cellClassName += " active-text";
                        break;
                      case "Completed":
                        cellClassName += " completed-text";
                        break;
                      default:
                        break;
                    }
                  }

                  return (
                    <td key={cell.id}>
                      <div className={`status-box ${cellClassName}`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </td>
                  );
                })}
                <td className="data-cell">
                  <div className="ellipsis">
                    <div className="vertical"></div>
                    <div style={{ textAlign: "center" }}>
                      <span>Options</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-container">
          <span className="pagination-text txt-color">
            Showing{" "}
            {Math.min(
              table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1,
              data.length
            )}{" "}
            to{" "}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
              data.length
            )}{" "}
            of {data.length} entries
          </span>
          <div className="pagination-controls">
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className="pagination-button"
            >
              {"<"}
            </button>
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <button
                key={i}
                onClick={() => table.setPageIndex(i)}
                className={`pagination-button ${
                  table.getState().pagination.pageIndex === i
                    ? "active-pagnation"
                    : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              className="pagination-button"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTable;
