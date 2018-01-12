# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Message.delete_all
Channel.delete_all

u1 = User.create!(username: "absterr08", email: "absterr08", password: "starwars", img_url: "6")
u2 = User.create!(username: "jRudell22", email: "b", password: "starwars", img_url: "7")
u3 = User.create!(username: "d_Og55", email: "c", password: "starwars", img_url: "4")
u4 = User.create!(username: "leslieKnope", email: "d", password: "starwars", img_url: "5")
u5 = User.create!(username: "bman68", email: "e", password: "starwars", img_url: "3")
u6 = User.create!(username: "sunnyBunny", email: "f", password: "starwars", img_url: "8")
u7 = User.create!(username: "mauricio12", email: "g", password: "starwars", img_url: "9")
u8 = User.create!(username: "monmon", email: "h", password: "starwars", img_url: "10")
u8 = User.create!(username: "daedae", email: "i", password: "starwars", img_url: "11")

c1 = Channel.create!(name: '11-06-2017-nyc', description: 'Welcome to Slap Academy!')
c2 = Channel.create!(name: 'general', description: 'This channel is for team-wide communication and announcements.')
c3 = Channel.create!(name: 'random', description: 'A place for non-work-related slap chats.')
c4 = Channel.create!(name: 'slap-talk', description: 'Hand in your best slap-related puns' )
# c5 = Channel.create!(name: '', description: )
# c6 = Channel.create!(name:, description: )

Channel.all.each do |channel|
  User.all.each do |user|
    ChannelSubscription.create!(user_id: user.id, channel_id: channel.id)
  end
end

#channel 1 messages (nyc)
Message.create!(author_id: u1.id, channel_id: c1.id, body: "the best debugger is a good night's sleep.")
Message.create!(author_id: u2.id, channel_id: c1.id, body: "lol never heard of it")
Message.create!(author_id: u3.id, channel_id: c1.id, body: "ya what package is that?")

#channel2 messages (general)
Message.create!(author_id: u5.id, channel_id: c3.id, body: "what is the sound of one hand clapping")

#channel 3 messages (random)
Message.create!(author_id: u2.id, channel_id: c2.id, body: "party at my place tonight y'all")
Message.create!(author_id: u6.id, channel_id: c2.id, body: "ayyyyy i'll be there!")

#channel 4 messages (slap talk)
Message.create!(author_id: u5.id, channel_id: c4.id, body: "what did the hand say to the face? SLAP!")
Message.create!(author_id: u7.id, channel_id: c4.id, body: "lol good one, high five!")
Message.create!(author_id: u1.id, channel_id: c4.id, body: "Redux was really difficult to grasp at first, but i think we all have a great handle on it now!")


dm1 = Channel.new(name:"dm1", is_dm: true)
dm1.users = [u1, u6, u7]
dm1.save!
#
dm2 = Channel.new(name:"dm2")
dm2.users = [u1, u8, u9]
# dm3 = Channel.new(name:"dm3")
