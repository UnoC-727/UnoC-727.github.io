# LensErase project page

Project website for **LensErase: A Foundation Model for Erase Anything**.

The page displays the final qualitative examples retained in the paper appendix:

1. Seven featured animations drawn from the teaser and poster examples, followed by 33 standalone examples. The two sections do not repeat cases. Seventeen standalone examples also appear in the model-comparison sections below.
2. 21 comparisons with GPT-Image 2.5 and Flux2-Erase.
3. 22 comparisons with open-source removal models.

The commercial comparison order is Input, Mask, GPT-Image 2.5, Flux2-Erase, LensErase. The open-source comparison includes OSOR, OmniPaint, ObjectClear, GeoRemover, and RORem-mixed.

## Local preview

```bash
python -m http.server 8765 --bind 0.0.0.0
```

Open <http://localhost:8765/>. The site uses plain HTML, CSS, and JavaScript; no build step or server framework is required. Fonts are self-hosted. Use a local HTTP server for the most reliable browser preview.

## Interactions

- Each featured case animates in one frame: original image → red mask contour → LensErase output.
- The contour is traced from the existing binary mask; the output is the existing approved result.
- Replay or pause the featured animation and switch among seven highlighted cases.
- Click an animation to open static original, binary mask, and output views together.
- Inspect the selection overlay or each image individually, with zoom and pan.
- Filter the galleries by category and choose a single open-source baseline for larger comparisons.
- Keyboard controls support tabs and dialogs. Reduced-motion preferences show a static result by default; Replay explicitly starts the featured animation.
- Offscreen and background animations pause, as do all animations while the image viewer is open.

The standalone gallery initially shows 12 cases, without per-case captions. All retained examples are available through the gallery filters and “Show all” buttons. Derived color-image previews use JPEG quality 95; native larger-view appendix assets are preserved when their dimensions fit the web size limit. Masks use lossless PNG. The teaser results use the already approved fused outputs; existing appendix model-output assets remain unchanged.

## Page sections

The page includes the full author and affiliation list; featured results; a standalone gallery; concise Data and LensErase-Bench sections; GPT-Image 2.5 / Flux2-Erase comparisons; and comparisons with open-source object-removal models. Dataset counts and benchmark definitions follow the current formal manuscript. Equal contribution, corresponding authors, and the project lead are marked as supplied by the authors.

## Publication

The publication target is <https://unoc-727.github.io/LensErase/>, hosted from the `LensErase/` directory of `UnoC-727/UnoC-727.github.io`. The site uses relative paths. The central Code and Paper buttons remain marked coming soon until those resources are released; the header GitHub link opens the author's profile.

Only assets referenced by the current gallery, together with site files, fonts, font licenses, and logo files, are included in the published directory.

Logo: an aperture lens and a teal eraser with a coral tip, redrawn from the supplied reference, provided as an editable SVG at `assets/logo-mark.svg` (symbol) and `assets/logo-lockup.svg` (full wordmark), and used in the page header, title, footer, and favicon.

Fonts: Instrument Sans for headings and Inter for text, self-hosted under the SIL Open Font License. Licenses are included in `assets/fonts/instrumentsans-OFL.txt` and `assets/fonts/inter-OFL.txt`.

Animation outlines and Selection overlays use simplified display masks where appropriate: retained poster text is given clear margins, line-art selections use broad outlines, and minute isolated mask specks are filtered. The original binary masks and all model outputs remain available unchanged.
