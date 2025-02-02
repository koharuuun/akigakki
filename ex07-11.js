function nazo711() {
  var no1 = document.getElementById('answer711').value;
  if ((Number(no1)%400)==Number('0')){
    alert('閏年'); }
  else if ((Number(no1)%100)==Number('0')){
    alert('平年'); }
else if ((Number(no1)%4)==Number('0')){
    alert('閏年'); }
else {　alert('平年')}}
