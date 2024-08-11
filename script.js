const head = document.querySelector('header .nav');

window.onscroll =function(){
  if(document.documentElement.scrollTop >= head.offsetTop && window.scrollY >= 50){
   
      head.classList.add("second");
      
  }else{
      scond.classList.remove("second");
     
  }

}
//load button
 
 let loadmorebutton = document.querySelector('#load-more');
let currentitem = 6;

loadmorebutton.onclick = ()=>{
    let boxes = [...document.querySelectorAll('.card-item')];
    for( var i = currentitem ; i < currentitem + 3 ; i++){
        boxes[i].style.display = 'inline-block';
    }   
    loadmorebutton.style.display = 'none';
   
}
 let listProduct = document.querySelectorAll('.product-list .list-items li');
 console.log(listProduct)
  const spann = document.querySelector('.products .product-list .card-item');
const activeLi =  document.querySelector('.product-list .list-items .active');
console.log(activeLi)
//   spann.forEach(span =>{
//     console.log(span.dataset.parent);
//   })
 

 listProduct.forEach((ele)=>{
    ele.addEventListener('click',  ()=> {
        let boxes = [...document.querySelectorAll('.card-item')];
       
            for( var i = 0 ; i < 9; i++){
                boxes[i].style.display = 'none';
            }   
            loadmorebutton.style.display = 'none';
             if(ele.dataset.name === spann.dataset.parent){
                 spann.style.display = 'inline-block';
            }else if (ele.classList.contains('active')) {
                for( var i = 0 ; i < 9; i++){
                    boxes[i].style.display = 'inline-block';
                } 
                   
                
            }
      
        }
    
    )
})


const loginPopup = document.querySelector(".register");
const close = document.querySelector(".fa-x");


window.addEventListener("load",function(){

//  showPopup();
 setTimeout(function(){
   loginPopup.classList.add("show");
 },5000)

})




close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})
const brr =document.querySelector('.section-1 .fa-bars');
const listNavs = document.querySelector('.section-1 .nav-links');
const closeNav = document.querySelector('.section-1 .nav-links .fa-x');

brr.addEventListener('click' , ()=>{
    listNavs.classList.add('open');
})

closeNav.addEventListener("click", () => {
    listNavs.classList.remove("open");

    });