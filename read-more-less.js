<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
 $(document).ready(function(){
     const maxCharacters = 40;
    $('.readmore-wp').each(function(){
        var parent = $(this).children(".target");
        var self = parent;
          var text = self.text();
          var truncate = text.substring(0, maxCharacters)+"...";
          self.text(truncate);
        self.attr("fulltext", text);
    });
    $(".readmore-btn").click(function(ev){
            //var sibling = $(ev.target).siblings(".target");
            //console.log($(ev.target).siblings(".readmore-wp").children())
            var sibling = $(ev.target).siblings(".readmore-wp").children(".target")
            if($(this).hasClass("expand"))
            {
                $(this).removeClass("expand");
                $(this).text("Read more...")
                var text = sibling.text();
                var truncate = text.substring(0, maxCharacters)+"...";
                sibling.text(truncate);
                sibling.attr("fulltext", text);
            }
            else
            {
            		//alert(sibling.attr("fulltext"));
                sibling.text(sibling.attr("fulltext"));
                $(this).addClass("expand");
                $(this).text("Read less...")
                sibling.css("transition", "1s");
            }
    }); 
});
</script>
