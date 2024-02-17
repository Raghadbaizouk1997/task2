import React, { useState } from "react";
import "./RegisterNewDevice.css";
import Button from "../Button/Button";
const RegisterNewDevice = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [deviceType, setDeviceType] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (validateInputs()) {
      setCurrentStep((prevStep) => prevStep + 1);
      setError("");
    } else {
      setError("Please fill out all required fields.");
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCancel = () => {
    onClose();
  };

  const validateInputs = () => {
    if (currentStep === 1) {
      return deviceType !== "" && deviceName !== "";
    }
    return true;
  };

  return (
    <div className="white-box">
      <span className="close-icon" onClick={onClose}>
        X
      </span>
      <div className="step-parent">
        <div className="step-register">
          <h4>Register New Device</h4>
          <p className="txt-color txt-verification">
            We Will sent a verification to the email address
          </p>
        </div>
        <div className="step-title">
          <div
            className={`step-item ${
              currentStep === 1 ? "active-register" : ""
            }`}
            onClick={() => setCurrentStep(1)}
          >
            {` ${currentStep}- Device Details`}
          </div>
          <div className="arrow txt-color">{"->"}</div>
          <div
            className={`step-item ${
              currentStep === 2 ? "active-register" : ""
            }`}
            onClick={() => setCurrentStep(2)}
          >
            2- Generate Key Pairs
          </div>
          <div className="arrow txt-color">{"->"}</div>
          <div
            className={`step-item ${
              currentStep === 3 ? "active-register" : ""
            }`}
            onClick={() => setCurrentStep(3)}
          >
            3- Download Key Pairs
          </div>
        </div>

        {error && <div className="error">{error}</div>}
        {currentStep === 1 && (
          <>
            <div className="input-device">
              <div className="form-row" style={{ width: "40%" }}>
                <label htmlFor="deviceType" className="txt-color">
                  Device Type <span className="required">*</span>
                </label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  placeholder="Select Device Type"
                  className="drop_down txt-color"
                  style={{marginTop: "10px"}}
                >
                  <option value="phone">Apple IOS</option>
                  <option value="laptop">Apple IOS</option>
                  <option value="tablet">Apple IOS</option>
                </select>{" "}
              </div>
              <div className="form-row" style={{ width: "40%" }}>
                <label htmlFor="deviceName" className="txt-color">
                  Device Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="deviceName"
                  value={deviceName}
                  className="input-register"
                  onChange={(e) => setDeviceName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="serialNo" className="txt-color">
                Serial No
              </label>
              <input
                type="text"
                id="serialNo"
                className="input-register"
                value={serialNo}
                onChange={(e) => setSerialNo(e.target.value)}
              />
            </div>
            <div className="button-row">
              <Button
                onClick={handleCancel}
                text="Cancel*"
                buttonClassName="tableButton"
                textColor="var(--alert-color)"
                borderColor="var(--alert-color)"
              />
              <Button
                onClick={handleNextStep}
                text="Generate Key Pairs"
                buttonClassName="tableButton"
                textColor="var(--white-color)"
                backgroundColor="var(--primary-color-darker)"
              />
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <div className="button-row">
              <Button
                onClick={handlePrevStep}
                text="Previous"
                buttonClassName="tableButton"
                textColor="var(--white-color)"
                backgroundColor="var(--primary-color-darker)"
              />
              <Button
                onClick={handleCancel}
                text="Cancel*"
                buttonClassName="tableButton"
                textColor="var(--alert-color)"
                borderColor="var(--alert-color)"
              />
              <Button
                onClick={handleNextStep}
                text="Next"
                buttonClassName="tableButton"
                textColor="var(--white-color)"
                backgroundColor="var(--primary-color-darker)"
              />
            </div>
          </>
        )}
        {currentStep === 3 && (
          <>
            <div className="button-row">
              <Button
                onClick={handlePrevStep}
                text="Previous"
                buttonClassName="tableButton"
                textColor="var(--white-color)"
                backgroundColor="var(--primary-color-darker)"
              />
              <Button
                onClick={handleCancel}
                text="Cancel*"
                buttonClassName="tableButton"
                textColor="var(--alert-color)"
                borderColor="var(--alert-color)"
              />
              <Button
                onClick={handleNextStep}
                text="Done"
                buttonClassName="tableButton"
                textColor="var(--white-color)"
                backgroundColor="var(--primary-color-darker)"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterNewDevice;
