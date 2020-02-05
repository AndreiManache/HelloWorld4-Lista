var list = [];
var indexEdit;

function draw(){

    var str = "";

     for(let i=0 ; i<list.length ; i++){

        str +=`
            <tr>
                <td class="text ${list[i].marked?"strikethrough":""}"><p>${list[i].name}</p></td>
                <td><button class="mab" onclick="mark(${i})"> Mark as bought</button></td>
            </tr>
        `;

       }
    document.querySelector('table tbody').innerHTML = str;
    document.querySelector("input[type='text']").value = "";
    

}

function add(e){

    e.preventDefault();
    
     var newItem = {
        name: document.querySelector("input[type='text']").value,
        marked:false
    };
    
    list.push(newItem);
    draw();
}

function mark(idx){
    
    list[idx].marked=true;
    draw();

}

function sortAsc(){

    list.sort(function(a,b){

         if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
            }else{
                return 1;
            } 

        })
      
    draw();
}

function sortDesc(){

    list.sort(function(a,b){

        if(a.name.toLowerCase() > b.name.toLowerCase()){
           return -1;
           }else{
               return 1;
           } 

       })
     
   draw();

}


