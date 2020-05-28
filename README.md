# CS-Build-Week-1

[Play it here](https://gameoflife.trevorjmartin.com/)

Conway's Game of Life.

single page application.

- built with nodejs & create-react-app

---

## the rules

_survival_

- If the cell is alive and has 2 or 3 neighbors,
- then it remains alive. Else it dies.

_birth_

- If the cell is dead and has exactly 3 neighbors,
- then it comes to life. Else it remains dead.

_social-distancing_

- over-population: occurs with more than 3 neighbors.
- starvation: occurs with less than 2 neighbors.
