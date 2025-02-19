let todo=[];
let req=prompt("enter your request");

while(true){
    if(req=="quit"){
        console.log("Quitting the app");
        break;
    }
    if(req=="list"){
        console.log("-----------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------------");
    }else if(req=="add"){
        let task=prompt("enter the task to add in list");
        todo.push(task);
        console.log("Task added");
    }else if(req=="delete"){
        let idx=pompt("state the index of the task you wan to delete from todo");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req=prompt("please enter your request");

}