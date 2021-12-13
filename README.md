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
| / | get | render all pieces in database (index)|
| /piece/:id | get | show a specific composition (show)|
| /new | get | render page to add a piece to the database (new)|
| /edit | get | render page to edit information about the music (edit)|

### Backend Routes

| url | method | action |
|-----|--------|--------|
| /music/ | get | show all available pieces in database (index)|
| /music/:id | get | show a specific composition (show)|
| /music/ | post | add piece to database (create)|
| /music/:id | put | API request to edit information about the music (update)|
| /music/:id | delete | delete a composition (delete/destroy)|


## User Stories

A user should be able to:
- Add a musical score
- See the information on that score
- See all scores in the database
- Edit a score's information
- Delete a score from the database

## Challenges

By far the biggest challenge was getting pdfs to display.

At first, it was easy. After all, there'as a fantastic package called **react-pdf** that I was able to install with npm and use for my project. Theoretically, it came as a pre-made component and all I had to do was pass it a file URL as props. Which was great!

Then...I tested it.

I started getting CORS errors. Dreaded, awful, CORS errors.

Needless to say, react-pdf worked like a charm for local files.

At first I thought it was my backend, but after breaking down the errors it turned out that it was a known issue: if the backend that is hosting the pdfs is not set up for handling CORS, then it will always return CORS errors.

After spending a little bit of time on Stack Overflow, I found out that there is an easy fix! A Heroku-deployed proxy site called "cors-anywhere", which is a demo for a package of the same name that acts as a proxy server as well as fixes the CORS header issues if the backend doesn't support CORS requests.

So I added the URL to the link...and got 403 Forbidden. Cool.

I thought I was going to have to put together an AWS bucket and figure out uploading pdfs to a SQL database...not ideal, as the file sizes are quite large and it would significantly increase database load times.

After some time contemplating my navel, I went back to see what the deal was with cors-anywhere. I found out that it was being abused/overused and so it had to get turned into a demo site. You have to click a button and it will white-list you for 50 requests/hr. Sure enough, I opted in and my code worked.

However, that was not a user-friendly experience. Luckily I had the bright-idea to clone his repo (it has an MIT license) and host my own cors-anywhere server on Heroku! And then my app worked like a charm!

## List of Technologies

- Masonite
- Postgres
- React
- react-pdf


## Still To-do

- CSS isn't quite where I want it
- Would like the option to display three pages at a time in order to be more reader-friendly for someone actually trying to look at the piece