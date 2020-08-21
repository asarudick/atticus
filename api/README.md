# RESTful API
## Usage

`npm i json-server -g` to install the server
`json-server --watch api/db.json --port 3001` to start the RESTful API

MVP:

/tracks/:id                 (GET)
/artists/:id                (GET)
/albums/:id                 (GET)

Future: 

/albums/:id/tracks/         (GET)
/albums/:id/tracks/:id      (GET)

/artists/:id/albums         (GET)
/artists/:id/albums/:id     (GET)

/playlists/:id              (GET, POST, PATCH)
