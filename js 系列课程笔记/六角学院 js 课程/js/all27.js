var list = document.querySelector('.list');
list.addEventListener('click',checkName,false);
function checkName(e) {
    if(e.target.nodeName !== "LI"){return}
    console.log(e.target.textContent);
}