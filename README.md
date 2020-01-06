# 52-Factorial

A page that draws a random first hand of 52 cards then randomly redraws hands until a match is made to the first.
See the page at this link: [https://jc2820.github.io/52-Factorial/](https://jc2820.github.io/52-Factorial/)

---

### 52 Factorial
There are "52 factorial" (52!) possible orderings of the cards in a 52-card deck.  
In other words, there are 52 × 51 × ··· × 2 × 1 possible combinations of a 52 card draw.  
This is approximately 8×10^67 possible orderings or specifically 80,658,175,170,943,878,571,660,636,856,403,766,975,289,505,440,883,277,824,000,000,000,000 combinations.  
(Wikipedia)

This makes the likelihood of drawing two identical 52 card hands extremely low.

---

### The idea
My brother approached me with this as an idea, and one that would be interesting to test in real time.
At this point I had been at the beginning of learning JavaScript, and had just been looking at randomising and array manipulation.
As an exercise of my current skill level, I decided to make a webpage which would test this idea by drawing a single hand of 52 cards, then continuing to draw a new hand every second, comparing each new hand against the first for a match.

---

### How it works
The logic takes an array with an element representing each card, randomises it, then makes a string from that hand.
When the page loads, a random hand is given to the user as the first draw.
Once the shuffle button is pressed, a loop function re-randomises the deck array, makes a new string and compares it to the first hand every second.
The page is written with each new string (or hand) and a message declaring whether or not it was a match to the first.

I haven't seen a match yet...

---

### Improvements
The use of array and randomisation logic seems to work well to provide and match random hands, however this page was made quite early in my learning so there are a few improvements that could be made here...
* Use DOM manipulation to display the generated hands and other elements in an attractive manner.
* Stop the shuffle button and page instructions from being replaced by the results of the drawn hands.
* Add links to further reading about factorials and about the 52 factorial in particular.
* Add a stop/refresh button to the page.
* Use ES6 syntax in the scripts page
* Accessibility across the page.



