import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipes from "./Recipes";
import Searched from "./Searched";


function Pages() {
    return (


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cuisine/:type" element={<Cuisine />} />
            <Route path="/Search/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipes />} />
        </Routes>



    )
}

export default Pages