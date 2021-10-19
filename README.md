# Greehill frontend tesztfeladat

## Telepítés

`npm i`

## Futtatás lokális környezetben

`npm run dev`

## Build és deploy

`npm run build -- --env root=https://greehill.com/tesztfeladat/`

Ez a futtatáshoz szükséges összes fájlt a dist-be teszi, ami aztán mehet fel a root-ban megadott útvonal alá.
Ha a `-- --env root=...` nincs megadva, akkor a fájlok relatív útvonallal lesznek bekötve.

## Tesztelés

`npm run test:unit` - lefuttatja a teszteket egyszer

`npm run test:unit:watch` - futtatja a teszteket minden src és test mappán belüli módosításnál

## Game of Life definíciója

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
