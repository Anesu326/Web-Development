var roster = [];

//function to add new student to the roster
function add_new(name){
  roster.push(name);
}

//function to remove a name from the roster
function remove_item(name){
  const index = roster.indexOf(name);
  roster.splice(index, 1);
}

//function to display roster to the console
function display(){
  console.log(roster);
}

//Aplication Logic
var response = prompt('Do you want to use the Duty Roster App?');

if (response == 'y'){
  while (true) {
    var option = prompt('Select one of the following options\n1. Add Name\n2. Remove Name\n3. Display Roster\n4. Quit App');
    if (option == 1){
      var name = prompt('Enter name to add to the roster:');
      add_new(name);
      continue;
    }else if (option == 2){
      var name = prompt('Enter name to remove from the roster:');
      remove_item(name);
      continue;
    }else if (option == 3){
      display();
      continue;
    }else if (option == 4){
      break;
    }else{
      alert('Invalid Input!');
    }
  }
}
