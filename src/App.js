import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
// TODO: Fix the CSS
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        {/* <Route path="shop" element={<Shop />}></Route> */}
        <Route path="signin" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
