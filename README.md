This folder contains the actual folder for the server, to push server modifications to heroku you have to: 

git add .

git commit -m 'ops: whatever'

git push heroku master

git logs -t (will show latest backend logs)