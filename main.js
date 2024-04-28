let sampleString = "Juan Dela Curz";
let sampleArray = ["Rogie", "Jay", "Bryan"];
let sampleArrayNumbers = [1, 12, 15, 18, 20];

// string counts each characters
// array counts each item inside the array
// alert(sampleArray.length);

// alert(sampleString.toLowerCase());
// alert(sampleString.toUpperCase());

// alert(sampleString.replace('Juan', 'Spencer'));

// alert(sampleString.slice(0, 6));
// alert(sampleString.substring(0 , 4));

// let checkNumbers = (num) => {
//     return num < 21;
// }
// alert(sampleArrayNumbers.every(checkNumbers));

// alert(sampleArray.fill('JEFFREY'));

// let checkNumbers = (num) => {
//         return num < 15;
//     }
// alert(sampleArrayNumbers.filter(checkNumbers));

// alert(sampleArrayNumbers.filter(
//     (num) => {
//         return num < 15;
//     }
// ));

// alertsampleArrayNumbers.filter((num) => {
//     return num < 15;
// });

// alert(sampleArrayNumbers.find(checkNumbers));

// alert(sampleArrayNumbers.find(
//     (num) => {
//         return num < 15;
//     }
// ));

let animals = ['dog', 'cat', 'dinosaur', 'platypus'];

// for (let i = 0; i < animals.length; i++) {
//     // const element = array[i];
//     alert(animals[i]);
// }

// let showAnimals = (item, index) => {
//     alert(`${index} ${item}`);
// };

// animals.forEach(showAnimals);

// animals.forEach (
//     (name, index) => {
//         alert(`${index} ${name}`);
//     }
// )

animals.push('Kangaroo');
animals.push('Godzilla');
animals.pop();
animals.pop();
animals.pop();
animals.pop();
animals.pop();

// alert(animals);

// let todo = ["Sleep", "Jogging", "Shop", "Eat", "Code", "Mag break"];
let todo = [];

if(localStorage.getItem("todo")){
    todo = localStorage.getItem("todo").split(",");
}

let container = document.querySelector("#todo-list");
let filteredSearch = document.querySelector("#search-list");

const removeItem = (xIndex) => {
    let xValue = xIndex;
    let catcher = [xValue];
    todo.splice(catcher,1);
    localStorage.setItem("todo", todo);
    // console.log(todo);
    showList();
}

const addTodo = () => {
    let newItem = document.querySelector("#create-todo").value;
    todo.push(newItem);
    showList();
    // container.innerHTML = "";
    // todo.forEach(
    //     (task) => {
    //         container.innerHTML += `<li>${task}</li>`;
    //     }
    // );
    localStorage.setItem("todo", todo);
}

const removeTodo = () => {
    todo.pop();
    showList();
    // container.innerHTML = "";
    // todo.forEach(
    //     (task) => {
    //         container.innerHTML += `<li>${task}</li>`;
    //     }
    // );
    localStorage.setItem("todo", todo);
}

const showList = () => {
    let z = 0;
    let x = 0;
    container.innerHTML = "";
    todo.forEach(
        (task) => {
            container.innerHTML += `
            <div class="col-md-12 text-center d-flex justify-content-between">
            <li class="rounded col-10" id="removeBtn${z++}">${task}</li>
            <button class="btn btn-dark col-2" onclick="removeItem(${x++})">Remove <i class="fa-solid fa-xmark"></i></button>
            </div>`;
        }
    );
}

const filterSearch = () => {
    // alert();
    filteredSearch.innerHTML = "";
    const searchString = document.querySelector("#searchBar").value;
    const filterSearch = todo.filter ( value => {
        return value.includes(searchString);
        
    });
    console.log(filterSearch);
    if (filterSearch.length > 0) {
        for (let index = 0; index < filterSearch.length; index++) {
            document.getElementById("headingSearch").style.display = "flex";
            filteredSearch.innerHTML += 
            `<li class="rounded">${filterSearch[index]}</li>`;
        }
    }
    else {
        filteredSearch.innerHTML = `<h1>ITEM NOT FOUND</h1>`;
    }

    if (filterSearch.length === todo.length) {
        filteredSearch.innerHTML = `<h1>SEARCH BAR IS EMPTY</h1>`;
    }
}
document.getElementById("headingSearch").style.display = "none";
showList();

// localStorage.setItem("name", "Sample Name");
// let data = localStorage.getItem("name");
// alert(data);