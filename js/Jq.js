$(document).ready(function(){
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 5,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    // fetch("https://api.thecatapi.com/v1/images/search?breed_ids=rblu&limit=4")
    // .then(res => res.json())
    // .then( (data)  => {
    //     var text = ''
    //     data.forEach(element => {
    //    text += `<div><img src="${element.url}" alt="CAT"> </div>`
    //          console.log(element.url)
    //           $(".randomCat").append(`<img src="${element.url}" style="height:300px;">`) 
              
    //     })
    //         })  
    //     .catch(err => console.log(err))
        
        $(".burger").click(function(){
            $("ul").toggleClass("showNav");
          }); 
          $(".btnLoadMore").click(function(){
              alert("Loading...")
                // fetch("https://api.thecatapi.com/v1/images/search?breed_ids=rblu&limit=4")
                // .then(res => res.json())
                // .then( (data)  => {
                //     var text = ''
                //     data.forEach(element => {
                //    text += `<div><img src="${element.url}" alt="CAT"> </div>`
                //          console.log(element.url)
                //           $(".randomCat").append(`<img src="${element.url}" style="height:300px;">`) 
                    
                //     })
                //         })  
        //     )
        $('.gallery').show()
        fetch("https://api.thecatapi.com/v1/images/search?breed_ids=rblu&limit=7")
        .then(res => res.json())
        .then( item => {
                   
                   var text = ""
                   item.forEach(element => {
                   text += `  <div><img src="${element.url}" alt=""></div>`
                   $(' #wrapper').html(text)
     
                
                  
                   
                 });
             })
             .catch( err => console.log(err))
     
          }); 
      });

        
       





// ********FOR RESPONSIVE *******

