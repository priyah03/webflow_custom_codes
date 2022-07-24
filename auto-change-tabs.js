/* Tabs auto change with with reset loops */ 

<script>
  var Webflow = Webflow || [];
  Webflow.push(function () {
    // Start Tabs
    let tabTimeout;
    clearInterval(tabTimeout);
    tabLoop();

    // Connect your class names to elements or change them accordingly
    function tabLoop() {
      tabTimeout = setInterval(function () {
        let $next = $('.vertical-tab').children('.w--current:first').next();
        let $nextTab = $('.solution-tab-content').children('.w--tab-active:first').next();
        if ($next.length) {
          $('.vertical-tab').children('.w--current:first').removeClass('w--current')
          $('.solution-tab-content').children('.w--tab-active:first').removeClass('w--tab-active')
          $next.addClass('w--current');  // user click resets timeout
          $nextTab.addClass('w--tab-active');  // user click resets timeout
        } else {
          $('.vertical-tab').children('.w--current:first').removeClass('w--current')
          $('.solution-tab-content').children('.w--tab-active:first').removeClass('w--tab-active')
          $('.solution-tab-link:first').addClass('w--current');
          $('.w-tab-pane:first').addClass('w--tab-active');
        }
      }, 3000);  // 3 Second Rotation
    }

    // Reset Loops
    $('.solution-tab-link').click(function () {
      clearTimeout(tabTimeout);
      tabLoop();
    });
  });
</script>
