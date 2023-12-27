const date = Date().slice(16,21);

function myFunction() {
  let value = prompt(" Hi, Enter Your Secret Time :- ");
  if(value == date) {
    document.getElementById("demo").innerHTML = value+" ಸರಿಯಾದ ಉತ್ತರ, I am not a boy and my name ends with Letter 'A' .";
    alert(" OHH! Got it... Press 'Enter' or 'Ok' to see your santa");
    setTimeout(function(){
      window.location.reload();
    }, 6000);
}
else{
alert('HA HA HA, "Sorry Bro...Better Luck Next Time" Try Again');
setTimeout(function(){
  window.location.reload();
}, 200);
}
}
