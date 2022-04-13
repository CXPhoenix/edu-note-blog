# 20220413 Chap4 note

## Initial Solution

* Trade-off: quality vs. computational time
  * Random solution
  * Heuristic solution (e.g. Greedy)
* Using better inital solutions will **not always** lead to better local optima.
* Hybrid strategy for improving the robustness.
* Generating random solutions may be **difficult** for highly constrained problems.
* Partially or completely initialized by a user (e.g. expert) for real-world application.

## Evalution of the neighborhood

* Evaluation
  * Most expensive part of a metaheuristic.
  * Naive evaluation
    * Direct evaluation of f(s') using objective function f
    * Complete evaluation of each solution in the neighborhood.
  * Incremental evaluation
    * An essential issue in design single solution-based metaheuristics
  * Approximated evaluation
    * Approximate f(s') by calling its surrogates g
    * Trade-off: complexity versus accuracy.

## Acceptance Criterion

* First improvement
  * Replace the current wolution with the first improved solution in neighborhood.
  * Deterministic and partial search.
* Best improvement
  * Replace the current solution with the best solution in neighborhood
  * Deterministic and fully search.
* Random selection
  * Replace the current solution with a random better solution in neighborhood.
  * Stochastic and partial search.

---

## Fitness Landscape

* Given search space G = (S, E) and objective function f, the fitness *landscape* is defined as a tuple l = (G, f)
  * S: set of solutions
  * E: Neightborhood

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-15-53.png)

* S-metaheuristic: trajectory(walk) in the landscape

## Fitness landscape analysis

### connexity

* Connexity of the earch space
  * For any two solutions si and sj (node of G), there should be a path from si to sj.
  * -> For any initial solution si there will be a path from si to the global optimal solution s*.

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-18-52.png)

### distance

* Let d(si, sj) be the distance between solutions si and sj in the search space.
  * Length of shortest path in the graph G: minimum number of application of the move operator to obtain sj from si.
* Properties for distance function d: S X S -> R+

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-24-28.png)

::: warning
公式中的 E 全部改為 S
:::

* Distances in some usual serach spaces.
  * Hamming distance for binary representation
  * #exchange move operator for permutation representation.
* Distance must be coherent to search operators.
  * E.g. difining the distance by using #swap move operator if swap is used ass the search operator.
* Distance calculation may be inapplicable.
  * Computing distance = NP-complete problem or high order polynomial problem.


## Landscape properties

* Use indicators to identify landscape properties
  * E.g. #lcal optima, dist. of local optima, ruggedness, structure of basin of attraction, presence of plateaus, distribution of fitness, ...

### Two types

* Global indicators: information about the structure of the entire landscape.
  * Metaheuristics focus on good solutions (tiny part) -> insufficient to characterize the landscape explored by metaheuristics.
* Local indicators: local view of the landscape as explored by a metaheuristic.

## Distribution measures

* Distribution analysis of local optima projected in:
  * Search (decision) space
  * Objective space

### Distribution in the search space

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-39-31.png)

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-42-18.png)

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-43-09.png)

### Distribution in the objective space

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-46-11.png)

> Amplitude: 震幅
> Relative amplitude: 相對震幅 U --> Uniform, O --> local optimal solution
> Average gap: 區域最佳到全域最佳的平均

## Correlation measures

* Estimate ruggedness of landscape
  * Rough = many local optima = low correlation.
* Correlation indicators:
  * length of the walks

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-50-22.png)

  * Fitness distance correlation

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-50-35.png)

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-51-21.png)


## Analysis through FDS

### Based on the three conjectures

* Straightforward
  Large positive correlation --> fitness decreases as distance decreases --> problem is easy to solve.
* Misleading
  Large negative correlation --> operator guide the search away from optimum --> deception.
* Difficult
  Low correlation --> fitness and distance may be uncorrelated.

## Other measures

* Deception: presence of local opt. attracting the search away from the global one
* Epistasis: Interaction within decision variables
* Multimodality: #local optima
* Neutrality: existence of plateaus


---

## Hill-Climbing Search

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-19-58-47.png)

### Hill-climbing (HC)

* a.k.a greedy local search, descent, iterative improvement
* is a loop that continuously moves in the direction of increasing value
* Chooses the **best** successors, but not look ahead of the immediate neighbors of the current state
  
```psudo
function HILL-CLIMBING(problem) return a state the is a local maximum
    input: problem, a problem
    local variables: current, a node.
                     neighbor, a node.
    current <-- MAKE-NODE(INITIAL-STATE[problem])
    loop do
        neighbor <-- highest valued successor of current
        if VALUE[neighbor] <= VALUE[current] then
            return STATE[current]
        current <-- neighbor
```

## HC: Towards a local optimum

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-20-03-23.png)

### Pros and Cons

* Pros
  * Easy to implement
  * Acceptable time complexity
* Cons
  * It only leads to local optima.
  * the found optima depends on the initial solution.
  * No mean to estimate the relative error from the global optimum.
  * No mean to have an upper bound of the computation time: the worst case is exponential.

* HC often gets stuch since
  * Local maxima
    * A local max. is a peak higher than its neighbors, but lower than global max.
  * Ridge
    * Sequence of local max. that is difficult for greedy algorighms to navigate.
  * Plateaus
    * An area of the state space where the evaluation function is flat.

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-20-08-45.png)

## Hill-Climbing Variations

* Stochastic hill-climbing
  * Random selection among the uphill moves
  * The selection probability can vary with the steepness of the uphill move.
* First-choice hill-climbing
  * ct. Stochastic hill climbing by generating successors randomly until a better one is found.
* Random-restart hill-climbing
  * Conducts a series of HC from randomly generated initial states.
  * Tries to avoid getting stuch in local maxima.

## Example: Hill-Climbing (1)

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-20-16-58.png)

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-20-17-12.png)

## 2-Dimensional packing problem

* Input: A set of n rectangles I = {1, 2, ..., n} characterized by (width, length, ...)
* Output: Coordinates x, y of rectangles. Place all the revtangles on a plan without overlap to minimize the surface used
* Applications: textile, metal, wood, factory layout planning

![](/images/metaheuristic-class-20220413-chap4-note/2022-04-13-20-20-26.png)

