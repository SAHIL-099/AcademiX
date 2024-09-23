## Understanding Regular Expressions

### Introduction

A **regular expression (regex)** is a sequence of characters that defines a search pattern. Regular expressions are essential in the Theory of Computation as they describe regular languages and are widely used in text processing, search algorithms, and programming languages.

### Basic Components

1. **Literals**:
   - Characters that represent themselves (e.g., `a`, `b`, `1`).

2. **Metacharacters**:
   - Special symbols with specific meanings:
     - `.`: Matches any single character.
     - `*`: Matches zero or more occurrences of the preceding element.
     - `+`: Matches one or more occurrences of the preceding element.
     - `?`: Matches zero or one occurrence of the preceding element.
     - `|`: Represents alternation (e.g., `a|b` matches `a` or `b`).

### Common Constructs

- **Concatenation**: Joins two expressions (e.g., `ab` matches `ab`).
- **Union**: Alternation using `|` (e.g., `a|b` matches `a` or `b`).
- **Kleene Star**: Matches zero or more occurrences (e.g., `a*`).
- **Kleene Plus**: Matches one or more occurrences (e.g., `a+`).
- **Optional**: Matches zero or one occurrence (e.g., `a?`).

### Special Characters

- **Square Brackets `[]`**: Define a character class (e.g., `[abc]`).
- **Caret `^`**: Matches the start of a string (e.g., `^a`).
- **Dollar Sign `$`**: Matches the end of a string (e.g., `a$`).
- **Backslash `\`**: Escapes a special character.

### Examples

- **`a*b`**: Matches any string with zero or more `a`s followed by `b`.
- **`[a-z]+`**: Matches one or more lowercase letters.

---
