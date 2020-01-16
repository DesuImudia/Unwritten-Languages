## To make things go:
- install node, npm, python3, and postgresql. If you're on macOS, I recommend using homebrew (especially for postgres)
- run 'npm install' from /frontend
- follow your system's instructions to start postgres
- quit out of postgres, and run 'createdb unwritten' then 'createuser -d unwritten' then 'psql postgres [YOUR USER] -c "ALTER USER unwritten LOGIN PASSWORD 'password';"' then './migrate.py migrate'
- to start the server, run './runServer.sh' from the main directory and everything should (eventually) come up and work. (Control + C to exit)

## React-mic and dependencies
- npm install --save react-mic

- Add to .babelrc file, should look like
```{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}```

- Install this
npm install --save-dev @babel/plugin-proposal-class-properties

