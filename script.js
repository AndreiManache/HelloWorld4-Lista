var list = [];
var indexEdit;

function draw(){
    var str = "";


    for(let i=0 ; i<list.length ; i++){

        str =`<tr>
    <td class="text"><p>${list[i].name}</p></td>
    <td><button class="mab" onclick="mark(${i})"> Mark as bought</button></td>
</tr>`;

      
        
    }
    document.querySelector('table tbody').innerHTML += str;
    document.querySelector("input[type='text']").value = "";
    

}

function add(e){

    e.preventDefault();
    

     var newItem = {
        name: document.querySelector("input[type='text']").value
    };
    
    list.push(newItem);
    draw();
}

function mark(idx){
    
    document.querySelectorAll("p")[idx].classList.add("strikethrough");

}

function sortAsc(){
    
    var tableBody, rows, switching, i, x, y, shouldSwitch;

    tableBody = document.getElementById("tableBody");
    switching = true;

    while (switching) {
        switching = false;
        rows = tableBody.rows;

        for (i = 0; i < (rows.length - 1); i++){

            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
}
}


