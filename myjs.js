
function upDate(ele)
{ 
	document.getElementById('image').innerHTML = ele.alt;
    document.getElementById('image').style.backgroundImage ="url("+ele.src+")";
}
function undo()
{
	document.getElementById('image').style.backgroundImage = "url('')"
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';

}

var fruits=['mango','apple','banana'];
var arr=[5,4,,8,6,,8];
var sum=0;
function loadFruits()
{
	document.getElementsById('myid').innerHTML=fruits;

}

function myfunc()
{
	/*var a=prompt("What is Your Favourite Fruit");
	fruits[fruits.length]=a;
	document.getElementById('myid').innerHTML=fruits;*/
	for(i=0;i<arr.length;i++)
	{
		if(arr[i]>0)
		{
			sum=sum+arr[i];
		}
		
	}
	alert(sum);
	
}
function check()
{


	var a=document.getElementById('e1');
	var b=document.getElementById('e2');
	if(a.value!=b.value)
	{
		alert("Password Not Match");
		console.write("OKKK");
	
	}
	else
	{
		alert("Password Matched");

	}
}

function change()
{
	if(document.getElementById('e1').checked)
	{
		alert("check box checked");
	}
}