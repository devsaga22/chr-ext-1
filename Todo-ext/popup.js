


const items=[
    {"item":"Record next video","status":0},
    {"item":"do your 2nd task","status":1}

]


// when storing to local storage u have to make string format
const itemsStr=JSON.stringify(items);

document.querySelector('.create-todo').addEventListener('click',function(){
    document.querySelector('.new-item').style.display="block"
})
document.querySelector('.new-item button').addEventListener('click',function(){
    var itemName=document.querySelector('.new-item input').value
    if(itemName!=""){
        var itemsStorage=localStorage.getItem('todo-items');
        var itemsArr=JSON.parse(itemsStorage);
        itemsArr.push({"item":itemName,"status":0})
        saveItem(itemsArr)
        fetchTodoItems()
    }
})
function fetchTodoItems(){
    const itemsList=document.querySelector("ul.todo-items");
    itemsList.innerHTML="";
    var newItemHTML="";
    try{
        var itemsStorage=localStorage.getItem('todo-items');
        var itemsArr=JSON.parse(itemsStorage);
        for(var i=0;i<itemsArr.length;i++){
            var status=""
            if(itemsArr[i].status==1){
                status='class="done"'
            }
            newItemHTML+=` <li data-itemindex="${i}" ${status}><span class="item">${itemsArr[i].item}</span><div><span class="itemComplete">✔</span><span class="itemDelete">❌</span></div></li>`
        }
        itemsList.innerHTML=newItemHTML

        var itemsListUL=document.querySelectorAll('ul li')
        for (var i=0;i<itemsListUL.length;i++){
            itemsListUL.querySelector('.itemCOmplete').addEventListener('click',function(){
                var index=this.parentNOde.parentNOde.dataset.itemindex
                console.log(index);
                itemComplete(index)})
            itemsListUL.querySelector('.itemCOmplete').addEventListener('click',function(){
                var index=this.parentNOde.parentNOde.dataset.itemindex
               
                    itemDelete(index)
                })

        }
    }catch(e){

    }
   

}

function saveItem(obj){
    var string=JSON.stringify(obj);
    localStorage.setItem('todo-items',string)
}

fetchTodoItems()

function itemComplete(index){
    var itemsStorage=localStorage.getItem('todo-items');
    var itemsArr=JSON.parse(itemsStorage);
    itemsArr[index].status=1
    saveItem(itemsArr)
    document.querySelector('ul.todo-items li[data-itemindex="'+index+'"]').className="done"
}
function itemDelete(index){
    var itemsStorage=localStorage.getItem('todo-items');
    var itemsArr=JSON.parse(itemsStorage);
    itemsArr[index].status=0
    itemsArr.splice(index,1)
    saveItem(itemsArr)
    document.querySelector('ul.todo-items li[data-itemindex="'+index+'"]').remove;
}
