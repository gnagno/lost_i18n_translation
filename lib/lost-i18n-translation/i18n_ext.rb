module ActionView::Helpers::TranslationHelper
  alias :t_old :t

  def add_span str
    #TODO: add the title part, this will be used to identify the string
    "<span class=\"translation_present\">#{str}</span>".html_safe
  end

  def t(*args)
    r = /<span class="translation_missing" title="translation missing:/
    str = t_old(args)

    if str =~ r
      return str
    else
      add_span str
    end
  end
end
