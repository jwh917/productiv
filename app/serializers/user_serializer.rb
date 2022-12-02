class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile, :priorties, :todos
end
