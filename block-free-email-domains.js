/* Notes: 

Block free domains (non-business email domains):

* Design the form block in Webflow.
* Have an email field in it.
* Give it a name (class name, combo class).
* Style the submit button and give it a class name/combo class.
* Add the following code before the body tag in the respective pages.
* Replace the submit button (where it says ‘.submit-button’) and input field (where it says ‘.email-input-field’) class names and in the below code.
* I’ve added a list of free domains (Hubspot list) here: https://docs.google.com/spreadsheets/d/1a9D4Bn-PN3nPUP8rUYn9BWM8PN3njYWlqvTZ3_ypNdk/edit#gid=735846346

*/

<script data-info="hacks-body">
// when the DOM is ready
$(document).ready(function() {
  // make an array of invalid domains
  const invalidDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'competitor.com', 'moredomains.etc'];

  // get the submit button
  const submitBtn = $('.submit-button');
  // on submit button click
  submitBtn.click(()=>{
    // get the email field
    const email = $('.email-input-field');
    // split email at '@' character to get domain
    const domainPart = email.val().split('@')[1]; 
  
    // if the domain exists in the invalidDomains array
    if(invalidDomains.indexOf(domainPart) !== -1) {
      // clear email field
      email.val('');
      // add a 'use business mail' placeholder
      email.attr('placeholder','Please enter a business email');
      // prevent form submission
      return false;
    }
    else{	// else if email is not invalid
      // submit form
      return true;
    }
  });
});
</script>


—————————————————————

