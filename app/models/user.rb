class User < ApplicationRecord
    has_secure_password
    has_many :user_foods
    has_many :foods, through: :user_foods
    validates :username, presence: true
    validates :username, uniqueness: { case_sensitive: false }
end
