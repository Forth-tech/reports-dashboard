import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Purchase from "./components/Purchase";
import { useAppSelector } from "./hooks/redux-hooks";

function App() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/purchase"
            element={
              user ? <Purchase /> : <Navigate to="/login" replace={true} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
