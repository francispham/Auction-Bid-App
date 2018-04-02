class AuctionsController < ApplicationController
  before_action :find_auction, only: [:show, :update, :destroy, :edit]

  def index
    auctions = Auction.order(created_at: :desc)
    render json: auctions
  end

  def show
    bids = @auction.bids
    render json: {auction: @auction, bids: bids}
  end

  def create
    @auction = Auction.new auction_params
    @auction.user = current_user
    @auction.save!
    render json: {id: @auction.id}
  end

  def edit
  end

  def destroy
    @auction.destroy
    redirect_to auctions_path
  end

  private
  def find_auction
    @auction = Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :details, :end_on, :reserve_price)
  end
end
