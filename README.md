### App Walk-though

<img src="https://imgur.com/4ydKjku" width=400><br>

## To make things go:
- install node, npm, python3, and postgresql. If you're on macOS, I recommend using homebrew (especially for postgres)
- run 'npm install' from /frontend
- follow your system's instructions to start postgres
- run 'createdb unwritten' then 'createuser -d unwritten' then 'psql postgres [YOUR USER] -c "ALTER USER unwritten LOGIN PASSWORD 'password';"' then './migrate.py migrate'
- to start the server, run './runServer.sh' from the main directory and everything should (eventually) come up and work. (Control + C to exit)
