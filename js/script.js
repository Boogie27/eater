(function (){
    


  var TypeWriter = function (textWords, words, wait){
    this.textWords = textWords;
    this.words = words;
    this.wait = wait;
    this.txt = "";
    this.x = 0;
    this.isDeleting = false;
    this.type();
}

TypeWriter.prototype.type = function (){ 



  
  if(this.isDeleting){
      this.txt = this.words[this.x].substring(0, this.txt.length - 1);
  }else{
      this.txt = this.words[this.x].substring(0, this.txt.length + 1);
  }

  var typeSpeed = 300;
  if(this.isDeleting){
      typeSpeed /= 2;
  }else{
     typeSpeed = 500;
  }


         if(!this.isDeleting  &&  this.txt === this.words[this.x]){
              this.isDeleting = true;
              typeSpeed = 3000;
         }else if(this.isDeleting  &&  this.txt === ""){
               this.isDeleting  = false;
               typeSpeed = 500;
               if(this.x === this.words.length - 1){
                    this.x = 0 - 1;
               }
                  this.x++;
                  this.words[this.x];
         }
        
       


         this.textWords.innerHTML = "<span class='text'>"+this.txt+"</span>"
    setTimeout(()=>this.type(), typeSpeed);
}



document.addEventListener("DOMContentLoaded", initTypeWriter);
 function initTypeWriter(){
       var textWords, wait, words;
           textWords = document.querySelector(".text-words");
           words = JSON.parse(textWords.getAttribute("data-words"));
           wait  = parseInt(textWords.getAttribute("data-wait"));


           new TypeWriter(textWords, words, wait);
          
      }

})();



    // jquery functions sticky nvigation

       $(document).ready(function(){

              function stickyNav(){
                    var top = $(".nav-sticky").attr("data-top");
                    var y = $(".nav-sticky").offset().top - top;
                    var x = $(this).scrollTop();
                        
                    if(x >= y - 10){
                        $(".navigation").addClass("sticky");
                    }else{
                        $(".navigation").removeClass("sticky"); 
                    }
              }

              stickyNav();
         
            $(window).scroll(function(event){
                stickyNav();
            });

           







            // logo Smooth scroll function
            $(".logo").click(function(event){
                 $("html, body").animate({ scrollTop: $("#home").offset().top }, 1000);
            });








            

            // anchor smooth scroll  for navigation
            $("a").click(function(event){
                  var item, item_id, item_href, itemTop;
                      item =  event.target;
                      item_href = item.getAttribute("href");
                      item_id = item_href.substring(item_href.lastIndexOf("#") + 1);
                      itemTop = item.getAttribute("top");  // All anchor reference should have a top attribute for the positioning of the scroll

                      if(item_id){
                          $("html, body").animate({
                              scrollTop: $("#"+item_id).offset().top - itemTop
                          }, 1000);
                      }
            });

     
            



                 
                //    HOW IT WORKS SECTION slideup function
                  function slideUp(){
                      var x = $(this).scrollTop();
                      var y = $(this).height();
                      var item = $(".slideUp-animation").offset().top + 50;
                      var z =  item - x;
                      if(y >= z){
                      $(".slideUp-animation").each(function(i){
                             $($(".slideUp-animation")[i]).animate({top: "0px", opacity: 1});
                      });
                      $(this).stop();
                    }
                  }
                  slideUp(); 
                  $(window).scroll(function(){
                       slideUp(); 
                  })
                










                //    FEATURE SECTION  fadeout function
                    function fadeOut(){
                         var item, viewPort, time, top, x, y, z;
                              viewPort = $(this).height();
                              y = $(this).scrollTop();
                        
                         $(".fadeOut").each(function(i){
                                top = $(".fadeOut")[i].getAttribute("data-top");
                                time = $(".fadeOut")[i].getAttribute("data-duration");
                                x  = $($(".fadeOut")[i]).offset().top - top;
                                z  = x - y;
                              
                              
                               if(viewPort >= z){
                                   $($(".fadeOut")[i]).css({opacity: 1, transition: time});
                               }
                         });     
                    }

                    fadeOut();

                   $(window).scroll(function(){
                           fadeOut();
                   });
                  
                
          











                  //   CITIY SECTION fadeOut
                    function fadeOutAnimation(){
                        var x, y, z, q, item; 
                            x = $(this).scrollTop();
                            y = $(this).height();
                           
                    
                        $(".fadeOut-animation").each(function(i){
                            z = $($(".fadeOut-animation")[i]).offset().top + 200;
                            q = z - x;
                            if(y >= q){
                                $($(".fadeOut-animation")[i]).css({opacity: 1, transition: "1s"});
                            }
                        });
                    }
                    fadeOutAnimation();
                $(window).scroll(function(event){
                    fadeOutAnimation() ;   
                });






                



                    //CONTACT FORM SECTION FadeInOut jquery animation
                    function fadeInOut(){
                        var x, y, q, z, itemTop, itemDiv, dataTop, top;
                            x = $(this).scrollTop();
                            y = $(".fade-animation").offset().top;
                            q = $(this).height();
                            top = 45;
                            $(".fade-animation").each(function(i){
                                dataTop = $(".fade-animation")[i].getAttribute("data-top");
                                if(dataTop !== ""){
                                    top = dataTop;
                                }
                                itemDiv = $($(".fade-animation")[i]).offset().top - top;
                                z = itemDiv - x + q;
                                if(q >= z){
                                    $($(".fadeInOut")[i]).animate({
                                        scrollTop: $($(".fadeInOut")[i]).addClass("animate-image")
                                    }, 500, function(){
                                        $($(".fadeInOut")[i]).addClass("animate-remove");
                                    });
                                }
                            });
                      
                     }
                     fadeInOut();
    
                    $(window).scroll(function(){ 
                        fadeInOut();
                    });


                
               
              

              






            // end of document.ready function
       });


      