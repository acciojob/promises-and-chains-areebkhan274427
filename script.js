//your JS code here. If required.
var ageElement=document.getElementById('age');
var nameElement=document.getElementById('name');



var promise= new Promise((resolve,reject)=>{
     setTimeout(()=>{
		 
        var age=ageElement.value;
        var name=nameElement.value;

		 if(!(age && name)){
			 alert("Please enter valid details");
		 }
		 return;
       if(age<18){
           reject(`Oh sorry ${name}. You aren't old enough.`);
       }
         else{
             resolve(`Welcome, ${name}. You can vote.`);
         }
       
   },4000);
});

function call(){
    return promise;
}


function myFunction(e) {
   call().then(function(data){
       alert(data);
   }).catch(function(data){
       alert(data);
   })
}


