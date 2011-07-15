$(document).ready(function() {
  var $translation_missing_count = $('.translation_missing').length;

  var $newdiv = $('<div id="lost-i18n-translation-div"/>');

  var $tr_missing = $('<span id="lost-i18n-translation-tr-missing-count" />');
  $tr_missing.append( $translation_missing_count );
  $newdiv.append("Missing translations: " , $tr_missing );

  $('body').append($newdiv);
});

