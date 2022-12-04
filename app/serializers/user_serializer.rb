class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile, :priorties, :todos

end
