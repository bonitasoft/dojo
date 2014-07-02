# Game of life Kata-JS

* Jasmine : http://jasmine.github.io/2.0/introduction.html
* Karma : http://karma-runner.github.io/

Implement game of life algorithm using karma and jasmine in a TDD way.

#### Installing environment
```
npm install
```

#### Running tests
```
npm test
```

#### Rules
http://www.codingdojo.org/cgi-bin/index.pl?KataGameOfLife

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

#### Business validation
You can use provided patterns (pattern/pattern.png) to perform business validation of your algorithm.
