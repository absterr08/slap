# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180915172316) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_subscriptions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_subscriptions_on_channel_id"
    t.index ["user_id"], name: "index_channel_subscriptions_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_private"
    t.index ["name"], name: "index_channels_on_name"
  end

  create_table "dm_subscriptions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "dm_id", null: false
    t.boolean "active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dm_id"], name: "index_dm_subscriptions_on_dm_id"
    t.index ["user_id"], name: "index_dm_subscriptions_on_user_id"
  end

  create_table "dms", force: :cascade do |t|
    t.string "name", null: false
    t.string "identifier", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["identifier"], name: "index_dms_on_identifier"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "messageable_id", null: false
    t.integer "parent_message_id"
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "messageable_type"
    t.index ["author_id"], name: "index_messages_on_author_id"
    t.index ["messageable_id"], name: "index_messages_on_messageable_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "img_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
