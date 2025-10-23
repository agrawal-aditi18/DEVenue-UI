import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Profile from "./Profile"
import Body from "./Body";
function App() {
  return (
    <>
      <BrowserRouter basename = "/">
      <Routes>
        {/* Parent component - body, and to define login, profile as child we have to define them in an outlet */}
          <Route path = "/" element={<Body />}> 
          <Route path = "/login" element={<Login />}/>
          <Route path = "/profile" element={<Profile />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
