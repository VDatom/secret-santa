
const d1 = new Date();
let hour = d1.getHours();

const d = new Date();
let minutes = d.getMinutes();

function myFunction() {
  let value = prompt(" Hi, Enter Your Secret Time :- ");
  const data =(hour+":"+minutes);
  if(value == data) {
    document.getElementById("demo").innerHTML = value+" ಸರಿಯಾದ ಉತ್ತರ, My Name Ends with Letter 'A' .";
    alert(" OHH! Got it... Press 'Enter' or 'Ok' to see your santa");
    setTimeout(function(){
      window.location.reload();
    }, 6000);
}
else{
alert('HA HA HA, "Sorry Bro...Better Luck Next Time" Try Again');
setTimeout(function(){
  window.location.reload();
}, 1000);
}
}
