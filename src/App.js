import "./App.css";
import { Button, Container, Form } from "react-bootstrap";
import Title from "./component/Title";
import { SearchForm } from "./component/SearchForm";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <hr />
      </Container>
      {/* <div className="title">Your Robot Avatar</div>

      <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
