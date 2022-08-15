<script>
  $( document ).ready(function() {
     $('.select-form').each( function () {
        $(this).children('option:first').attr("disabled", "disabled");
      });
   });
</script>
