# This is "left-pad" benchmark for testing in NodeJS environment
Inspired by http://jsperf.com/leftpad-x/8

## Results
All tests made on Node v4.4.1

```
Benchmarking: leftpad("abacus", 80, " ")
leftpad_orig x 664,850 ops/sec ±0.72% (79 runs sampled) #0.17
leftpad_prejoin x 696,979 ops/sec ±0.86% (85 runs sampled) #0.18
leftpad_modern x 3,907,114 ops/sec ±1.48% (70 runs sampled) #1
leftpad_array x 175,628 ops/sec ±0.71% (82 runs sampled) #0.04
leftpad_binary x 3,590,231 ops/sec ±0.84% (83 runs sampled) #0.92
leftpad_binary_simpler x 3,717,170 ops/sec ±0.84% (82 runs sampled) #0.95

Benchmarking: leftpad("abacus", 40, " ")
leftpad_orig x 1,305,585 ops/sec ±1.04% (78 runs sampled) #0.26
leftpad_prejoin x 1,355,893 ops/sec ±0.66% (83 runs sampled) #0.27
leftpad_modern x 5,047,116 ops/sec ±0.72% (86 runs sampled) #1
leftpad_array x 289,203 ops/sec ±1.07% (83 runs sampled) #0.06
leftpad_binary x 4,507,170 ops/sec ±0.99% (82 runs sampled) #0.89
leftpad_binary_simpler x 4,689,453 ops/sec ±0.97% (84 runs sampled) #0.93

Benchmarking: leftpad("abacus", 20, " ")
leftpad_orig x 2,440,531 ops/sec ±0.68% (81 runs sampled) #0.46
leftpad_prejoin x 2,493,687 ops/sec ±1.10% (80 runs sampled) #0.47
leftpad_modern x 5,257,101 ops/sec ±0.91% (78 runs sampled) #1
leftpad_array x 461,731 ops/sec ±1.09% (86 runs sampled) #0.09
leftpad_binary x 4,700,457 ops/sec ±0.73% (80 runs sampled) #0.89
leftpad_binary_simpler x 4,889,850 ops/sec ±0.90% (87 runs sampled) #0.93

Benchmarking: leftpad("abacus", 10, " ")
leftpad_orig x 5,181,771 ops/sec ±1.04% (78 runs sampled) #0.53
leftpad_prejoin x 9,740,371 ops/sec ±1.10% (74 runs sampled) #1
leftpad_modern x 8,873,918 ops/sec ±0.78% (80 runs sampled) #0.91
leftpad_array x 632,403 ops/sec ±1.18% (82 runs sampled) #0.06
leftpad_binary x 8,891,816 ops/sec ±1.16% (79 runs sampled) #0.91
leftpad_binary_simpler x 7,026,157 ops/sec ±0.93% (84 runs sampled) #0.72

Benchmarking: leftpad("abacus", 5, " ")
leftpad_orig x 20,713,478 ops/sec ±0.70% (83 runs sampled) #0.63
leftpad_prejoin x 21,881,417 ops/sec ±0.57% (85 runs sampled) #0.66
leftpad_modern x 32,968,867 ops/sec ±2.18% (79 runs sampled) #1
leftpad_array x 803,985 ops/sec ±0.87% (86 runs sampled) #0.02
leftpad_binary x 23,123,186 ops/sec ±1.45% (83 runs sampled) #0.7
leftpad_binary_simpler x 22,626,736 ops/sec ±1.42% (82 runs sampled) #0.69
```

Notice that `leftpad("abacus", 5, " ")` is adding zero spaces, since `"abacus".length > 5`
