import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=59d60f2cbfa84536b8a1c3bb992d8869&number=9&tags=vegetarian`)
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  }
  return (
    <div>
      <Wrapper>
        <h3>Our Vegeterian Picks</h3>
        <Splide options={
          {
            perPage: 3,
            breakpoints: {
              1024: {
                perPage: 3,

              },
              767: {
                perPage: 2,

              },
              640: {
                perPage: 1,

              },
            },
            pagination: false,
            arrows: true,
            drag: "free",
            gap: "1rem",
          }
        }>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>

      </Wrapper>


    </div >
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem 0;

h3 {
  margin-bottom:1rem;

  @media (max-width:772px) {
    display:flex;
    justify-content:center;
  }
}

`;
const Card = styled.div`
    min-height:14rem;
    border-radius:2rem;
    overflow:hidden;
    position:relative;
    text-align:center;
    img {
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit: cover;
    }
    p {
        position:absolute;
        width:100%;
        bottom:0;
        z-index:2;
        height:10%;
        font-size:0.8rem;
        color:#fff;
        font-weight:300;
        letter-spacing:0.5px;
        height:30%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    `;
const Gradient = styled.div`
        position:absolute;
        width:100%;
        height:100%;
        z-index:1;
        background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
    `;

export default Veggie;