class UserFoodsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index
        user = User.find(session[:user_id])
        render json: user.user_foods
    end

    def create
        user_food = UserFood.new(user_food_params)
        user_food.user_id = session[:user_id]
        user_food.save
        render json: user_food, status: :created
    end

    def update
        user_food = UserFood.find(params[:id])
        user_food.update!(user_food_params)
        render json: user_food
    end

    def destroy
        user_food = UserFood.find(params[:id])
        user_food.destroy
        head :no_content
    end

    private

    def user_food_params
        params.permit(:food_id, :user_price, :user_days_until_expiration, :quantity, :unit)
    end

    def authorize
        render json: {error: "Please log in."}, status: :unauthorized unless session.include? :user_id
    end

    def invalid_record(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
