### App Design Walk-though

<img src="https://i.imgur.com/rbWpEP0.gif" width=500><br>

## About Saypio:

Our project, Saypio, is a web-based platform that we hope enables the preservation and sharing of unwritten languages across the globe. Using just React.js, HTML/CSS, and SQL for now, the app itself records and stores audio files based on the given pronunciation, and then displays the origin on a digital map. We would potentially expand to documenting and sharing oral narrative stories because one can gain more of a contextual understanding of words and expressions in the form of storytelling. In terms of a long term vision, our main goals are to preserve history, honor tradition, educate the masses, foster community, connect generations, and appreciate cultural significance. 

“Analyzing these patterns is far from an esoteric academic exercise; it has real implications for our lives. The more we understand about how language functions, the better equipped we are to improve our therapies for communication disorders and our methods for language teaching.

This knowledge contributes to technological innovation as well. Research on sound patterns is used in creating speech synthesis software, while models of grammatical structure aid in developing linguistic components for artificial intelligence.

Understanding language in turn gives us a window into cognition. Observations about the strikingly similar ways that children acquire language, across languages and cultures, provide insight into how the brain develops. Psycholinguistic experiments involving language production, comprehension, and recall tasks reveal clues to how the mind organizes information.” (https://www.sapiens.org/language/endangered-languages/).


## To make things go:
- install node, npm, python3, and postgresql. If you're on macOS, I recommend using homebrew (especially for postgres)
- run 'npm install' from /frontend
- follow your system's instructions to start postgres
- run 'createdb unwritten' then 'createuser -d unwritten' then 'psql postgres [YOUR USER] -c "ALTER USER unwritten LOGIN PASSWORD 'password';"' then './migrate.py migrate'
- to start the server, run './runServer.sh' from the main directory and everything should (eventually) come up and work. (Control + C to exit)
