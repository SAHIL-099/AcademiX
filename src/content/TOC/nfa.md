# Non-Deterministic Finite Automata (NFA)

## Introduction

A **Non-Deterministic Finite Automaton (NFA)** is a theoretical model of computation used to recognize patterns in input strings. Unlike a Deterministic Finite Automaton (DFA), an NFA can have multiple transitions for the same input symbol and may include transitions that do not consume any input (epsilon transitions).

---

## Components of NFA

An NFA can be formally defined by a 5-tuple:

\[ NFA = (Q, \Sigma, \delta, q_0, F) \]

Where:

1. **\( Q \)**: A finite set of states.
2. **\( \Sigma \)**: A finite input alphabet (a set of symbols).
3. **\( \delta \)**: A transition function \( \delta: Q \times \Sigma \rightarrow 2^Q \) that defines state transitions. This means that for each state and input symbol, the transition function can return a set of states.
4. **\( q_0 \)**: The initial state, where \( q_0 \in Q \).
5. **\( F \)**: A set of accepting (final) states, where \( F \subseteq Q \).

---

## Working of an NFA

1. **Start State**: The NFA begins at the initial state \( q_0 \).
2. **Input Processing**: The NFA reads the input string symbol by symbol.
3. **State Transition**: For each symbol, the NFA may transition to multiple possible next states as defined by the transition function \( \delta \).
4. **Epsilon Transitions**: An NFA can transition to a new state without consuming an input symbol. This is useful for allowing more flexible state movements.
5. **Acceptance**: If there exists at least one path that leads to an accepting state after processing the entire input string, the input is accepted. If no such path exists, it is rejected.

---

## Example of NFA

### Example 1: NFA for the Language of Strings Containing `ab`

Consider an NFA that accepts strings over the alphabet \( \Sigma = \{a, b\} \) that contain the substring `ab`.

- **States**: \( Q = \{q_0, q_1, q_2\} \) (where \( q_0 \) is the start state)
- **Alphabet**: \( \Sigma = \{a, b\} \)
- **Transition Function**:
  - \( \delta(q_0, a) = \{q_1\} \)
  - \( \delta(q_1, b) = \{q_2\} \)
  - \( \delta(q_0, b) = \{q_0\} \)
  - \( \delta(q_1, a) = \{q_1\} \)
  - \( \delta(q_2, a) = \{q_2\} \)
  - \( \delta(q_2, b) = \{q_2\} \)
- **Accepting States**: \( F = \{q_2\} \)


### Accepted Strings
- Strings like `ab`, `aab`, `abab`, `babab` will be accepted.
- Strings like `aa`, `bb`, `ba` will be rejected.

---

## Properties of NFA

- **Non-Determinism**: An NFA can choose from multiple transitions for the same input symbol, allowing for more flexibility than a DFA.
- **Epsilon Transitions**: NFAs can have transitions that do not consume input, making them more powerful in expressing certain languages.
- **Equivalence to DFA**: Every NFA can be converted to an equivalent DFA that recognizes the same language.

---

## Conclusion

Non-Deterministic Finite Automata (NFA) provide a powerful model for recognizing patterns in strings and understanding regular languages. While they allow for greater flexibility than DFAs, both models are equally expressive in terms of the languages they can recognize.


