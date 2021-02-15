module Resolvers
  class UserResponseResolver < Resolvers::Base
    type [Types::Item], null: false
    
    argument :order_by, Types::ItemOrder, required: false
    argument :category, Types::ItemCategory, required: false

    def resolve(order_by: nil, category: nil)
      # call your application logic here:
      recommendations = ItemRecommendation.new(
        viewer: context[:viewer],
        recommended_for: object,
        order_by: order_by,
        category: category,
      )
      # return the list of items
      recommendations.items
    end
  end
end