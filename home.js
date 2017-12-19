function handleSubmit(){
console.log("hello 2");
var fname = document.getElementById("fname").value; 
var lname = document.getElementById("lname").value; 
/* this is for taking the value from checkbox */
var checkinput = document.getElementsByName("fooditem");
var ckecklen = checkinput.length;
var i;
var inputarray = [];
var inputarrayrad = [];
	for(i=0;i<ckecklen;i++){
		if(checkinput[i].checked){
		inputarray[i]=checkinput[i].value;
        document.getElementById("checkboxdta").innerHTML = inputarray.join(" ");

		}
	}
/* this is for taking the value from radio button */
var radioBtn = document.getElementsByName("modeOfPay");
var radiolen = radioBtn.length;
document.getElementById("firstdata").innerHTML = fname;
document.getElementById("seconddata").innerHTML = lname;

var j;
    for(j=0;j<radiolen;j++){
		if(radioBtn[j].checked){
		inputarrayrad[j]=radioBtn[j].value;
        document.getElementById("radiobtndta").innerHTML = inputarrayrad.join(" ");
		}
    }

}
function ClearFields(){
document.getElementById("radiobtndta").innerHTML ="";
document.getElementById("firstdata").innerHTML ="";
document.getElementById("seconddata").innerHTML ="";
document.getElementById("checkboxdta").innerHTML ="";
}
