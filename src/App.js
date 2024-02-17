import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Management from "./pages/Management";
import Devices from "./pages/Devices";
import UsersRole from "./pages/UsersRole";
import Billing from "./pages/Billing";
import Tools from "./pages/Tools";
import Setting from "./pages/Setting";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/management" element={<Management />} />
          <Route path="/management/devices" element={<Devices />} />
          <Route path="/management/user-role" element={<UsersRole />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/help-center" element={<Tools />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
