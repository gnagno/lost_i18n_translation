Rails.application.routes.draw do

  root :to => 'home#index'

  mount LostI18nTranslation::Engine => "/lost-i18n-translation"
end
