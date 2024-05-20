import Createpost from "./pages/createpost";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Account from "./pages/account";
import Sidebar from "./layout/sidebar";
import Mobilebar from "./layout/mobilebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/authcontext";

const App = () => {
  const { authUser } = useAuth();
  return (
    <div className=" md:flex ">
      <Sidebar />

      <Mobilebar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/createpost"
          element={authUser ? <Createpost /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Signin />}
        />
        <Route
          path="/account"
          element={authUser ? <Account /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
