class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :days_until_expiration, :type, :signs_of_spoilage, :price, :description
end
