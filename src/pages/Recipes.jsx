import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipes() {
    const [recipes, setRecipes] = useState({});
    const [ActiveTab, setActiveTab] = useState('instructions');
    const params = useParams();


    useEffect(() => {
        const RecipesFetch = async () => {
            const RecipesData = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=59d60f2cbfa84536b8a1c3bb992d8869`);
            const RecipesInformation = await RecipesData.json();
            setRecipes(RecipesInformation);
        }
        RecipesFetch();
    }, [params.name]);

    return (
        <RecipesWrapper>
            <div>
                <h2>{recipes.title}</h2>
                <img src={recipes.image} alt="" />
            </div>
            <Info>
                <div>
                    <Button className={ActiveTab === 'instructions' ? 'active' : ''} onClick={() => { setActiveTab('instructions') }}>Instructions</Button>
                    <Button className={ActiveTab === 'ingredients' ? 'active' : ''} onClick={() => { setActiveTab('ingredients') }}>Ingredients</Button>
                </div>
                {ActiveTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: recipes.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: recipes.instructions }}></h3>
                    </div>
                )}
                {ActiveTab === 'ingredients' && (
                    <ul>
                        {recipes.extendedIngredients.map((ingredient) => {

                            return (
                                <li key={ingredient.id} >{ingredient.original}</li>

                            )

                        })}
                    </ul>
                )}

            </Info>
        </RecipesWrapper>
    )
}

const RecipesWrapper = styled.div`
    margin:3rem 0;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    .active {
        background:linear-gradient(35deg,#494949,#313131);
        color:#fff;
    }
    div {
        width:360px;
        margin-bottom:2rem;
        h2 {
            margin-bottom:1rem;
        }
    }
    img {
        max-width:100%;
    }
`;
const Button = styled.button`
    padding:0.7rem 0.8rem;
    color:#313131;
    background:#fff;
    cursor:pointer;
    margin-right:20px;
    border:2px solid black;
    border-radius:6px;
    font-weight:600;
`;
const Info = styled.div`
    margin: 0rem 4rem ;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    div {
        margin-top:1.6rem;
        h3 {
            margin-bottom:1.6rem;
            padding: 0 20px;
            font-weight:500;
        }  
    }

    div:nth-child(1) {  
            display:flex;
            justify-content:center;
        }
    ul {
        margin-top:1.6rem;
        padding: 0 20px;
        
        li {
            padding : 0.4rem 0;
            font-weight:600;
        }
    }
`;
export default Recipes