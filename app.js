

var result = "";
function addList(){
    var list = document.getElementById("input").value;

    result +=  "<li>"+list+'</li>' 
    document.getElementById("ul").innerHTML = result;
    document.getElementById("input").value = ''

}






// // document.addEventListener('DOMContentLoaded', function() {
//     const itemInput = document.getElementById('itemInput');
//     const addButton = document.getElementById('addButton');
//     const itemList = document.getElementById('itemList');

//     addButton.addEventListener('click', function() {
//         const itemValue = itemInput.value.trim();

//         if (itemValue !== '') {
//             const li = document.createElement('li');
//             li.textContent = itemValue;
//             itemList.appendChild(li);
//             itemInput.value = '';
//         } else {
//             alert('Please enter an item.');
//         }
//     });
// // });
