require 'open-uri'
require 'nokogiri'

html = URI.open("https://www.heb.com/search/?q=bread")
doc = Nokogiri::HTML(html)
table = doc.css(".kITvYk")
puts table
