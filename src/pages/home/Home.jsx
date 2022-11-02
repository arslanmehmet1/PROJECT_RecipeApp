import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const APP_ID = "673a8dfd";
  const APP_KEY = "461f481233851d0b4d0a3797cf24d7b3";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  // const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the Form");
    }
  };
  console.log(recipes);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        getData={getData}
      />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipes={recipes} />}
      {/* <Cards /> */}
    </div>
  );
};

export default Home;
