# Image folders

Drop real photographs into the matching folder using the exact
filenames referenced in /src/lib/data/*.ts (or update the `src` path
in the data file to match your filename). Until a real file exists
at a given path, the site shows a tasteful placeholder automatically
— nothing breaks and no component needs to change.

- /school        — hero, about, wide campus shots, OG cover image
- /campus        — facilities: classrooms, labs, library, sports, etc.
- /academics     — one photo per academic stage
- /events        — event cover + gallery images
- /achievements  — one photo per achievement
- /student-life  — sports, arts, clubs, service
- /faculty       — staff portraits
- /gallery       — general gallery photos by category
- /news          — news/announcement thumbnails

Recommended: WebP or AVIF, consistent aspect ratios per section,
under ~300KB each.
