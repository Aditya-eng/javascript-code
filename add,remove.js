alert("there is an array which contains nos. like 0,1,2,3,4,5")
var ask = prompt("u want to add,remove,display or quit?")

var arr1 = [0,1,2,3,4,5]
if(ask=="add")
{
    var a = prompt("Pls Add")
    arr1.push(a)
    alert("You just added "+ arr1 +" into an array!!")
}
else if (ask == "remove")
{
    var b = prompt("Enter the value you want to remove")
    var val =parseInt(b)
    var index = arr1.indexOf(val)
    //var ind = prompt ("enter the index you want to remove from")
    arr1.splice(index,1)
    console.log(arr1)
    alert(arr1)
}
else if(ask=="display")
{
    console.log(arr1)
}
else if(ask=="quit")
{
    alert("Bye!!")
    //break
}
