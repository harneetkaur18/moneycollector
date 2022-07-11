array_customer=[]

function submit(){
    var name1=document.getElementById("Taran").value 
    var name2=document.getElementById("Ravl").value 
    var name3=document.getElementById("Arsh").value
    var name4=document.getElementById("Harn").value
    var name5=document.getElementById("Rah").value
    var name6=document.getElementById("Nav").value
    
    array_customer.push(name1)
    array_customer.push(name2)
    array_customer.push(name3)
    array_customer.push(name4)
    array_customer.push(name5)
    array_customer.push(name6)

    //var maximumvalue=Math.max(name1, name2, name3, name4, name5, name6)
    //var maximumvalue=Math.max.apply(Math,array_customer)
    var maximumvalue=Math.max(...array_customer)
    
    document.getElementById("maximum").innerHTML="Your Maximum Earning is " + maximumvalue
    document.getElementById("allvalues").innerHTML=array_customer
}

function sorting(){
    array_customer.sort()
    document.getElementById("allvalues").innerHTML=array_customer
}