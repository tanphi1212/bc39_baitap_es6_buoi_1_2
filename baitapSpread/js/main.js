let str = document.getElementsByClassName('heading')[0].innerText;
let chars = [...str];

let result = chars.reduce((content,char)=>{
    return content += `<span>${char}</span>`
},"")

document.getElementsByClassName('heading')[0].innerHTML = result;