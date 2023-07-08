Q.4 What is the purpose of using Media Queries for Print Media?

Ans: Media queries can be used to apply different CSS styles to a website depending on whether it is being viewed on a screen or printed.

The purpose of using media queries for print media is to ensure:

- that the important content is visible when printed.

- to change the specific style for printed version

- to add special tags or styles for printed version

For example,

```CSS
@media print {
  .navigation {
    display: none;
  }
}
```
