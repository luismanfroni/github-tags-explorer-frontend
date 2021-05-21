# Github Tags Explorer - frontend

## Description

Create and filter Github repositories by tags.

This repo is the frontend part of the project, to run the backend you will need https://github.com/luismanfroni/github-tags-explorer-backend.

## Configuration

### Backend

This application to fully work needs the [backend part](https://github.com/luismanfroni/github-tags-explorer-backend), otherwise it can't retrieve API data and store tags in the database.

When trying to log-in, user will be redirected to backend auth url, the base backend url is configured at `NEXT_PUBLIC_BASE_API_URL` in the `.env.local` file.

## Installation

### Requisites

- NodeJS is a requisite on running the application.
- I used yarn as package manager, but you can use NPM if you want to.

### Installing dependencies with Yarn

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn dev

# production build
$ yarn build
```
