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
    </div>
  );
}

export default App;
