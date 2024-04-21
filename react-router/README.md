# Nested Routes

by using field children in the route object of the routes array,
we can define nested routes.

in order for root to render the nested routes, we need to use the
<Outlet /> component from react-router-dom.

Keywords to remember:
- nested routes
- Outlet
- Children in the router object
- Link: just like <a href=""></a> in html that point to a route

```jsx
const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
        path: 'contacts/:id',
        element: <Contact />,
    }]
}]);
```

## Outlet
```jsx
function Root() {
    return (
        <div>
            <h1>React Router</h1>
            <Outlet />
        </div>
    );
}

```