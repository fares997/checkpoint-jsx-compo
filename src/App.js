
import './App.css';
import PhotoProfile from "./components/profile/PhotoProfile";
import { Nav } from "react-bootstrap";
import FullName from "./components/profile/FullName";
import Adresse from "./components/profile/Adresse"
function App() {

  return (
    <div className="App">
  <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
      <PhotoProfile />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
