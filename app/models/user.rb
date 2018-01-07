class User < ApplicationRecord

  validates :username, :password_digest, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :messages,
    foreign_key: "author_id"

  attr_reader :password


  def self.generate_unique_guest_name
    randomNumber = (100...999).to_a.sample
    guestName = "guest#{randomNumber}"
    if User.find_by_username(guestName)
      guestName = generateUniqueGuestName
    end
    return guestName
  end

  def self.create_guest
    guestName = User.generate_unique_guest_name
    User.create(username: guestName, email: guestName, password: 'starwars')
  end

  def self.find_by_params(user, password)
    user = User.find_by(username: user)
    return user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password;
    self.password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
