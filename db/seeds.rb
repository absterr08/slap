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

u1 = User.create!(username: "a", email: "a", password: "starwars")
u2 = User.create!(username: "b", email: "b", password: "starwars")
Message.create!(author_id: u1.id, channel_id: 1, body: "hey")
Message.create!(author_id: u1.id, channel_id: 1, body: "hi!")
c1 = Channel.create!(name: 'channel1', description: 'first channel')
c2 = Channel.create!(name: 'channel2', description: 'second channel')
ChannelSubscription.create!(user_id: u1.id, channel_id: c1.id)
ChannelSubscription.create!(user_id: u1.id, channel_id: c2.id)
ChannelSubscription.create!(user_id: u2.id, channel_id: c1.id)
