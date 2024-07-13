### For my own Reference

### Webpack Configuration - React TypeScript Application


#### Features Checklist:
- **Modular Config**: Partially modular. Separate files for dev/prod recommended.
- **Code Splitting**: Enabled via `optimization.splitChunks`.
- **Optimizations**: Good use of plugins and loaders for performance.
- **Loaders and Plugins**: Well-configured for TypeScript, CSS, SCSS.
- **Hot Module Replacement**: Enabled, improves dev experience.
- **Caching**: Content hashing used for efficient browser caching.
- **Env Vars**: Handled through `DefinePlugin`.
- **Browser Compatibility**: Assumed with `babel-loader`, needs specific `.babelrc` settings for full support.
- **Module Federation**: Not configured. Consider if needed for sharing code between applications.
- **Scalability**: Supports basic scalability, but could be enhanced with more features for large-scale apps.

### TypeScript Configuration (`tsconfig.json`) - Explanation

#### Configuration Details:
- **`compilerOptions`**: Configures the behavior of the TypeScript compiler.
  - **`outDir`**: `"./dist/"` - Compiled JavaScript files output directory.
  - **`noImplicitAny`**: `true` - Enforces type safety by not allowing implicit `any` types.
  - **`module`**: `"es6"` - Uses ECMAScript 2015 style modules.
  - **`target`**: `"es5"` - Compiles TS to ES5 compatible JavaScript.
  - **`jsx`**: `"react"` - Allows JSX to be used and treated as React elements.
  - **`allowJs`**: `true` - Includes JavaScript files in the compilation.
  - **`moduleResolution`**: `"node"` - Uses Node.js style module resolution.

- **`include`**:
  - **`"./src/**/*"`** - Includes all files within the `src` directory for compilation.


### const context = useOutletContext()
### const location = useLocation()
### const navigate = useNavigate()
### const { prodId } = useParams()


## Best practices in my code

1. Route Segregation - Straightforward
2. Dynamic Routing - based on login state
3. Performance Optimization - Lazy loading and Suspence fallback mechanism
4. Enchance security - Authentication and Authorization
5. Centralized Route Configuration - Easy maintenance - Scalable - easy to add - edit - delete routes without disturbing component logic
6. Use of hooks for lifecycle and state management - managin side effects such as
## useEffect - reacting to changes in authentication state.
## useLayoutEffect - checking for existing authentication sessions 
7. Single Responsibility principle: a module, class, or component should have one, and only one, reason to change
 7.1 - Routing Setup
  - ## Auth_Routes - only authentication-related
  - ## SecuredRoutes - only secured content-related
 7.2 - IndexRouter
  - ## has only one responsibility - handling the dynamic setting of routes based on the authentication state - but does not concern about route specifics or other logics
 7.3 - LoginSessionProvider
  - ## has single responsibility - encapsulate's the state and functionality related to user's session
8. Modular Design - Lazy laoding decouples and encapsulates for performance and security respectively
9. Design Patterns - For scalable and maintanable applications
  ## 9.1 Module Pattern - Encapsulating AuthRoutes and SecuredRoutes Separately

  ## 9.2 Factory Pattern - depending on login state - 'loggedIn' - which product( a a way to instantiate set of routes)

  ## 9.3 Decorator Pattern - allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. - 'LoginSessionProvider' -Wrapping components within this provider decorates them with additional functionality, specifically access to authentication-related state and actions.

  ## 9.4 Observer Pattern -React’s use of state and props, along with the context API (LoginSessionProvider) Components observe changes in state and props and react accordingly

  ## 9.5 Strategy Pattern - Employing Algo at run time - LoginState
  
  ## 9.6 Lazy Loading(a form of Proxy pattern) - delaying the full object creation costs until it’s actually needed.