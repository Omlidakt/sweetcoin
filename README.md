![SweetCoin Logo for Expleo Test](https://i.ibb.co/7jt34Mg/Sweet-Coin.png)
# Expleo Test: Christian Coyle

## How to get started

1. `open your terminal`
2. `cd` to a directory of your choice
		2.a (if you have the git CLI installed)
	`git clone` [paste in this repos slug on the top right of this page.]
		2.b Or download directly
3. Navigate into the directory and double click on index.html

For brevity sake there is no server side code at all, it's designed to *just run*.

## Plan
To build a single page application using HTML, CSS and JavaScript.

**Aesthetics**
 - I would like to use Bootstrap for the UI as its quick and easy to get something up and running.

**HTML**

 - I plan to use HTML `<templates>` to build repeat DOM elements to make reusable "components" where it makes sense to do so.
 - I am to make use of bootstrap components
 - Where possible I need to think of design concerns such as accessibility.
 
 **CSS**
 - I will use `Figma` to wireframe up the design and then appropriately apply css styling via classes to DOM elements inside my single page application.

**Javascript**

- I aim to make a small assertion function to unit test my code instead of importing an entire library for something so basic.
- I will use JavaScript `fetch` to perform a `GET` request to CoinGecko for both `market` and individual `coin` data.

## Problem Restatement
Original Statement
> Please create single page application – html, CSS, javascript

I am required to create a single page application using HTML, CSS and JavaScript that shows a list of cryptocurrencies available on CoinGecko. 

When you click on a single cryptocurrency it provides additional information on that particular coin.

To solve this problem I need to make a pretty frontend that is easy to navigate, responsive to desktop computers and calls from a public API.

### Security Concerns
Usually, it is best practice to include authentication on the server side when calling an API. In this particular instance:
1. It is a `GET` request.
2. It is a publicly accessible endpoint.
3. Therefore I'm not worried about calling the API directly using JavaScript on the client, although I aim to adhere to any throttling limits as common courtesy.