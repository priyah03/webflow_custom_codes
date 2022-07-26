<script>
// Responsive Webflow Slide

const w_slides = document.querySelectorAll(".form-slide");
	
for(var i = 0; i < w_slides.length; i++) {
	
   const observer = new MutationObserver(function(mutation) {
					 	    	
	   var w_slides = document.querySelectorAll('.form-slide')
	   
	   for(var i = 0; i < w_slides.length; i++) {
		  
		   if (!w_slides[i].hasAttribute('aria-hidden')) {
			   
			 var slideSize = w_slides[i].clientHeight;
						
			 w_slides[i].closest('.outsource-form-slider').style.height = slideSize + 'px';		       
		  
       }
	    }
    });

    observer.observe(w_slides[i], { attributes:true});
}
</script>
