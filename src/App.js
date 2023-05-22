import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./context/useContext";
import Home from "./pages/Home/Home";
import UserData from "./pages/UserData/UserData";

function App() {
  return (
    <div className="max-w-[100%] mx-auto">
      <UserContext>
        <Home />
        <UserData/>
      </UserContext>
    </div>
  );
}

export default App;
