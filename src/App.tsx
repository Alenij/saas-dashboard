import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/overview/Overview";
import User from "./pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
