var banner = [
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1649683696/WebBanner/Banner323.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1649175874/WebBanner/Banner321.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648873882/WebBanner/Banner318.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648819057/WebBanner/Banner317.jpg',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648819057/WebBanner/Banner317.jpg',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1644816631/WebBanner/Banner296.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1646237005/WebBanner/Banner306.png',
];


var slideShowContainer = document.getElementById("slider");
let slideShow = document.createElement("img");
slideShow.src = "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1646237005/WebBanner/Banner306.png";
slideShow.className= "image";

function Start(){
    slideShowContainer.innerHTML="";
    

    var i = 0;

    x= setInterval(function(){
        if(i=== banner.length){
            i=0;
        }
        slideShow.src = banner[i];
        i= i+1;
    }, 4000);

    slideShowContainer.append(slideShow);
    slideShow.src[i] =slideShow;
}

Start();


// ________________________________________________________________________________________________________________________________________________________________


// var checkboxImages = [
//     'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
//     "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.4f5188ab4391cb45d4a4ed9e849f1e32.1.jpg",
//     "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
//     "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1646116928/Item/806D.png"
// ];

// var checkboxImages = [
//     {
//         img_url: 'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
//         foodName : "BURGER",
//     },
//     {
//         img_url:  "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.4f5188ab4391cb45d4a4ed9e849f1e32.1.jpg",
//         foodName : "PIZZA",
//     },
//     {
//         img_url:  "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
//         foodName : "MOMOS",
//     },
//     {
//         img_url:  "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1646116928/Item/806D.png",
//         foodName : "MOCKTAIL",
//     },
// ];

// function display(n){
//     let result = document.getElementById("result");
//     result.innerHTML = `<div> <img src= ${n} />
//      </div>`
// }


// function order(){
//     event.preventDefault();
//     let check =document.getElementById("check");
//     if(check.value===true){
//        console.log(check.value)
//     }
//     else{console.log("Gg")}
// }








// https://maps.googleapis.com/maps/api/geocode/json?latlng=44.4647452,7.3553838&key=AIzaSyCMniBk9yRC8kUZmq5FUFzewhk32OZ8IsE

let imagessss = [
    {
        "id" :  "1",
        "image" :  "data:image/jpeg;base64,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",
         "title" : "Burger",
    },
    {
        "id" :  "2",
        "image" :   "data:image/jpeg;base64,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",
         "title" : "Pizza",
    },
    {
        "id" :  "3",
        "image" :   "https://media.istockphoto.com/photos/japanese-dumplings-gyoza-with-pork-meat-and-vegetables-picture-id1133151212?k=20&m=1133151212&s=612x612&w=0&h=UO9ZhFWOSx9y_ISDp6auBmma3GiQd4yWpMdqo3O2TMo=",
         "title" : "MOMOS",
    },
    {
        "id" :  "4",
        "image" :   "data:image/jpeg;base64,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",
         "title" : "MOCKTAILS",
    },
]






function order(){
   

    event.preventDefault();
    document.getElementById("result").innerHTML ="";
    let random = Math.floor(Math.random() * 10000) + 5;

    let a1 = document.getElementById("check1");
    let a2 = document.getElementById("check2");
    let a3 = document.getElementById("check3");
    let a4 = document.getElementById("check4");
    if(a1.checked === false && a2.checked === false && a3.checked === false && a4.checked === false){
 
        document.getElementById("tit").innerText = `Order id is: 0` ;
    }else{
        
        document.getElementById("tit").innerText = `Your Order id is ${random}` ;
    }
    
   imagessss.map((e)=>{
  if(a1.checked === true && a1.value===e.id){
    document.getElementById("tit").innerText = `Your Order is Preparing | Order id ${random}` ;

    setTimeout(function () {
       
        display(e ,random);
      
         }, 3500);
       
  }
  if(a2.checked === true && a2.value===e.id){
    document.getElementById("tit").innerText = `Your Order is Preparing | Order id ${random}` ;

    setTimeout(function () {
       
        display(e ,random);
      
         }, 3500);
  }
  if(a3.checked === true && a3.value===e.id){
    document.getElementById("tit").innerText = `Your Order is Preparing | Order id ${random}` ;

    setTimeout(function () {
       
        display(e ,random);
      
         }, 3500);
  }
  if(a4.checked === true && a4.value===e.id){
    document.getElementById("tit").innerText = `Your Order is Preparing | Order id ${random}` ;

    setTimeout(function () {
       
        display(e ,random);
      
         }, 3500);
  }

//   if(a1.checked===true){
//     a1.checked = false;
//   }
// if(a2.checked===true){
//     a2.checked = false;
//   }
//   if(a3.checked===true){
//     a3.checked = false;
//   }
//   if(a4.checked===true){
//     a4.checked = false;
//   }
 
  
  
   }
)}


// let btn;


function display(e ,random){
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("container").style.display = "none" ;
    document.getElementById("tit").innerText = `Your Order id is Ready` ;
    
    let div = document.createElement("div");
    let h2 = document.createElement("h3");
    h2.innerText = `Your Order id is : ${random}` 
    let img = document.createElement("img");
    img.src = e.image;
    let h1 = document.createElement("h2");
    h1.innerText = e.title;
     
    div.append(h2,img,h1);
    btn = document.getElementById("btn").style.visibility=  "visible";


    
       
    document.getElementById("result").append(div);
    
    
    
}



//   display();

function hello(){
    console.log("helo")
    document.getElementById("result").style.display = "none";
    
    document.getElementById("tit").innerText = `Order id is: 0`;
    
    
    let a1 = document.getElementById("check1");
    let a2 = document.getElementById("check2");
    let a3 = document.getElementById("check3");
    let a4 = document.getElementById("check4");
    if(a1.checked===true){
        a1.checked = false;
    }
    if(a2.checked===true){
        a2.checked = false;
    }
    if(a3.checked===true){
        a3.checked = false;
    }
    if(a4.checked===true){
        a4.checked = false;
    }
    window.location.reload();
}