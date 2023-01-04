# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# .destroy_all
# .reset_pk_sequence


puts "🌱 Seeding ...."


User.destroy_all
u1 = User.create(username: "user1", password: "123")
u2 = User.create(username: "user2", password: "abc")


Profile.destroy_all
u1p = Profile.create(user_id: u1.id, name: "Jake", email: "jk@yahoo.com", age_group: "18-29", start_day: 7, end_day: 10, bio: "blah blah blah blah blah blah blah blah")
u2p = Profile.create(user_id: u2.id, name: "Jill",email: "jl@gmail.com", age_group: "18-29", start_day: 9, end_day:12, bio: "blah blah blah blah blah blah blah blah")

Habit.destroy_all
u1h1 = Habit.create(profile_id: u1p.id, title: "Shower")
u1h2 = Habit.create(profile_id: u1p.id, title: "Brush Teeth")
u1h3 = Habit.create(profile_id: u1p.id, title: "Meds")

u2h1 = Habit.create(profile_id: u2p.id, title: "Brush Teeth")
u2h2 = Habit.create(profile_id: u2p.id, title: "Water")
u2h3 = Habit.create(profile_id: u2p.id, title: "Shower")


TodoCategory.destroy_all
work = TodoCategory.create(name: "Work")
home = TodoCategory.create(name: "Home")
money = TodoCategory.create(name: "Finance")


Todo.destroy_all
u1td1 = Todo.create(user_id: u1.id, todo_category_id: work.id, title: "Meeting", completed: false)
u1td2 = Todo.create(user_id: u1.id, todo_category_id: home.id, title: "Clean", completed: false)
u1td3 = Todo.create(user_id: u1.id, todo_category_id: money.id, title: "Save", completed: false)

u2td1 = Todo.create(user_id: u2.id, todo_category_id: work.id, title: "Faxing", completed: false)
u2td2 = Todo.create(user_id: u2.id, todo_category_id: home.id, title: "Drink", completed: false)
u2td3 = Todo.create(user_id: u2.id, todo_category_id: money.id, title: "Spend", completed: false)


PriorityLevel.destroy_all
pl1 = PriorityLevel.create(name: "Critical", color: "#FF0000")
pl2 = PriorityLevel.create(name: "Major", color: "#FFA500")
pl3 = PriorityLevel.create(name: "Medium", color: "#FFFF00")
pl4 = PriorityLevel.create(name: "Minor", color: "#008000")


Priority.destroy_all
u1p1 = Priority.create(user_id: u1.id, priority_level_id: pl3.id, title: "Family", comment: "Vaca")
u1p2 = Priority.create(user_id: u1.id, priority_level_id: pl2.id, title: "Work", comment: "Meetings")

u2p1 = Priority.create(user_id: u2.id, priority_level_id: pl4.id, title: "School", comment: "Read")
u2p2 = Priority.create(user_id: u2.id, priority_level_id: pl1.id, title: "Lacrosse", comment: "Work Out")

puts "✅ Done seeding!"