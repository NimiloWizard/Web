$(document).ready(function(){         //htm elements and everything will load first
	$(window).scroll(function() //when you scroll the bar at the right side
	{      
		if(this.scrollY > 20)//if the scroll is already beyond 20px  
		 {       
			$('.navbar').addClass("sticky");  // .navbar .sitcky css will take effect
		
		}
		else              //but if not > 20, no changes happen
			
		{
			$('.navbar').removeClass("sticky"); 
		}
    });

    	 $('.menu-button').click(function() {          //upon clicking the menu button
	        $('.navbar .menu').toggleClass("active") //list will appear
	        $('.menu-button img').toggleClass("active"); //clicking agin will disappear list   
	    });  

	    $('.navbar .menu li a').click(function(){     //when you select from the list 
		    $('html').css("scroll-behavior", "smooth"); //it will scroll to the selected item
		    $('.navbar .menu').toggleClass("active")    //list will disapper
		    $('.deployment .deployment-content .left .text').show(1500);

		 });
		   
	   

	    $('.deployment').hover(function(){
	        $('.deployment .deployment-content .left .text').show(2000);
	    });  

        $('.deployment .deployment-content .right .info1').click(function(){
            $(".full").show(500);
            $(".per1").show(500);
         });

        $('.deployment .deployment-content .right .info2').click(function(){
            $(".software").show(500);
            $(".per2").show(503);
        });

        $('.deployment .deployment-content .right .info3').click(function(){
            $(".front").show(500);
            $(".per3").show(503);
        });

        $('.deployment .deployment-content .right .info4').click(function(){
            $(".back").show(500);
            $(".per4").show(503);
        });

	    $('.deployment .deployment-content .left a').click(function(){
          //  $('.deployment .deployment-content .right').show(1000);
	        $('.deployment-content .right .full').show(1100);
	        $('.deployment .deployment-content .right .info1 .per1').show(1105);
		    $('.deployment-content .right .software').show(1300);
		    $('.deployment .deployment-content .right .info2 .per2').show(1305);
		    $('.deployment-content .right .front').show(1500);
		    $('.deployment .deployment-content .right .info3 .per3').show(1505);
		    $('.deployment-content .right .back').show(1700);
		    $('.deployment .deployment-content .right .info4 .per4').show(1705);

	    });
	  

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 350,
    reset: true

});


sr.reveal('.about-info', {delay:250, origin:'right'});
sr.reveal('.slides-about, .header_text',{delay:250, origin:'left'});


sr.reveal('.card, .cols',{delay:200, origin:'top'});
sr.reveal('.card3, .card6, ',{delay:450, origin:'right'});
sr.reveal('.card1, .card4, ',{delay:500, origin:'left'});
sr.reveal('.card5',{delay:500, origin:'bottom'});

sr.reveal('.right',{delay:250, origin:'right'});
sr.reveal('.left',{delay:250, origin:'left'});



});


