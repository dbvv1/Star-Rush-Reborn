# Coastal content-set candidate

Read [the production brief](../../docs/content-production.md) for style, inventory, budgets, integration and unverified stages.

- `sources.json`: official archives and individual pinned-input identities (Nature/license normalization recorded); licenses under `source/`.
- `recipe.json` / `recipe-warm.json`: baseline and whole-set color revision.
- `build.py`: source validation, metric normalization, color baking, slope generation and aligned GLB export.
- `adapter.mjs`: candidate-only Star stride-10 Mesh consumer and procedural car/spline contracts; not imported by the game.
- `outputs/{base,warm}/`: four actual models, fixed hashes/metrics and official validator reports.
- `tests/`: real-source rebuild, failure paths, Three loader and unchanged Star CPU geometry consumers.
- `preview.py`: optional CPU geometric inventory, not a gameplay/lighting renderer.

Run the commands in the production brief from this directory. Source files and recipe parameters are the editable inputs; do not edit output GLBs directly. No source hash is silently accepted after drift.
