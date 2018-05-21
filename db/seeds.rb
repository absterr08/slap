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
Dm.delete_all

u1 = User.create!(username: "absterr08", email: "absterr08", password: "starwars", img_url: "6")
u2 = User.create!(username: "jRudell22", email: "b", password: "starwars", img_url: "7")
u3 = User.create!(username: "d_Og55", email: "c", password: "starwars", img_url: "4")
u4 = User.create!(username: "leslieKnope", email: "d", password: "starwars", img_url: "5")
u5 = User.create!(username: "bman86", email: "e", password: "starwars", img_url: "3")
u6 = User.create!(username: "sunnyBunny", email: "f", password: "starwars", img_url: "8")
u7 = User.create!(username: "mauricio12", email: "g", password: "starwars", img_url: "9")
u8 = User.create!(username: "monmon", email: "h", password: "starwars", img_url: "10")
u9 = User.create!(username: "daedae", email: "i", password: "starwars", img_url: "11")
u10 = User.create!(username: "luke-in-good", email: "j", password: "starwars", img_url: "12")

c1 = Channel.create!(name: '11-06-2017-nyc', description: 'Welcome to Slap Academy!', user_ids: User.ids)
c2 = Channel.create!(name: 'general', description: 'This channel is for team-wide communication and announcements.', user_ids: User.ids)
c3 = Channel.create!(name: 'random', description: 'A place for non-work-related slap chats.', user_ids: User.ids)
c4 = Channel.create!(name: 'slap-talk', description: 'Hand in your best slap-related puns', user_ids: User.ids)

#channel 1 messages (nyc)
Message.create!(author_id: u1.id, messageable_id: c1.id, messageable_type: "Channel",  body: "the best debugger is a good night's sleep.")
Message.create!(author_id: u2.id, messageable_id: c1.id, messageable_type: "Channel",  body: "lol never heard of it")
Message.create!(author_id: u3.id, messageable_id: c1.id, messageable_type: "Channel",  body: "ya what package is that?")
Message.create!(author_id: u9.id, messageable_id: c1.id, messageable_type: "Channel",  body: "everybody check in!!??")

#channel2 messages (general)
Message.create!(author_id: u5.id, messageable_id: c3.id, messageable_type: "Channel",  body: "what is the sound of one hand clapping")

#channel 3 messages (random)
Message.create!(author_id: u2.id, messageable_id: c3.id, messageable_type: "Channel",  body: "party at my place tonight y'all")
Message.create!(author_id: u6.id, messageable_id: c3.id, messageable_type: "Channel",  body: "ayyyyy i'll be there!")

#channel 4 messages (slap talk)
Message.create!(author_id: u5.id, messageable_id: c4.id, messageable_type: "Channel",  body: "what did the hand say to the face? SLAP!")
Message.create!(author_id: u7.id, messageable_id: c4.id, messageable_type: "Channel",  body: "lol good one, high five!")
Message.create!(author_id: u1.id, messageable_id: c4.id, messageable_type: "Channel",  body: "Redux was really difficult to grasp at first, but i think we all have a great handle on it now!")


dm1 = Dm.create!(name:"dm1", user_ids: [u1.id, u6.id, u7.id])
dm2 = Dm.create!(name:"dm2", user_ids: [u1.id, u10.id])
dm3 = Dm.create!(name:"dm3", user_ids: [u1.id, u8.id, u9.id])

Message.create!(author_id: u1.id, messageable_id: dm1.id, messageable_type: "Dm", body: "sup")
