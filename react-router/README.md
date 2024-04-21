# React + Vite

# Install
```shell
npm create vite@latest project-folder-name -- --template react
cd project-folder-name
npm install
vite dev
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tests and Basic Understand

### React Router

- [React Router Overview](https://reactrouter.com/en/main/start/overview)

#### Keywords to remember

##### RouterProvider
you can use it in the root of your app: main.jsx

example: 
```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
```


##### createBrowserRouter
use this to declare the routes like /, /about, /contact
* path: which path
* element: which element to render for each route
* elementError which elementError to render if the route is not found

example: 
```jsx

const routes = [
    {
        path: '/',
        element: <Home />,
        elementError: <NotFound />
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    }
]

```










