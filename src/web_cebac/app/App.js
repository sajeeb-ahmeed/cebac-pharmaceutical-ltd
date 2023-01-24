import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Header from "../components/main/Shared/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div class="preloader">
        <div class="preloader_image"></div>
      </div> */}
      <Button as="a" variant="success">
        Button as link
      </Button>
      <Header></Header>
    </div>
  );
}

export default App;
