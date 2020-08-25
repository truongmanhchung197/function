let list=[];
function display(){
    let text="<table cellspacing=\"10\" bgcolor=\"#f2f2f2\" width='50%'>" ;
    for (let i=0;i<list.length;i++){
        text+="<tr>"+"<td width='60%'>"+"<input type='text' style='height: 30px' value='"+ list[i]+"'"+"id='"+i+"'>"+"</td>"+"<td>"+"<button onclick='edit("+i+")'>"+"Edit"+"</button>"+"</td>"+"<td>"+"<button onclick='deletee("+i+")'>"+"Delete"+"</button>"+"</td>"+"</tr>"
    };
    text+="</table>";
    return text;
};
function add(){
    let p=document.getElementById("newProduct");
    list.push(p.value);
    document.getElementById("demo").innerHTML=display();
    alert("Add "+p.value);
    p.value="";
};
function edit(i){
    list[i]=document.getElementById(i).value;
    document.getElementById("demo").innerHTML=display();
};
function deletee(i){
    if (confirm("Bạn muốn xóa "+list[i]+"?")){
        list.splice(i,1);
        document.getElementById("demo").innerHTML=display();
    }
}
