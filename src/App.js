import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router";

function App() {
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1");
  }, []);

  return (
    <div>
      <Link to={"/foo"}>Foo</Link>
      <br />
      <Link to={"/bar"}>Bar</Link>
    </div>
  );
}

export default App;
