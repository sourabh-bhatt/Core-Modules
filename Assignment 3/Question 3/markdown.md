Q.3 Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries.

Ans: Breakpoints in the responsive web design are the points on which the style of a website changes when it reaches to a certain size of the screen.

- Breakpoints are used to maintain the responsiveness of a web page, by breaking the websites into different segment of the screen.

For example,

A website might have one layout for screens that are 1024 pixels wide or more, and a different layout for screens that are less than 1024 pixels wide.

In order to use breakpoint in CSS we apply the rule of media query, which is as follows:

```CSS
@media (max-width: 768px) {
  body{
    height: 200px;
  }
}
```

In the above example the breakpoints are applied on a size of screen less than `768px`.
