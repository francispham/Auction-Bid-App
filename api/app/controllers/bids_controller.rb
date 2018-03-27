class BidsController < ApplicationController

  def create
    @auction = Auction.find(params[:auction_id])
    @bid = Bid.new bid_params
    @bid.auction = @auction
    # @bid.user = @current_user
    @bid.save
    render json: {id: @bid.id}
  end

  def destroy
    @bid = Bid.find params[:id]
    @bid.destroy
    redirect_to @bid.auction
  end

  private

  def bid_params
    params.require(:bid).permit(:bid_price)
  end

end
