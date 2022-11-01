import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const fetchData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=59d60f2cbfa84536b8a1c3bb992d8869&query=${name}`)
        const SerachedRecipesData = await fetchData.json();

        setSearchedRecipes(SerachedRecipesData.results);
    }
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (<Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>);
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));
    grid-gap: 2rem;
`;
const Card = styled.div`
img {
    width:100%;
    border-radius:2rem;
}
a {
    text-decoration:none;
}
h4 {
    text-align:center;
    padding:1rem;
    color:#000;
}
`;
export default Searched