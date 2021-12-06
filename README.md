# Sheet Music App
#### By Donovan Gallaway

## Project Summary

![Sheet Music](https://st.depositphotos.com/1000128/2314/i/600/depositphotos_23145976-stock-photo-sheet-music.jpg)

I decided to go simple for this project. I'm going to do a sheet-music database app.

The idea is that the backend will store information about the piece and a link to a URL with the sheet music. If I get really spicy, I'll also display the sheet music on site. Otherwise, it will simply display the information and a link.

With time, I might add user auth to store favorites or do something like custom sorts, but MVP is pretty straightforward.

## Models

Should be one CRUD model:

- Name of Piece: (String)
- Instrumentation: (String)
- File Link: (String)

More details might be added, but this is plenty to start.

## Route Table

### Frontend Routes

| url | method | action |
|-----|--------|--------|
| /music/ | get | render all pieces in database (index)|
| /music/:id | get | show a specific composition (show)|
| /music/new | get | render page to add a piece to the database (new)|
| /music/:id/edit | get | render page to edit information about the music (edit)|

### Backend Routes

| url | method | action |
|-----|--------|--------|
| /music/ | get | show all available pieces in database (index)|
| /music/:id | get | show a specific composition (show)|
| /music/ | post | add piece to database (create)|
| /music/edit/:id | get | API request to edit information about the music (update)|
| /music/:id | delete | delete a composition (delete/destroy)|


## User Stories

A user should be able to:
- Add a musical score
- See the information on that score
- See all scores in the database
- Edit a score's information
- Delete a score from the database

## Challenges

None yet!

## List of Technologies

- Masonite
- Postgres
- React