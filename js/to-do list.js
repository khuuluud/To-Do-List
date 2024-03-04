var inputBox = document.getElementById('input-box')

var box = [];

if(localStorage.getItem('list') !== null){
    box = JSON.parse(localStorage.getItem('list'));
    display()
}

function addItem(){
box.push(inputBox.value);

display()
localStorage.setItem('list', JSON.stringify(box))
}

function display(){
    var cartona = ``;
for(var i =0 ;i< box.length; i++ ){
cartona +=
` <li>
${box[i]}
<span><i onclick="delet(${i})" class="fa-solid fa-xmark"></i></span>
</li>`
}
document.getElementById('list-container').innerHTML = cartona;
clear()

}


function delet(index){
box.splice(index,1)
localStorage.setItem('list', JSON.stringify(box))
display()
}

function clear(){
    inputBox.value='';
}


// var btn = document.getElementById('list-container')

// btn.addEventListener('click', function(){
//     btn.style.backgroundColor = 'orange';
// })

