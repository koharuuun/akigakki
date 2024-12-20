function nazo710() {
  var h2 = document.getElementById('sintyo2').value;
  var w2 =document.getElementById('taijyu2').value;
  alert( Number(w2)/(Number(h2)*Number(h2)));
  if ((Number(w2)/(Number(h2)*Number(h2)))<=Number('18.5')){
    alert('低体重'); }
  else if( Number('18.5')<=(Number(w2)/(Number(h2)*Number(h2)))<Number('25')){
    alert('普通'); }
  else if( Number('25')<=(Number(w2)/(Number(h2)*Number(h2)))){
      alert('肥満'); } }
  
