const allstar = document.queryselectorAll('.rating .star')
const ratingvalue=document.queryselector('.rating input')
allstar.foreach((item,idx)=>{
  item.addEventlistner('click',function (){
    let click=0
    ratingvalue.value= idx + 1
    console.log(ratingvalue.value)
    allstar.foreach(=>{
      i.classlist.replace('bxs-star','bx-star')
      i.classlist.remove('active')
      
    })
          
        for (let i=0; i<allstar.length; i++){
    if(i<=idx){
  allstar[i].classlist.replace('bx-star','bxs=star')
    allstar[i].classlist.add('active')
      
}else{
      allstar[i].style.setproperty('--i ,click)
                  click++   


    }
                }
                }}
                }}
    
