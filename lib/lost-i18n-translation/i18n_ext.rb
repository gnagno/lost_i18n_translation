module I18n
  class << self
    alias :old_translate :translate
  end
end

module ActionView::Helpers::TranslationHelper
  alias :t_old :t

  def add_span str
    #TODO: add the title part, this will be used to identify the string
    "<span class=\"translation_present\" title=\"translation present:\">#{str}</span>".html_safe
  end

  class String
    def add_span
      "<span class=\"translation_present\">#{str}</span>".html_safe
    end
  end

  def t(*args)
    r = /<span class="translation_missing" title="translation missing:/
    translation = t_old(args)

    if translation =~ r
      return translation
    else
      add_span translation.first
    end
  end
end
