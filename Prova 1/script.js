function calculoMedia(){   
    
    
  var media;
  var n1 = parseInt(document.getElementById('n1').value);
  var n2 = parseInt(document.getElementById('n2').value);
  var n3 = parseInt(document.getElementById('n3').value);

  media = (n1 + n2 + n3) / 3;
 

if (media >= 7) {
    
    document.write(media + "<h1 style='color:#3b9e1d'>Aprovado</h1>");
     
} 
else if (media <= 6) {
    
    document.write(media + "<h1 style='color:#e40606'>Reprovado</h1>");
  
}

}
