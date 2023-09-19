
var siteName=document.getElementById('name-site');
var siteUrl=document.getElementById('url-site');
var allLinkes =[];

if(localStorage.getItem('allLinkes')!=null){
   allLinkes =JSON.parse(localStorage.getItem('allLinkes'))
   displaylinkes()
}




function addLinkes(){
   var link={
      name:siteName.value,
      URL:siteUrl.value,
   }

   allLinkes.push(link);
   localStorage.setItem('allLinkes',JSON.stringify(allLinkes))
   // console.log(allLinkes);
   clear()
   displaylinkes()
}



function clear(){
   siteName.value=""
   siteUrl.value=""
}


function displaylinkes(){
   var cartona="";
   for(var i=0;i<allLinkes.length;i++){
      cartona=cartona+`<tr>
      <td>
    ${allLinkes[i].name}
    </td>

    <td>
    <a href="${allLinkes[i].URL}">
    <button class="btn btn-outline-info" onclick="openLink(${i})">visit</button>
   </a>
   </td>

   <td>
   <button class="btn btn-danger" onclick="deleteElment(${i})">delete</button>
 </td>
   </tr>`
   
      
   }
   document.getElementById('t-body').innerHTML=cartona;
}


function deleteElment(index){
   allLinkes.splice(index,1);
   localStorage.setItem('allLinkes',JSON.stringify(allLinkes))
   displaylinkes()
}


