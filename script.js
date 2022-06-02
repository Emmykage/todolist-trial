
const cont = document.querySelector('.small-container');

const addBtn = document.querySelector(".add-btn");
const input = document.getElementById("todo");

class Storage{

    static addStoreList(list){
        const lists = Storage.getStoreList();
        lists.push(list);
        localStorage.setItem("list", JSON.stringify(lists))

    }
   static removeStoreList(idlist){
        // const TDL = new Store();
        const lists = Storage.getStoreList();
        // const newList = lists.filter(item => {
            
        //     return item.id !== idlist;
          
        // });
        lists.forEach(item => {
            if(`${item.list}`.trim() === idlist.trim()){
                lists.splice(lists.indexOf(item),1);
            }
            
        });
        localStorage.setItem("list", JSON.stringify(newList))
        console.log(idlist);
    }
   static getStoreList(){
       let lists = localStorage.getItem("list");
       if(!lists) return [];
       return JSON.parse(lists)
        
    }
}

class listFunctions{
       addToList(chore){
         
     
        const div = document.createElement("div");
        div.innerHTML = `
        <div class ="checkclass">
        <input class= "checklist" type="checkbox" id="">
        <label for="">${chore}</label>
        </div>
       
       <button class="del-btn fa-solid fa-ellipsis-vertical">del</button> 
        `;
    
        
    
      div.classList.add("listItems");
      cont.appendChild(div);
      Storage.addStoreList(chore);
    }

   delFromList(target){
        if(target.classList.contains("del-btn")){
            target.parentNode.remove();
            let removesingle = target.parentNode.children[0].textContent
            Storage.removeStoreList(removesingle)
            // console.log(removesingle)
        }
        

 

    }
       
}
const LF = new listFunctions();

addBtn.addEventListener("click", displayList);

function displayList(){
    const toDo = document.getElementById("todo").value;

   
    // listFunctions.addToList(LF);
    LF.addToList(toDo);
       
}

cont.addEventListener("click", removeList);

function removeList(e){
    const LF = new listFunctions();
    LF.delFromList(e.target);
   
}
// console.log(Storage.removeStoreList());
