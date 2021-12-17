class UserFoodsController < ApplicationController
    def index
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: user.user_foods
        else
            unauthorized
        end
    end

    def create
        user_food = UserFood.new(user_food_params)
        if session[:user_id]
            user_food.user_id = session[:user_id]
            user_food.save
            render json: user_food, status: :created
        else
            unauthorized
        end
    end

    private

    def user_food_params
        params.permit(:food_id, :user_price, :user_days_until_expiration, :quantity, :unit)
    end

    def unauthorized
        render json: {error: "Please log in."}, status: :unauthorized
    end
end
