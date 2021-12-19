class UserFoodSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :food_id, :user_price, :user_days_until_expiration, :quantity, :unit, :notes
  belongs_to :food
end
