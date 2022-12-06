const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

const renderButton = (data) =>{
    let result = data.reduce((content, color)=>{
        return content += `<button class="color-button ${color}"></button> `
    },"");
    document.getElementById('colorContainer').innerHTML = result;
};


const changeHouseColor = (color,index)=>{
    for(let i = 0; i < colorBTN.length; i++){
        colorBTN[i].classList.remove('active');
    }
    colorBTN[index].classList.add('active');
    house.className = `house ${color}`
}


renderButton(colorList);

let colorBTN = document.getElementsByClassName('color-button'); 

let house = document.getElementById('house');

for(let i = 0; i < colorBTN.length; i++){
    colorBTN[i].addEventListener("click", () =>{
        console.log(colorBTN[i])
        changeHouseColor(colorList[i],i)
    })
}

