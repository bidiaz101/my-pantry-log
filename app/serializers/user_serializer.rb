class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :user_foods
  has_many :foods, through: :user_foods
end
