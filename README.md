# Process of thought
## Target
`g(n)`, `g` is a function where `n` is input.

This function will count iterated numbers from 0 ~ n where digit 7 is included 

For example, G(20), the analysis is as the following:
* let count = 0
* iterate from 0 ~ 20
  * 0
  * 1
  * 2
  * 3
  * 4
  * 5
  * 6
  * 7,  digit 7 is included, count++ 
  * 8
  * 9
  * 10
  * 11
  * 12
  * 13
  * 14
  * 15
  * 16
  * 17,  digit 7 is included, count++ 
  * 18
  * 19
  * 20

So, pseudo code will be as the following
```
function(g) {
  let count = 0;
  for(let i = 0;i < g; i++)
  {
    if (i.includes('7') count++;
  }
}
```
