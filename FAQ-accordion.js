<!--START-Cloneable Custom Code-->
<script>
$('[data-click="faq"]').click(function(){
  if(!$(this).is('.open')){
    $('[data-click="faq"].open').each((i, item)=>{
      item.click();
    });
    $(this).addClass('open');    
  }
  else{
    $(this).removeClass('open');
  }
});
</script>

<!--END-Cloneable Custom Code-->
