# 20220330 Chap 3 note

## ＊ Constraint Handling

### Not trivial to deal with constraints

* Reject strategies
* Penalizing strategies
* Repairing strategies
* Decoding strategies
* Preserving strategies

## ＊ Parameter Tuning

### May parameters have to be tunied for any metaheuristics.

![](/images/metaheuristic-class-20220330-note/2022-03-30-19-08-44.png)

## ＊ Off-line Parameter Initialization

### Parameters include

* Numerical values
* Search operators
* ...

### Sequential optimization

* Parameters are tuned one-by-one
* No interaction is considered
* No guarantee of optimal setting
  
> But this hypothesis is wrong...

### Experimental Design

* Define
  * Factors
  * Levels
* Consider n factors in which each factor has k levels
  * Full factorial desigin = n^k experiments
  * Can be reduced by some designs, e.g. Latin hypercube designs, sequential design, or fractional design

### Meta-optimization

> When metaheuristic can't decide the factors and levels, we can use the meta-metaheuristic algorithm...

![](/images/metaheuristic-class-20220330-note/2022-03-30-19-16-59.png)


## ＊ Online Parameter Initialization

### Drawbacks of off-line approaches

* High computational cost
* Effectiveness changes over the search

### Online approaches include

* **Dynamic** update\
    e.g. random or deterministic update
* **Adaptive** update\
    This is performed using the memory of the search.\
    We can consider it like the feedback from usage situations.
* **self-adaptive** update\
    在同一個 level 同時進行 parameter 最佳化。也就是說把 parameter 當作是我們要最佳化的結果之一。\
    self-adaptive 在使用上比較沒有這麼即時

## ＊ Performance Analysis of Metaheuristics

### The following therr steps must be considered

* Experimental design
  * Random instances may be controversial
* Measurements
  * Compare to the state-of-the-art method
* Reporting in a comprehensive way
  * Ensure the reproducibility
  
![](/images/metaheuristic-class-20220330-note/2022-03-30-19-30-30.png)


### Experimental design

Goals must be clearly defined with defferent criteria

* Search time
* Quality of solution
* Robustness over instances
* Scalability\
    你解決問題的領域範圍。
* Ease of use/integration\
    like KISS (keep simple as stupid) principle
* Flexibility
* Outline the contribution of a new search component\
    一定要根據新加入的東西逐一分析

The selection of the input instances to perform the evaluation must be carefully done, either

* Real-life instances
  * Confidential, proprietary, not public
  * Financial reasons
  * Time consuming
* Constructed instances
  * Many public libraries of "standard" instances are available on the Internet.
  * Synthetic instances (人工合成的 banch mark)
    * Preserve the structure of real-life instances
    * Too far from real-life problems

The set of instances must be diverse in terms of the size of the instances, their difficulties, and their structure.
* Tune parameters on one set of instances, and measure the performance on the other set of instances
* Use a single set of parameter values
  * Except for automatic off-line (time included), or online initialization strategy.
  

### Measurement

Select the performance measures and indicators. Common performance measures include.

![](/images/metaheuristic-class-20220330-note/2022-03-30-19-57-46.png)

* Solution quality\
    Difference to ...
  * global optimal\
    > hit rate
  * bound
  * best known
  * actual
* Computational effort
  * Theoretical (asymptotic) analysis
  * Empirical analysis in terms of
    * Computational time (hardware dependent)
    * number of evaluations (asssume to be of major influence)
* Robustness
  * No commonly acceptable definition
  * Ingeral, insensitivity against small deviations in
    * input instances
    * parameters

Apply statistical analysis

* Estimate the confidence of the results (scientifically valid)
* select statistical hypothesis testing tool according
* to the characteristics of the data, e.g.
  * Students t-test (under normality condition)
  * Wicoxon rank sum test (otherwise)


### Reporting

The interpretation of the results must be explicit and driven using considered measures

Use of tables is insufficient -> Need visualization tools, e.g.

* Interaction plots\
    ![](/images/metaheuristic-class-20220330-note/2022-03-30-20-10-05.png)
* Trade-off scatter plots / anytime behavior
    ![](/images/metaheuristic-class-20220330-note/2022-03-30-20-10-26.png)
* Deviation bars or boxplot\
    ![](/images/metaheuristic-class-20220330-note/2022-03-30-20-10-52.png)


## **Chap 3 end**



