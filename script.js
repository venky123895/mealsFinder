const input=document.getElementById('input');
const imageContainer=document.getElementById('imageContainer');

init()

function init(){
    input.addEventListener('keyup',function(e){
        if(e.key ==='Enter'){
            fetchMeals();
        }
    })
   
}


async function fetchMeals(){
    const value=input.value;
    const streamResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const textResponse= await streamResponse.text();
    const jsonData=JSON.parse(textResponse);
    let html=``;
    for(let i=0;i<jsonData.meals.length;i++){
        html += ` <div class="imagebox">
    <img src="${jsonData.meals[i].strMealThumb}" class="images" alt="image">
</div>`
    }
    imageContainer.innerHTML=html;
}