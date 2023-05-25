# 🎬 MovieTrends!

This quick application shows **trending movie and TV shows** as provided by The Movie Database (TMDB).

## Configuration Options

Can be set in either `.env` or `App/index.tsx`

| Option        | Default Value | Description                                                                                               |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `GRID_SCROLL` | `false`       | Toggles simple 2D grid scrolling on rails vs. retaining your horizontal position per row                  |
| `WRAP_SCROLL` | `false`       | Toggles wrap-around scrolling (both horizontal + vertical) versus a hard stop at the end of a row or page |

## Running the App

To run, simply execute `yarn && yarn start` and open `http://localhost:3000` in your web browser.

From there, simply use the arrow keys to select a movie or TV show of your liking.

You can click or select with `ENTER` or `SPACE` to view details about a given movie / TV show in a new window.

## Building

Building works with `yarn build`.
