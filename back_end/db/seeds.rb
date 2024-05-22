# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

p "Initiating seeds..."
StickyNote.create(
   note_category: 'Mini-project',
   note_description: 'CRUD on ugly notes'
)
StickyNote.create(
   note_category: 'Project',
   note_description: 'Style Me 3.0'
)
StickyNote.create(
   note_category: 'Study',
   note_description: 'More Algorithms'
)
p "Seeds planted"