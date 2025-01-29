import { Link } from "react-router";

function App() {
  return (
    <div>
      <Link to={"/foo"}>Foo</Link>
      <br />
      <Link to={"/bar"}>Bar</Link>
      <br />
      <Link to="/tanstack-query">TanStackQueryDemo</Link>
      <br />
      <Link to="/user-creation">UserCreation</Link>
      <br />
      <Link to="/iframe">IFrame</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/my-timepicker">MyTimePicker</Link>
    </div>
  );
}

export default App;
