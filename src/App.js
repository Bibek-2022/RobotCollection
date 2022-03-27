import "./App.css";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Title from "./component/Title";
import { SearchForm } from "./component/SearchForm";
import { FavList } from "./component/FavList";

function App() {
  const [favList, setFavList] = useState([]);
  const addToFavList = (name) => {
    setFavList([...favList, name]);
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm addToFavList={addToFavList} />
        <hr />
        <FavList favList={favList} />
      </Container>
      {/* <div className="title">Your Robot Avatar</div>

      <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
