# BFF (Rails app)

Rails 7 app with documentation and “Fredinator” builder UIs. Uses PostgreSQL and the Rails asset pipeline (SCSS, CoffeeScript).

## Prerequisites

- **Ruby 3.0+** (tested with Ruby 3.4)
- **PostgreSQL** (server running; development DB name and user in `config/database.yml`)
- **Bundler** (e.g. `gem install bundler`)

### Database configuration

Edit `config/database.yml` if needed. Default development setup:

- **Database:** `testDB`
- **Username:** `postgres`
- **Password:** `rainbow123`

Create the database and user in PostgreSQL if they don’t exist.

## Build and run locally

### 1. Install gems

```bash
bundle install
```

**Windows (RubyInstaller):** If `bundle install` fails building the `psych` gem with “yaml.h not found”, install libyaml first. In an elevated or clean terminal (close other MSYS2/Pacman processes), run:

```bash
ridk exec pacman -S mingw-w64-ucrt-x86_64-libyaml
```

Then run `bundle install` again.

### 2. Create and prepare the database

**Development** uses SQLite by default (no PostgreSQL required). Create the DB:

```bash
bundle exec rake db:create
```

To use PostgreSQL instead, edit `config/database.yml` and set the `development` section to use the `postgresql` adapter, then ensure PostgreSQL is running and run `bundle exec rake db:create` again.

### 3. Start the server

```bash
bundle exec rails server
```

Then open **http://localhost:3000**. The root route is the documentation home. Other routes:

- `/documentation/home` — documentation
- `/fredinator/builder` — Fredinator builder

## Running tests

```bash
bundle exec rake test
```

## Notes

- **Grunt / Bootstrap:** The repo includes a `Gruntfile.js` (Bootstrap-style). The app is served by Rails and uses the asset pipeline; you don’t need to run Grunt to run the app.
- This app has been updated from Rails 4.2 to Rails 7 for Ruby 3.4 compatibility.
