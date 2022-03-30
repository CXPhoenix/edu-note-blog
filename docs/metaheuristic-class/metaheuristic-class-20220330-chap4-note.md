# 20220330 Chap 4 note

## Problem Solving as Optimization

### Optimization problem

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-20-23-26.png)

The aim is to find the best state according to an objective function

* State space landscape\
    Very useful for understanding local search and the problem

## Single solution-based metaheuristics

------

::: warning WARNING 4 ME
中間設定 vuepress 錯過了...
:::

------

### Features of local search

* Advantages
  * Use very little memory
  * Find often reasonable solutions in large or infinite state spaces
  * Guarantee of local optimality in little computational time
* Disadvantages
  * No guarantee of global optima
  * Poor quality of solution due to getting stuck in poor local optima

## Neighborhoods

* Neighborhood.\
    A neighborhood function N is a mapping N:S -> 2^S (power set) that assigns to each solution s of S a set of solutions N(s) belongs to S.
  * A solutions s-prime is a neighbor of s iff s-prime is in N(s)
  * defined by a move operator
* locality
  * The effect on the solution (phenotype) when performing a **move** (small perturbation) to the representation (genotype)
  * **Strong locality**: small changes on representation -> small changes on solution\
        讓我們一點點一點點的修改，試圖接近最佳解。
  * Weak locality may lead to random search\
        但是這樣也讓我們的測試更像是隨機搜尋 (因為每一個解跟最佳解的相關性較小)
![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-20-52-38.png)

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-20-54-40.png)

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-20-59-05.png)

### Local Optimum

根據鄰居來找到區域最佳。

取決於 Neighborhood function 的 scale 來決定。

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-21-04-10.png)

## Permutation Neighborhoods

### Position-based neighborhoods

* Insertion

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-21-08-44.png)

### Order-based neighborhoods

* Swap

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-21-09-06.png)

* Scramble

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-21-09-36.png)

* Inversion

![](/images/metaheuristic-class-20220330-chap4-note/2022-03-30-21-09-45.png)

::: tip 投影片截圖的原因
因為太多數學式，所以截圖比較快

還有老師講超快...
:::