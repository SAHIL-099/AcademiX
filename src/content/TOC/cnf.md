# Chomsky Normal Form (CNF)

## Introduction

Chomsky Normal Form (CNF) is a standard form for context-free grammars (CFGs) used in formal language theory. A grammar is in CNF if all its production rules adhere to specific structural constraints, which facilitate parsing and algorithmic processing of languages.

## Definition

A context-free grammar is in **Chomsky Normal Form** if all its production rules are of the following types:

1. **Binary Productions**: \( A \rightarrow BC \)
   - Where \( A \) is a non-terminal, and \( B \) and \( C \) are non-terminals (neither \( B \) nor \( C \) can be the start symbol).
   
2. **Terminal Productions**: \( A \rightarrow a \)
   - Where \( A \) is a non-terminal and \( a \) is a terminal symbol.

3. **Epsilon Production**: \( S \rightarrow \epsilon \)
   - Where \( S \) is the start symbol (this is allowed only if \( S \) does not appear on the right side of any production).

## Converting CFG to CNF

To convert a context-free grammar (CFG) to Chomsky Normal Form (CNF), follow these steps:

### 1. Eliminate Null Productions

Remove any productions that derive the empty string \( \epsilon \) (unless \( S \) can derive \( \epsilon \)).

### 2. Eliminate Unit Productions

Remove productions of the form \( A \rightarrow B \) where both \( A \) and \( B \) are non-terminals.

### 3. Eliminate Useless Symbols

Remove non-terminals that do not contribute to deriving terminal strings. A non-terminal is considered useless if it cannot reach a terminal string.

### 4. Convert to Binary Form

Rewrite productions so that every production is either of the form \( A \rightarrow BC \) or \( A \rightarrow a \). If a production has more than two non-terminals, it must be broken down.

### Example of Conversion

Consider the following CFG:

S → AB | a A → a | ε B → b

#### Step 1: Eliminate Null Productions

Remove \( A \rightarrow ε \).

Updated grammar:

S → AB | a | B A → a B → b

#### Step 2: Eliminate Unit Productions

Remove \( S \rightarrow B \).

Updated grammar:

S → AB | a A → a B → b


#### Step 3: Convert to Binary Form

If needed, replace longer productions:

Final CNF:

S → AC | a A → a C → B B → b



## Conclusion

Chomsky Normal Form provides a standardized structure for context-free grammars, enabling efficient parsing algorithms and theoretical analysis. Understanding CNF is crucial for applications in compiler design, syntax analysis, and formal language theory.
