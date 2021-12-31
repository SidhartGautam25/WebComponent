var left=1;
var right=5;
var first=1;
var last=9;
function show(){

	for(i=left;i<=right;i++)
	{
	     document.getElementById("item"+i).style.display="inline-block";
    }
}

function moveLeft(){
	if(right<last){
	document.getElementById("item"+left).style.display="none";
	left+=1;
	right+=1;
	show();
}
else{
	return;
}}






function moveRight(){
	if(left>first){
	document.getElementById("item"+right).style.display="none";
	left-=1;
	right-=1;
	show();
}
else{
	return;
}
}
