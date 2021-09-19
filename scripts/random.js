


let parent = document.getElementById("parent_div");
async function  randomreceipe(){
    parent.innerHTML = null;
    let random= await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    let data=await random.json();
   let {meals}=data
 console.log("meals ", meals);
    meals.forEach(({strMeal, strCategory, strMealThumb,strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11})=>{

        let div_1 = document.createElement("div");

        let div_1_child_1 = document.createElement("div");
        div_1_child_1.innerHTML = `Name : ${strMeal}`;

        let div_1_child_2 = document.createElement("div");
        div_1_child_2.innerHTML = `Category : ${strCategory}`;


        let div_2 = document.createElement("div");
        let thumb_image = document.createElement("img");
        thumb_image.src = strMealThumb;

        let div_3 = document.createElement("div");
        div_3.innerHTML = "Ingredients List";


        let div_4 = document.createElement("div");
        div_4.innerHTML = `${strIngredient1}, ${strIngredient2},${strIngredient3}, ${strIngredient4}, ${strIngredient5}, ${strIngredient6}, ${strIngredient7},${strIngredient8}, ${strIngredient9},${strIngredient10},${strIngredient11}`

        let div_5 = document.createElement("div");
        div_5.innerHTML = "Instructions";

        let div_6 = document.createElement("div");
        div_6.innerHTML = strInstructions;

        div_2.append(thumb_image);
        div_1.append(div_1_child_1, div_1_child_2);
        parent.append(div_1, div_2, div_3, div_4,div_5,div_6);

    })



}


randomreceipe()


