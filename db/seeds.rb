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
u2 = User.create!(username: "b", email: "b", password: "starwars", img_url: "3")
u3 = User.create!(username: "c", email: "c", password: "starwars", img_url: "4")
c1 = Channel.create!(name: 'general', description: 'This channel is for team-wide communication and announcements. All team members are in this channel.')
c2 = Channel.create!(name: 'random', description: 'A place for non-work-related slap chats.')
Message.create!(author_id: u1.id, channel_id: c1.id, body: "hi")
Message.create!(author_id: u2.id, channel_id: c1.id, body: "hello")
Message.create!(author_id: u1.id, channel_id: c2.id, body: "hi random")
Message.create!(author_id: u1.id, channel_id: c2.id, body: ":D random")
ChannelSubscription.create!(user_id: u1.id, channel_id: c1.id)
ChannelSubscription.create!(user_id: u1.id, channel_id: c2.id)
ChannelSubscription.create!(user_id: u2.id, channel_id: c1.id)
ChannelSubscription.create!(user_id: u2.id, channel_id: c2.id)
ChannelSubscription.create!(user_id: u3.id, channel_id: c1.id)
