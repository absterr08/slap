class User < ApplicationRecord

  validates :username, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :messages,
    foreign_key: "author_id"

  attr_reader :password

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
