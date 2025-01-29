import { Link } from "react-router";
import { ScrollToTop } from "./ScrollToTop";

const data = getData();

function getData() {
  var data = [];
  for (var i = 1; i < 100; i++) {
    data.push(i);
  }
  return data;
}

function Foo() {
  return (
    <div>
      <ScrollToTop />
      <Link to={"/foo"}>Foo</Link>
      <br />
      <Link to={"/bar"}>Bar</Link>
      {data.map((d, i) => (
        <div key={d}>
          foo {d}, {i}
        </div>
      ))}
      <Link to={"/foo"}>Foo</Link>
      <br />
      <Link to={"/bar"}>Bar</Link>
    </div>
  );
}

export default Foo;
