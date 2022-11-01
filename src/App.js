import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
};
export default App;
