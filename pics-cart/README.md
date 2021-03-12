https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css

# 1 Challenge

Set up the Context for our app.

1. In a new file, create a new context with React
2. In that same file, create a custom component that renders the Provider of the context you created
3. For now, just pass in an empty string "" as the context provider's value prop
4. Export the custom Provider component and the full context object (so we can pass it to the useContext hook eventually)
5. Set up your index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)

# 2 Challenge

Add state to our context and pass it through the Provider

1. Add state to hold the array of all photos our app gets from the API
2. Pass the array of all photos through the value of the provider so it's available anywhere the app accesses the context

# 3 Challenge

Get the JSON data with the photos information from the API and save it to context state

1. As soon as the ContextProvider component renders, get the JSON data from this url: 
https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json

2. Save the array of data that comes back to state.

Review data fetching in React using `fetch`: 
https://scrimba.com/p/p7P5Hd/c79Jask


# 4 Add to cart


Change the plus icon to a full shopping cart icon when an image is already in the cart. This should display whether the image is being hovered or not (like the favorite icon).

Icon to use when item already in cart:
<i className="ri-shopping-cart-fill cart"></i>

Hints: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://stackoverflow.com/a/8217584


# 5 Sum 

# Challenge

Calculate the total cost of the items in the cart and display it on the Cart page

1. Usually the item in the database will have it's own cost saved, but we're assuming every item we sell costs $5.99, so you can just hard code that cost in
2. To very easily display the total cost in US dollars (or whatever currency you want), use the following:

`<number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
