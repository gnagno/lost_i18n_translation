$(document).ready(function() {
  //FIXME: find a way to set these dynamically 
  I18n.defaultLocale = "en";
  I18n.locale = "en";

  var $translation_missing_count = $('.translation_missing').length;
  var $translation_present_count = $('.translation_present').length;

  var $newdiv = $('<div id="lost-i18n-translation-div"/>');
  var sep = " | "
  $newdiv.append("Current locale : " + I18n.currentLocale() + sep);

  var $tr_missing = $('<span id="lost-i18n-translation-tr-missing-count" />');
  $tr_missing.append( $translation_missing_count + sep);
  $newdiv.append(I18n.t("lost_i18n_translation.missing_label") + ": " , $tr_missing);
  

  var $tr_present = $('<span id="lost-i18n-translation-tr-present-count" />');
  $tr_present.append( $translation_present_count );
  $newdiv.append(I18n.t("lost_i18n_translation.present_label") + ": ", $tr_present);

  $('body').append($newdiv);
});

