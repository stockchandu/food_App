
async function getdata(data) {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`);
    let data_res = await res.json();
    return data_res;
}

async function oninput() {

    let data = document.getElementById("input_value").value;

    let data_food = await getdata(data);

    if (data_food === undefined) {
        return false;
    }
    let { meals } = data_food;
    show_value(meals)

}

let parent = document.getElementById("show");
function show_value(data_food) {
    console.log("data_food ", data_food);
    let data = document.getElementById("input_value").value;
    parent.innerHTML = null;
    data_food.forEach(({ strMeal, strCategory, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11 }) => {
        

        let main_div = document.createElement("div");

        main_div.innerHTML = strMeal;
        parent.append(main_div);
        parent.style.visibility = "visible";
        showing_ingredients(main_div, strMeal, strCategory, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11);
    })


    if (data.length == 0) {
        parent.innerHTML = null;
        parent.style.visibility = "hidden";
    }
}


let ingre_parent = document.getElementById("ingre");
let input_parent = document.getElementById("show_search");

let showing_ingredients = (div, strMeal, strCategory, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11) => {
    
    div.onclick = () => {
        ingre_parent.style.visibility = "visible"
        input_parent.style.visibility = "hidden"
        parent.style.visibility = "hidden";

        let div_1 = document.createElement("div");

        let div_1_child_1 = document.createElement("div");
        div_1_child_1.innerHTML = `Name : ${strMeal}`;

        let div_1_child_2 = document.createElement("div");
        div_1_child_2.innerHTML = `Category : ${strCategory}`;

        let div_1_child_3 = document.createElement("div");

        let cross_image = document.createElement("img");
        cross_image.src = "https://image.flaticon.com/icons/png/512/1828/1828774.png"

        let div_2 = document.createElement("div");
        let thumb_image = document.createElement("img");
        thumb_image.src = strMealThumb;

        let div_3 = document.createElement("div");
        div_3.innerHTML = "Ingredients List";


        let div_4 = document.createElement("div");
        div_4.innerHTML = `${strIngredient1}, ${strIngredient2},${strIngredient3}, ${strIngredient4}, ${strIngredient5}, ${strIngredient6}, ${strIngredient7},${strIngredient8}, ${strIngredient9},${strIngredient10},${strIngredient11}`


        div_2.append(thumb_image);
        div_1_child_3.append(cross_image);
        div_1.append(div_1_child_1, div_1_child_2, div_1_child_3);
        ingre_parent.append(div_1, div_2, div_3, div_4);
        invisible_list(cross_image);
    }

}


let invisible_list=(cross)=>{

   
    cross.onclick=()=>{
        ingre_parent.innerHTML=null;
        ingre_parent.style.visibility = "hidden"
        input_parent.style.visibility = "visible"
        parent.style.visibility = "visible";
    }

}

export { oninput };



