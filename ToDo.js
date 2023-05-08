alert('Double click on a task to delete it')
let addToDoButton=document.getElementById('AddToDo');
let toDoContainer=document.getElementById('toDocontainer');
let inputField=document.getElementById('inputField');

addToDoButton.onclick = function(){
    //verifier si la zone texte est remplie
    if(inputField.value != ""){
        //Creation d'un paragraphe
        var paragraph = document.createElement('p');
    }
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value='';

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
}

let addToDoButton1=document.getElementById('AddToDo1');
let toDoContainer1=document.getElementById('toDocontainer1');
let inputField1=document.getElementById('inputField1');

addToDoButton1.onclick = function(){
    //verifier si la zone texte est remplie
    if(inputField1.value != ""){
        //Creation d'un paragraphe
        var paragraph = document.createElement('p');

    }
    paragraph.innerText=inputField1.value;
    toDoContainer1.appendChild(paragraph);
    inputField1.value='';

    paragraph.addEventListener('dblclick',function(){
        toDoContainer1.removeChild(paragraph);})

    }


let addToDoButton2=document.getElementById('AddToDo2');
let toDoContainer2=document.getElementById('toDocontainer2');
let inputField2=document.getElementById('inputField2');

addToDoButton2.onclick = function(){
    //verifier si la zone texte est remplie
    if(inputField2.value != ""){
        //Creation d'un paragraphe
        var paragraph = document.createElement('p');

    }
    paragraph.innerText=inputField2.value;


    toDoContainer2.appendChild(paragraph);
    inputField2.value='';

    paragraph.addEventListener('dblclick',function(){
        toDoContainer2.removeChild(paragraph);})

}


let addToDoButton3=document.getElementById('AddToDo3');
let toDoContainer3=document.getElementById('toDocontainer3');
let inputField3=document.getElementById('inputField3');

addToDoButton3.onclick = function(){
    //verifier si la zone texte est remplie
    if(inputField3.value != ""){
        //Creation d'un paragraphe
        var paragraph = document.createElement('p');

    }
    paragraph.innerText=inputField3.value;


    toDoContainer3.appendChild(paragraph);
    inputField3.value='';

    paragraph.addEventListener('dblclick',function(){
        toDoContainer3.removeChild(paragraph);})

}


let addToDoButton4=document.getElementById('AddToDo4');
let toDoContainer4=document.getElementById('toDocontainer4');
let inputField4=document.getElementById('inputField4');

addToDoButton4.onclick = function(){
    //verifier si la zone texte est remplie
    if(inputField4.value != ""){
        //Creation d'un paragraphe
        var paragraph = document.createElement('p');

    }
    paragraph.innerText=inputField4.value;


    toDoContainer4.appendChild(paragraph);
    inputField4.value='';

    paragraph.addEventListener('dblclick',function(){
        toDoContainer4.removeChild(paragraph);})

}


let addToDoButton5=document.getElementById('AddToDo5');
let toDoContainer5=document.getElementById('toDocontainer5');
let inputField5=document.getElementById('inputField5');

addToDoButton5.onclick = function(){
    //verifier si la zone texte est remplie
    if(inputField5.value != ""){
        //Creation d'un paragraphe
        var paragraph = document.createElement('p');

    }
    paragraph.innerText=inputField5.value;


    toDoContainer5.appendChild(paragraph);
    inputField5.value='';

    paragraph.addEventListener('dblclick',function(){
        toDoContainer5.removeChild(paragraph);})

}


let addToDoButton6=document.getElementById('AddToDo6');
let toDoContainer6=document.getElementById('toDocontainer6');
let inputField6=document.getElementById('inputField6');

addToDoButton6.onclick = function(){
    //verifier si la zone texte est remplie
    if(inputField6.value != ""){
        //Creation d'un paragraphe
        var paragraph = document.createElement('p');

    }
    paragraph.innerText=inputField6.value;


    toDoContainer6.appendChild(paragraph);
    inputField6.value='';

    paragraph.addEventListener('dblclick',function(){
        toDoContainer6.removeChild(paragraph);})

}

