function removeUrlAnchor(url){
  var resultUrl =[];
  for (var i = 0 ; i < url.length ; i++){
      if(url[i] != '#'){
          resultUrl[i] = url[i];
      }
      else{
          break;
      }
  }
 
  console.log(resultUrl.join(""));
 
  return resultUrl.join("");
}