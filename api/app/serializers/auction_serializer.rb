class AuctionSerializer < ActiveModel::Serializer
  attributes(*(Auction.attribute_names - ['user_id']).map { |attr| attr.to_sym })

  belongs_to :user, key: :owner
  class UserSerializer < ActiveModel::Serializer
      attributes( :id,
                  :first_name,
                  :last_name,
                  :email,
                  :full_name,
                  :created_at,
                  :updated_at
                )
  end

  # has_many :bidder
  class ReviewSerializer < ActiveModel::Serializer
      attributes( :id,
                  :body,
                  :rating,
                  :created_at,
                  :updated_at,
                  :user_id
                  # :bidder_full_name
                )
      # def bidder_full_name
      #   # To get the model instance that's being serialized,
      #   #   use `object` instead of `self`
      #   object.user&.full_name
      # end
  end
end
