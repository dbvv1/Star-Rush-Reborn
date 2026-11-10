# Coastal car standard

Kenney Car Kit 3.1, CC0 (license alongside). Source and reproducible warm
recipe: `ab2655930996b9d81f5fb35469669c72b7be28e1`,
`asset-pipeline/content-set/outputs/warm/car.glb`.
SHA-256: `b37aa1eb23a88bf870ff2ad9674d85487ef7d9bb58cacc8c840a694cc1e26266`.

The existing coast-space candidate consumes the five locked parts (body,
four wheels), retaining source geometry and the adapter's steering/spin/body
pose contract. No new switch, collision change, simulation change or default
replacement. Other tracks and failed initialization retain the original car.
Browser loading, hardware fixed-camera appearance and independent visual
acceptance remain required. CPU tests do not establish content coverage.

Garage colors use the GLB's explicitly named `paint` material, not a guessed
RGB range. The baseline mint selection retains the warm recipe palette;
other garage selections recolor only those vertices. Glass and rubber retain
their source colors. The old car's coloring path is unchanged.
