// $Id: cufon-drupal.js,v 1.1 2009/07/13 21:41:46 eads Exp $

Drupal.behaviors.cufonReplace = function(context) {
  for (o in Drupal.settings.cufonSelectors) { 
    var s = Drupal.settings.cufonSelectors[o];
    $(s.selector + ':not(.cufon-replace-processed)', context).addClass('cufon-replace-processed').each(function() {
      Cufon.replace($(this), s.options);
    });
  }

  // Work around Internet Explorer rendering delay
  Cufon.now();
};
;

/*
     FILE ARCHIVED ON 21:56:50 Dec 16, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:32:18 Jun 23, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 62.761 (3)
  esindex: 0.01
  captures_list: 109.91
  CDXLines.iter: 13.957 (3)
  PetaboxLoader3.datanode: 43.183 (4)
  exclusion.robots: 0.366
  exclusion.robots.policy: 0.344
  RedisCDXSource: 29.399
  PetaboxLoader3.resolve: 94.136 (2)
  load_resource: 120.728
*/