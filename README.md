
Debouncing:


tying slow = 200ms
typing  fast = 50ms

Performance: 
searching - iphone pro max = 14 letter * 1000 = 14000
with debouncing - 3 api calls * 1000 = 3000


Debouncing with 200ms
- if diff b/w 2 keystrokes is <200 - decline API calls
->200 make an APT Calls



Cache

time complexity to search array = O(n)
time complexity to search map/object = O(1)