[![Build Status](https://travis-ci.org/telemark/rambo-stats-collector.svg?branch=master)](https://travis-ci.org/telemark/rambo-stats-collector)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# rambo-stats-collector

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/rambo-stats-collector.svg)](https://greenkeeper.io/)
Collect stats for the RAMBO solution

## Config

docker.env

```bash
CONFIG_FILE_PATH=config/folders.json
FIREBASE_URL=https://seneca-firebase-test.firebaseio.com
```

## Docker

Build

```bash
$ docker build -t rambo-stats-collector .
```

### Usage

```bash
$ docker run --env-file=docker.env --volume=/test/data:/src/test/data --rm rambo-stats-collector
```

or from pre-built image

```bash
$ docker run --env-file=docker.env --volume=/test/data:/src/test/data --rm telemark/rambo-stats-collector
```

- This will start a container. 
- Check for files inn all folders from the config.
- Send status.
- Stop the container and remove it.

## Related

- [rim-vigo-data-pull](https://github.com/telemark/rim-vigo-data-pull) Pulls data from VIGO
- [rim-vigo-saksbehandling](https://github.com/telemark/rim-vigo-saksbehandling) Formats documents for archive
- [rim-laurentius](https://github.com/telemark/rim-laurentius) Archives the formatted data to Public360
- [rim-vigo-update-status](https://github.com/telemark/rim-vigo-update-status) Updates archive status for document

# License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/rambo-stats-collector.png "Robohash image of rambo-stats-collector")