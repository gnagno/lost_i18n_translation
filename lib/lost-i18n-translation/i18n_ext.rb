module ActionView::Helpers::TranslationHelper
  alias :t_old :t

  def t(*args)
    "prova: #{t_old(args)}"
  end
end
