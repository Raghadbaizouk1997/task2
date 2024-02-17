import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button";
import { FaCalendarAlt, FaFileExport, FaPlus, FaPrint } from "react-icons/fa";
import RegisterNewDevice from "../RegisterNewDevice/RegisterNewDevice";

function DeviceSearch() {
  const [deviceType, setDeviceType] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [dataChoice, setDataChoice] = useState();
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    console.log("Exporting data...");
  };

  const handleButtonClick = () => {
    console.log("123");
    setIsBoxOpen(true);
  };

  const handleCloseBox = () => {
    setIsBoxOpen(false);
  };

  return (
    <div className="space-between box-container">
      <form onSubmit={handleSubmit} className="deviceSerch">
        <select
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          placeholder="Select Device Type"
          className="device-type drop_down"
        >
          <option value="" disabled>
            Device Type
          </option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
        </select>

        <input
          type="text"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          placeholder="Enter Device Name"
          className="drop_down width-input"
        />
        <div className="date-picker-container width-input">
          <DatePicker
            className="drop_down-date width-date"
            selected={dataChoice}
            onChange={(date) => setDataChoice(date)}
            placeholderText="Date Issued - 08/28/2023"
            open={calendarOpen}
            onClickOutside={() => setCalendarOpen(false)}
          />
          <FaCalendarAlt className="calendar-icon" onClick={toggleCalendar} />
        </div>

        <Button
          onClick={handleButtonClick}
          type="submit"
          text="Search"
          buttonClassName="SearchButton"
          textColor="#000"
        />
      </form>
      <div className="buttonGroup">
        <Button
          onClick={handlePrint}
          icon={<FaPrint />}
          text="Print"
          buttonClassName="tableButton"
          textColor="var(--primary-color-darker)"
          colorIcon="var(--primary-color-darker)"
        />
        <Button
          onClick={handleExport}
          icon={<FaFileExport />}
          text="Export"
          buttonClassName="tableButton"
          textColor="var(--primary-color-darker)"
          colorIcon="var(--primary-color-darker)"
        />
        <Button
          onClick={handleButtonClick}
          icon={<FaPlus />}
          text="Register New Devices"
          buttonClassName="tableButton"
          textColor="var(--white-color)"
          backgroundColor="var(--primary-color-darker)"
          colorIcon="var(--white-color)"
        />
        {isBoxOpen && <RegisterNewDevice onClose={handleCloseBox} />}
      </div>
    </div>
  );
}

export default DeviceSearch;
