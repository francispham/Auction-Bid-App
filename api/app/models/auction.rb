class Auction < ApplicationRecord
  belong_to :user

  has_many :bids, dependent: :destroy
end
