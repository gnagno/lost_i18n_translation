module LostI18nTranslation
  module ApplicationHelper
    def pippo(*args)
      'ciao ciao'
    end
  end
  ApplicationHelper.send :include, LostI18nTranslation::ApplicationHelper
end
