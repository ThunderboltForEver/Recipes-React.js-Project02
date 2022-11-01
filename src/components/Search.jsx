import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import React from 'react'
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/Search/' + input);
    };

    return (

        <FormStyle action="POST" onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" onChange={(e) => { setInput(e.target.value) }} />
            </div>
        </FormStyle>

    )
}

const FormStyle = styled.form`
    margin:4rem 20rem 0;
    @media (max-width:772px) {
        margin:4rem 0rem 0;
    }
    @media (min-width:772px) and (max-width:992px) {
        margin:4rem 10rem 0;
    }
    @media (min-width:992px) and (max-width:1200px) {
        margin:4rem 15rem 0;
    }
    div {
        width:100%;
        position:relative;

        svg {
            position:absolute;
            top:50%;
            left:4px;
            transform:translateY(-50%);
            color:#fff;
            font-size: 0.8rem;
            margin-left:4px;
        }
    }
    input {
        background-color:red;
        border:none;
        width:100%;
        padding: 10px 25px;
        outline:none;
        border-radius:20px;
        background:linear-gradient(35deg,#494949,#313131);
        color:#fff;
    }
`;
export default Search