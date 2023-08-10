document.querySelector("button").addEventListener("click",function(e){
  
  e.preventDefault();
  document.querySelector("button").innerHTML="Downloading ....";

  inputURL=document.querySelector("input").value;
  fetch(inputURL)
  .then((res)=>{
    return res.blob();
  })
  .then((data)=>
  {
   
    tempURL=URL.createObjectURL(data);
    let aTag=document.createElement("a");
    aTag.href=tempURL;
    aTag.download= inputURL.replace(/^.*[\\\/]/, '');
    document.querySelector(".container").append(aTag);
    aTag.click();
    document.querySelector(".container").removeChild(aTag);
    URL.revokeObjectURL(tempURL);
    document.querySelector("input").value="";
    document.querySelector("button").innerHTML="Download";
  })
  .catch((e)=>{
    alert("This file can't be downloaded ! ");
    document.querySelector("input").value="";
    document.querySelector("button").innerHTML="Download";
  })
})