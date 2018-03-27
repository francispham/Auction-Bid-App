PASSWORD = 'supersecret'

Bid.destroy_all
Auction.destroy_all
User.destroy_all

super_user = User.create(
  first_name: 'Jon',
  last_name: 'Snow',
  email: 'js@winterfell.gov',
  password: PASSWORD
)

5.times do |num|
  full_name = Faker::SiliconValley.character.split(' ')
  first_name = full_name[0]
  last_name = full_name[1]
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}.#{last_name}-#{num}@piedpiper.com",
    password: 'supersecret'
  )
end

users = User.all


20.times do |num|
  a = Auction.create({
    title: "#{Faker::Hacker.noun}-#{num}",
    details: Faker::Hacker.say_something_smart,
    reserve_price: Faker::Commerce.price,
    user: users.sample
  })
  if a.valid?
    rand(0..10).times.each do
      b = Bid.create(
        bid_price: Faker::Commerce.price,
        auction: a,
        user: users.sample
      )
    end
  end
end

puts "Created #{User.count} users"
puts "Created #{Auction.count} auctions"
puts "Created #{Bid.count} bids"
puts "Login as admin with #{super_user.email} and password of '#{PASSWORD}'!"
