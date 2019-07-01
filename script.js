/*var button = document.getElementById("add");
var ul;

button.onclick=function addItem()
{
    var input = document.getElementById("input");
    var itemToAdd=input.value;
    ul =  document.getElementById("list");
    
    
    if(item === "")
        {
            return false;
            //add p tag and assign a value of "enter your todo";
        }else{
            li = document.createElement("li");
            var cb=document.createElement("input");
            cb.type="checkbox";
            cb.id="check";
            
            var label = document.createElement("label");
            label.innerHTML=itemToAdd;
            li.
            li.className="visual";
            
        }
};*/var button = document.getElementById("add");
var ul;

button.onclick=function addItem()
{
    var input = document.getElementById("input");
    var itemToAdd=input.value;
    ul =  document.getElementById("list");
    
    
    if(itemToAdd === "")
        {
            return false;
            //add p tag and assign a value of "enter your todo";
        }else{
            var li = document.createElement("li");
            var cb=document.createElement("input");
            cb.type="checkbox";
            cb.id="check";
            
            var label = document.createElement("label");
            label.innerHTML=itemToAdd;
            li.appendChild(cb); li.appendChild(label); //ul.appendChild(li);
            ul.insertBefore(li,ul.childNodes[0]);
            li.className="visual";
            input.value="";
        }}

//var button2 = document.getElementById("remove");
//button2.onclick=function()
//{
//    var ul = document.getElementById("list");
//    var liArr = ul.children;
//    for(var i =0 ;i<liArr.length;i++)
//        {
//            if(liArr[i].children.check.checked==true)
//                {
//                    ul.removeChild(liArr[i]);
//                }
//        }
//}

var button2 = document.getElementById("remove");
button2.onclick=function()
{
    var ul = document.getElementById("list");
    var liArr = ul.children;
    for(var i =0 ;i<liArr.length;i++)
        {
            while(liArr[i]&&liArr[i].children.check.checked==true)
                {
                    ul.removeChild(liArr[i]);
                }
        }
}

var button3 =document.getElementById("removeall");
button3.onclick=function()
{
    var ul = document.getElementById("list");
    var liArr = ul.children;
    for(var i =0 ;i<liArr.length;i++)
        {
            while(liArr[i])
                    ul.removeChild(liArr[i]);
        }
}
