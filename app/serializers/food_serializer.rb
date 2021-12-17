class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :days_until_expiration, :category, :signs_of_spoilage, :price, :description
end
