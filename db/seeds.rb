# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Message.delete_all

u1 = User.create!(username: "a", email: "a", password: "starwars")
demoUser = User.create!(username: "guestUser", email: "guestUser", password: "starwars")
Message.create!(author_id: u1.id, channel_id: 1, body: "hey")
Message.create!(author_id: u1.id, channel_id: 1, body: "hi!")
