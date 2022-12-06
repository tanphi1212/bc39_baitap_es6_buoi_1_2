const  getEle = (id) => document.getElementById(id);

const diemTB = (...arrays) => {
    let result = arrays.reduce((total,score) => {
        return total += score
    },0)
    console.log(result)
    return result/arrays.length
}


getEle('btnKhoi1').onclick = () => {
    let toan = getEle('inpToan').value*1;
    let ly = getEle('inpLy').value*1;
    let hoa = getEle('inpHoa').value*1;

    getEle('tbKhoi1').innerHTML =diemTB(toan,ly,hoa);
}

getEle('btnKhoi2').onclick = () => {
    let van = getEle('inpVan').value*1;
    let su = getEle('inpSu').value*1;
    let dia = getEle('inpDia').value*1;
    let anh = getEle('inpEnglish').value*1;

    getEle('tbKhoi2').innerHTML =diemTB(van, su, dia, anh);
}


