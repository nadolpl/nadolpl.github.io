let addMark = () => {
    let amount = document.getElementById("howMuch").value;
    let box = document.getElementById("box");
    let marksAmount = document.querySelectorAll(".mark").length;
    if(marksAmount>0){
        for(let j=0; j<=marksAmount; j++)
        box.removeChild(box.lastChild);
    }
    for(let i=1; i<=amount; i++){
        let createMark = document.createElement("div");
        createMark.classList.add("mark", "n"+i);
        createMark.innerHTML = 
            '<label for="marks">'+'Ocena'+'</label>'+'<br>'+
            '<select id="marks" class="marks'+i+'">'+
                '<option id="mark_value'+i+'" value="1">'+'1'+'<br>'+
                '<option id="mark_value'+i+'" value="1.75">'+'2-'+'<br>'+
                '<option id="mark_value'+i+'" value="2">'+'2'+'<br>'+
                '<option id="mark_value'+i+'" value="2.5">'+'2+'+'<br>'+
                '<option id="mark_value'+i+'" value="2.75">'+'3-'+'<br>'+
                '<option id="mark_value'+i+'" value="3">'+'3'+'<br>'+
                '<option id="mark_value'+i+'" value="3.5">'+'3+'+'<br>'+
                '<option id="mark_value'+i+'" value="3.75">'+'4-'+'<br>'+
                '<option id="mark_value'+i+'" value="4">'+'4'+'<br>'+
                '<option id="mark_value'+i+'" value="4.5">'+'4+'+'<br>'+
                '<option id="mark_value'+i+'" value="4.75">'+'5-'+'<br>'+
                '<option id="mark_value'+i+'" value="5">'+'5'+'<br>'+
                '<option id="mark_value'+i+'" value="5.5">'+'5+'+'<br>'+
                '<option id="mark_value'+i+'" value="6">'+'6'+'<br>'+
            '</select>'+
            '<label for="weight">'+'Waga'+'</label>'+'<br>'+
            '<select id="weight" class="weight'+i+'">'+
                '<option id="weight_value'+i+'" value="1">'+'1'+'<br>'+
                '<option id="weight_value'+i+'" value="2">'+'2'+'<br>'+
                '<option id="weight_value'+i+'" value="3">'+'3'+'<br>'+
            '</select>'
        box.appendChild(createMark);
    }
}

let calc = () => {
    const marksAmount = document.querySelectorAll(".mark").length;
    let sum = 0;
    let weightSum = 0;
    let result = document.querySelector(".result"); 
    for(let i=1; i<=marksAmount; i++){
        weightSum += Number(document.querySelector(".weight"+i).value);
        sum += Number(document.querySelector(".marks"+i).value)*Number(document.querySelector(".weight"+i).value);
    }
    if(sum===0){
        alert("Wprowadz oceny");
    } else {
        result.innerHTML = (sum/weightSum).toFixed(2);
        result.style.color = '#7f8de6';
    }
}


  /* todo
  BUTTON RESET
  */