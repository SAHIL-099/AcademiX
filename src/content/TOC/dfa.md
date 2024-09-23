# Deterministic Finite Automata (DFA)

## Introduction

A **Deterministic Finite Automaton (DFA)** is a theoretical model of computation used to recognize patterns within input strings. It is characterized by having a finite number of states and transitions, where each state has exactly one transition for each symbol in the input alphabet.

---

## Components of DFA

A DFA can be formally defined by a 5-tuple:

\[ DFA = (Q, \Sigma, \delta, q_0, F) \]

Where:

1. **\( Q \)**: A finite set of states.
2. **\( \Sigma \)**: A finite input alphabet (a set of symbols).
3. **\( \delta \)**: A transition function \( \delta: Q \times \Sigma \rightarrow Q \) that defines state transitions based on input symbols.
4. **\( q_0 \)**: The initial state, where \( q_0 \in Q \).
5. **\( F \)**: A set of accepting (final) states, where \( F \subseteq Q \).

---

## Working of a DFA

1. **Start State**: The DFA begins at the initial state \( q_0 \).
2. **Input Processing**: The DFA reads the input string symbol by symbol.
3. **State Transition**: For each symbol, the DFA moves to the next state according to the transition function \( \delta \).
4. **Acceptance**: If, after processing the entire input string, the DFA ends in an accepting state (one of the states in \( F \)), the input is accepted. Otherwise, it is rejected.

---

## Example of DFA

### Example 1: DFA for Even Number of Zeros

Consider a DFA that accepts strings over the alphabet \( \Sigma = \{0, 1\} \) with an even number of `0`s.

- **States**: \( Q = \{q_0, q_1\} \) (where \( q_0 \) is the start state)
- **Alphabet**: \( \Sigma = \{0, 1\} \)
- **Transition Function**:
  - \( \delta(q_0, 0) = q_1 \)
  - \( \delta(q_0, 1) = q_0 \)
  - \( \delta(q_1, 0) = q_0 \)
  - \( \delta(q_1, 1) = q_1 \)
- **Accepting States**: \( F = \{q_0\} \)

### Accepted Strings
- Strings like `ε`, `11`, `00`, `010`, `101010` will be accepted.
- Strings like `0`, `001`, `100` will be rejected.

---

## Properties of DFA

- **Determinism**: For each state and input symbol, there is exactly one transition. This makes DFAs easier to implement.
- **Closure Properties**: DFAs are closed under operations such as union, intersection, and complementation.

---

## Conclusion

Deterministic Finite Automata (DFA) are a foundational concept in automata theory, providing a simple yet powerful way to model computation and recognize regular languages. Understanding DFAs is essential for applications in compiler design, text processing, and formal language theory.
