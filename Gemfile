# Gemfile
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-sass-converter", "~> 2.0"

group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-gist"
end

# Windows 및 JRuby 사용자용
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# HTTP 관련
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]