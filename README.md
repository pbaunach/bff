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

## Deploying to GitHub Pages

GitHub Pages only serves static files (no Rails server). You can export this app to a static site and push the result to a branch or repo that GitHub Pages serves.

### 1. Export the static site

From the project root:

```bash
# Optional: use production so asset filenames are digested and cacheable
set RAILS_ENV=production   # Windows
# export RAILS_ENV=production   # macOS/Linux

# If your site will be at https://username.github.io/portfolio/ (project site), set BASE_PATH:
set BASE_PATH=portfolio    # Windows
# export BASE_PATH=portfolio    # macOS/Linux

bundle exec rake static:export
```

This writes the site into the **`build/`** directory (HTML, assets, favicon).

### 2. Publish to GitHub Pages

**Option A – Same repo, `gh-pages` branch**

```bash
# After rake static:export, push the contents of build/ to gh-pages
cd build
git init
git add -A
git commit -m "Static export for GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git   # or use existing remote
git push -f origin gh-pages
cd ..
```

Or use a separate clone and copy `build/` into it, then push that repo’s `main` (or `gh-pages`) branch. In the repo **Settings → Pages**, set the branch and folder that contain the built files.

**Option B – Push `build/` into a repo that serves as your Pages site**

If your Pages site is the repo **portfolio** at `pbaunach.github.io/portfolio`:

1. Run the export with `BASE_PATH=portfolio` (as above).
2. Clone that repo (or add it as a remote), copy the *contents* of `build/` into the repo root (or into the folder that Pages uses).
3. Commit and push.

**Option C – Use the repo that serves your user site**

If you use **pbaunach.github.io** (repo name `pbaunach.github.io`):

1. Run the export *without* `BASE_PATH` so the site is built for the root URL.
2. Copy the contents of `build/` into the root of that repo (or the branch/folder you use for Pages).
3. Commit and push.

After the first deploy, the site will be at the URL configured for that repo (e.g. `https://pbaunach.github.io/portfolio`).

## Notes

- **Grunt / Bootstrap:** The repo includes a `Gruntfile.js` (Bootstrap-style). The app is served by Rails and uses the asset pipeline; you don’t need to run Grunt to run the app.
- This app has been updated from Rails 4.2 to Rails 7 for Ruby 3.4 compatibility.
