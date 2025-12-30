# Movie Archiver

A NestJS application for archiving and managing movie information with support for IMDB links and text-based input.

## Tech Stack

- **NestJS** - TypeScript backend framework
- **Prisma** - ORM for database management
- **PostgreSQL** - Database
- **Docker** - Containerization

## Quick Start

### Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/movie-archiver.git
cd movie-archiver
```

2. Copy the example environment file:
```bash
cp .env_example .env
```

3. Start the application:
```bash
docker compose up -d
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Ingest Movie
```bash
# Text input
curl -X POST http://localhost:3000/ingestion/movie \
     -H "Content-Type: application/json" \
     -d '{"text": "The Matrix"}'

# IMDB link
curl -X POST http://localhost:3000/ingestion/movie \
     -H "Content-Type: application/json" \
     -d '{"text": "https://www.imdb.com/title/tt0133093/"}'
```

## Database Schema

- **Movie** - Stores processed movie information
- **MovieInput** - Tracks raw input submissions (PENDING/PROCESSED/FAILED)

## Environment Variables

See `.env_example` for required configuration:
- `DATABASE_URL` - PostgreSQL connection string
- `APP_PORT` - Application port (default: 3000)
- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` - Database credentials

## Consider supporting and following Nest.js for their awesome tool

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
