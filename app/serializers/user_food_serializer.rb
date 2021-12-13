class UserFoodSerializer < ActiveModel::Serializer
  attributes :user_id, :food_id, :user_price, :user_days_until_expiration, :quantity
end
