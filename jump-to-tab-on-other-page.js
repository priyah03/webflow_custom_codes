//Paste the below script before the opening body section.

<script>
var Webflow = Webflow || [];
Webflow.push(function () {
  var tabName = getParam('tab');
  if (!tabName) return;

  $('.' + tabName).triggerHandler('click');

  function getParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
});
</script>
