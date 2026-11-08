# Clover Planner

Turn a syllabus into a realistic day-by-day study plan. Add your subjects, topics, labs and exam dates, and Clover makes the plan for you. It mixes subjects every day, puts practice after theory, and adds weekly catch-up days and final revision. You can edit everything afterwards.

- Make as many planners as you want. Everything is saved in your own browser, so every visitor has their own planners.
- Tick tasks off, filter by subject, drag tasks to another day, and edit, add or delete tasks.
- **Share**: makes a link that gives a friend their own copy of your plan (your ticks aren't shared).
- **Backup**: downloads a file you can open on another device with "Open a backup file".

It's a plain static website (HTML, CSS and JavaScript), so there's nothing to install and no build step.

## Put it online (Vercel)
1. Go to https://vercel.com/new and sign in with GitHub.
2. Find **clover-planner** in the list and click **Import**.
3. Leave every setting as it is and click **Deploy**.
4. Vercel will redeploy by itself every time this repo changes.

## Run it on your computer
Open a terminal in this folder and run `python3 -m http.server 8080`, then open http://localhost:8080. (Double-clicking `index.html` won't work, because browsers block JavaScript modules on `file://` pages.)

## Where things live
- `js/generate.js`: how plans are made (balancing subjects, catch-up days, revision, days between exams).
- `js/app.js`: the pages (home, setup, plan, shared link).
- `js/example.js`: the example planner a new visitor sees first.
- `css/style.css`: colours and layout. Change the `:root` colours at the top to restyle the whole site.
- `assets/`: artwork and icons.
