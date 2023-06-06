(function(){

	var bodyE1 = document.body;
	var content = document.querySelector('.content-wrap');
	var openBtn = document.querySelector('#open-button');
	var closeBtn = document.querySelector('#close-btn');
    var isOpen = false;



    function init()
    {
    	initEvents();
    }
    
    function initEvents()

    {
        
    	openBtn.addEventListener('click', togleMenu);

       

                    	if(closeBtn)

                    	{

                    		closeBtn.addEventListener('click', togleMenu);



                    	}


         content.addEventListener('click', function(e){
                  
                    var target = e.target;


                    if(isOpen && target !== openBtn){

                           togleMenu();
                    }


         closeBtn.addEventListener('click', togleMenu);

        });

      
    }

    function togleMenu()
    {

    	if (isOpen){
            bodyE1.classList.remove('show-menu');
    	}
    	else{
    	    bodyE1.classList.add('show-menu');

        }
           
            isOpen = !isOpen;
    }

     init();


})()