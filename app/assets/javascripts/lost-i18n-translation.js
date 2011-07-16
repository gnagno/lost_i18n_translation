$(document).ready(function() {
  var $translation_missing_count = $('.translation_missing').length;
  var $translation_present_count = $('.translation_present').length;

  var $newdiv = $('<div id="lost-i18n-translation-div"/>');

  var $tr_missing = $('<span id="lost-i18n-translation-tr-missing-count" />');
  $tr_missing.append( $translation_missing_count );
  $newdiv.append("Missing translations: " , $tr_missing );


  var $tr_present = $('<span id="lost-i18n-translation-tr-present-count" />');
  $tr_present.append( $translation_present_count );
  $newdiv.append("Present translations: ", $tr_present  );

  $('body').append($newdiv);
});

