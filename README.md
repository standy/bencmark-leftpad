# This is "left-pad" benchmark for testing in NodeJS environment
Inspired by http://jsperf.com/leftpad-x/8

## Results
All tests made on Node v4.4.1

```
Benchmarking: leftpad("abacus", 80, " ")
leftpad_orig x 666,085 ops/sec ±0.71% (79 runs sampled) #0.18
leftpad_prejoin x 696,347 ops/sec ±0.76% (85 runs sampled) #0.19
leftpad_modern x 3,746,478 ops/sec ±1.34% (76 runs sampled) #1
leftpad_array x 186,906 ops/sec ±1.03% (81 runs sampled) #0.05
leftpad_binary x 3,536,465 ops/sec ±0.58% (85 runs sampled) #0.94
leftpad_binary_simpler x 3,471,759 ops/sec ±0.93% (84 runs sampled) #0.93

Benchmarking: leftpad("abacus", 40, " ")
leftpad_orig x 1,280,002 ops/sec ±0.93% (87 runs sampled) #0.27
leftpad_prejoin x 1,315,532 ops/sec ±0.90% (85 runs sampled) #0.28
leftpad_modern x 4,728,354 ops/sec ±0.99% (80 runs sampled) #1
leftpad_array x 326,667 ops/sec ±0.74% (85 runs sampled) #0.07
leftpad_binary x 4,397,601 ops/sec ±0.88% (82 runs sampled) #0.93
leftpad_binary_simpler x 4,517,995 ops/sec ±1.25% (78 runs sampled) #0.96

Benchmarking: leftpad("abacus", 20, " ")
leftpad_orig x 2,415,707 ops/sec ±0.64% (83 runs sampled) #0.49
leftpad_prejoin x 2,450,276 ops/sec ±0.67% (83 runs sampled) #0.5
leftpad_modern x 4,894,838 ops/sec ±0.88% (82 runs sampled) #1
leftpad_array x 542,769 ops/sec ±1.04% (82 runs sampled) #0.11
leftpad_binary x 4,573,582 ops/sec ±1.02% (84 runs sampled) #0.93
leftpad_binary_simpler x 4,570,683 ops/sec ±0.72% (83 runs sampled) #0.93

Benchmarking: leftpad("abacus", 10, " ")
leftpad_orig x 5,212,208 ops/sec ±0.91% (83 runs sampled) #0.62
leftpad_prejoin x 7,929,599 ops/sec ±1.03% (74 runs sampled) #0.94
leftpad_modern x 8,003,066 ops/sec ±1.24% (76 runs sampled) #0.95
leftpad_array x 852,328 ops/sec ±1.08% (77 runs sampled) #0.1
leftpad_binary x 8,393,980 ops/sec ±1.15% (82 runs sampled) #1
leftpad_binary_simpler x 6,524,831 ops/sec ±1.05% (80 runs sampled) #0.78

Benchmarking: leftpad("abacus", 5, " ")
leftpad_orig x 21,256,940 ops/sec ±0.93% (81 runs sampled) #0.88
leftpad_prejoin x 22,394,513 ops/sec ±0.58% (80 runs sampled) #0.93
leftpad_modern x 24,139,718 ops/sec ±1.04% (77 runs sampled) #1
leftpad_array x 23,860,874 ops/sec ±1.20% (81 runs sampled) #0.99
leftpad_binary x 24,011,065 ops/sec ±1.08% (83 runs sampled) #0.99
leftpad_binary_simpler x 24,088,471 ops/sec ±1.04% (75 runs sampled) #1
```

Notice that `leftpad("abacus", 5, " ")` is adding zero spaces, since `"abacus".length > 5`
