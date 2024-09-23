# Pumping Lemma

## Introduction

The Pumping Lemma is a fundamental concept in formal language theory, particularly for regular languages. It provides a property that all regular languages must satisfy, and it is often used to prove that certain languages are not regular.

## Statement of the Pumping Lemma

For any regular language \( L \), there exists a constant \( p \) (pumping length) such that any string \( s \) in \( L \) with a length of at least \( p \) can be divided into three parts, \( s = xyz \), satisfying the following conditions:

1. **Length Condition**: \( |y| > 0 \) (the substring \( y \) must be non-empty).
2. **Length Condition**: \( |xy| <= p \) (the combined length of \( x \) and \( y \) must not exceed \( p \)).
3. **Pumping Condition**: For all \( i >= 0 \), the string \( xy^iz \) is in \( L \).

## Implications

The Pumping Lemma implies that if a language fails to satisfy these conditions, it cannot be a regular language. The lemma is often used in proofs by contradiction.

## How to Use the Pumping Lemma

### Steps for Proving a Language is Not Regular

1. **Assume**: Assume that the language \( L \) is regular.
2. **Pumping Length**: Let \( p \) be the pumping length given by the Pumping Lemma.
3. **Choose a String**: Select a specific string \( s \) in \( L \) such that \( |s| >= p \).
4. **Decompose**: According to the Pumping Lemma, decompose \( s \) into \( xyz \) satisfying the conditions.
5. **Pump the String**: Show that for some \( i >= 0 \), the string \( xy^iz \) does not belong to \( L \).
6. **Conclusion**: Conclude that this contradicts the assumption that \( L \) is regular, thus proving that \( L \) is not regular.

## Example

### Language: \( L = \{a^n b^n | n \geq 0\} \)

1. **Assume**: Assume \( L \) is regular.
2. **Pumping Length**: Let \( p \) be the pumping length.
3. **Choose a String**: Take \( s = a^p b^p \) (which is in \( L \)).
4. **Decompose**: According to the lemma, \( s = xyz \) where \( |xy| <= p \) and \( |y| > 0 \).
   - This means \( y \) consists only of \( a \)'s.
5. **Pump the String**: Consider \( i = 2 \):
   - \( xy^2z = xyyz = a^{p + |y|}b^p \).
6. **Conclusion**: Since \( |y| > 0 \), we have \( xy^2z \) in the form \( a^{p + k} b^p \) (where \( k = |y| > 0 \)), which is not in \( L \). This contradicts our assumption that \( L \) is regular.

## Conclusion

The Pumping Lemma is a powerful tool in formal language theory, allowing us to demonstrate that certain languages are not regular. By leveraging the properties outlined in the lemma, we can systematically prove the non-regularity of languages through contradiction.