<script data-info="hacks-body">
// when the DOM is ready
$(document).ready(function() {
  // make an array of invalid domains
  const invalidDomains = ['0-mail.com','123.com','facebook-email.ga','facebook.com','facebookmail.com','facebookmail.gq','giga4u.de','gigileung.org','girl4god.com','givepeaceachance.com','glay.org','glendale.net','globalfree.it','globalpagan.com','globalsite.com.br','gmail.com','gmail.com.br','gmail.ru','gmx.at','gmx.ch','gmx.com','gmx.de','gmx.li','gmx.net','go.com','go.ro','go.ru','go2net.com','gocollege.com','gocubs.com','goemailgo.com','gofree.co.uk','gol.com','goldenmail.ru','goldmail.ru','goldtoolbox.com','golfemail.com','golfilla.info','golfmail.be','gonavy.net','goodnewsmail.com','goodstick.com','googlegroups.com','googlemail.com','goplay.com','gorillaswithdirtyarmpits.com','gorontalo.net','gospelfan.com','gothere.uk.com','gotmail.com','gotmail.org','gotomy.com','gotti.otherinbox.com','hehe.com','hello.hu','hello.net.au','hello.to','hoopsmail.com','hopemail.biz','horrormail.com','hot-mail.gq','hot-shot.com','hot.ee','hotbot.com','hotbrev.com','hotfire.net','hotletter.com','hotmail.ca','hotmail.ch','hotmail.co','hotmail.co.il','hotmail.co.jp','hotmail.co.nz','hotmail.co.uk','hotmail.co.za','hotmail.com','hotmail.com.au','hotmail.com.br','hotmail.com.tr','hotmail.de','hotmail.es','hotmail.fi','hotmail.fr','hotmail.it','hotmail.kg','hotmail.kz','hotmail.nl','hotmail.ru','hotpop.com','hotpop3.com','hotvoice.com','onlinewiz.com','onmilwaukee.com','onobox.com','op.pl','opayq.com','openmailbox.org','operafan.com','operamail.com','opoczta.pl','optician.com','optonline.net','optusnet.com.au','orange.fr','orbitel.bg','orgmail.net','orthodontist.net','osite.com.br','oso.com','otakumail.com','our-computer.com','our-office.com','our.st','ourbrisbane.com','ourklips.com','ournet.md','outgun.com','outlawspam.com','outlook.at','outlook.be','outlook.cl','outlook.co.id','outlook.co.il','outlook.co.nz','outlook.co.th','outlook.com','outlook.com.au','outlook.com.br','outlook.com.gr','outlook.com.pe','outlook.com.tr','outlook.com.vn','outlook.cz','outlook.de','outlook.dk','outlook.es','outlook.fr','outlook.hu','outlook.ie','outlook.in','outlook.it','outlook.jp','outlook.kr','outlook.lv','outlook.my','outlook.nl','outlook.ph','outlook.pt','outlook.sa','outlook.sg','outlook.sk','over-the-rainbow.com','ownmail.net','uol.com.ar','uol.com.br','uol.com.co','uol.com.mx','uol.com.ve','uole.com','uole.com.ve','uolmail.com','uomail.com','wowway.com','wp.pl','wptamail.com','wrexham.net','writeme.com','writemeback.com','wrongmail.com','wtvhmail.com','xsecurity.org','xsmail.com','xtra.co.nz','xuno.com','xww.ro','xy9ce.tk','xyzfree.net','xzapmail.com','y7mail.com','ya.ru','yada-yada.com','ymail.com','yaho.com','yahoo.ae','yahoo.at','yahoo.be','yahoo.ca','yahoo.ch','yahoo.cn','yahoo.co','yahoo.co.id','yahoo.co.il','yahoo.co.in','yahoo.co.jp','yahoo.co.kr','yahoo.co.nz','yahoo.co.th','yahoo.co.uk','yahoo.co.za','yahoo.com','yahoo.com.ar','yahoo.com.au','yahoo.com.br','yahoo.com.cn','yahoo.com.co','yahoo.com.hk','yahoo.com.is','yahoo.com.mx','yahoo.com.my','yahoo.com.ph','yahoo.com.ru','yahoo.com.sg','yahoo.com.tr','yahoo.com.tw','yahoo.com.vn','yahoo.cz','yahoo.de','yahoo.dk','yahoo.es','yahoo.fi','yahoo.fr','yahoo.gr','yahoo.hu','yahoo.ie','yahoo.in','yahoo.it','yahoo.jp','yahoo.nl','yahoo.no','yahoo.pl','yahoo.pt','yahoo.ro','yahoo.ru','yahoo.se','yahoofs.com','yalla.com','yalla.com.lb','yalook.com','yam.com','yandex.com','yandex.pl','yandex.ru','yandex.ua','yapost.com','yapped.net','yawmail.com','yeah.net','yebox.com','yehey.com','yemenmail.com','yepmail.net','yert.ye.vc','yesey.net','yifan.net','ymail.com','yogotemail.com','yomail.info','yopmail.com','yopmail.pp.ua','yopolis.com','yopweb.com','youareadork.com','youmailr.com','your-house.com','your-mail.com','yourinbox.com','yourlifesucks.cu.cc','yourlover.net','yourname.freeservers.com','yournightmare.com','yours.com','yourssincerely.com','yoursubdomain.zzn.com','yourteacher.net','yourwap.com','yuuhuu.net','yyhmail.com','z1p.biz','za.com','zahadum.com','zaktouni.fr','zeepost.nl','zetmail.com','zhaowei.net','zhouemail.510520.org','ziggo.nl','zionweb.org','zip.net','zipido.com','ziplip.com','zipmail.com','zipmail.com.br','zipmax.com','zmail.ru','zoemail.com','zoemail.org','zoho.com','zohomail.com','zomg.info','zonnet.nl','zoominternet.net'];

  // get the submit button
  const submitBtn = $('.submit');
  // on submit button click
  submitBtn.click(()=>{
    // get the email field
    const email = $('.email');
    // split email at '@' character to get domain
    const domainPart = email.val().split('@')[1]; 
  
    // if the domain exists in the invalidDomains array
    if(invalidDomains.indexOf(domainPart) !== -1) {
      // clear email field
      email.val('');
      // add a 'use business mail' placeholder
      email.attr('placeholder','Please enter a business email');
      // prevent form submission
      return false;
    }
    else{	// else if email is not invalid
      // submit form
      return true;
    }
  });
});
</script>
