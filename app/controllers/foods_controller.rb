class FoodsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        foods = Food.all
        render json: foods
    end

    def show
        food = Food.find(params[:id])
        render json: food
    end

    private

    def not_found
        render json: { error: "Food not found" }, status: 404
    end

end
