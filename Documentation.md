# Setting up the environment

After cloning the repository, run the command `npm install` to install the node modules necessary to run the app.
# Project Structure.

### Creating Components:

Inside the `src/components` folder, you will create a new file  with the name of your component. Capitalize the first letter, and every first letter of every word and use a descriptive name (`NewComponent.js`). 

To use your component import it in the file that it'll be used  `import NewComponent from './NewComponent'`

#### Making a component

```javascript
import Menu from './Menu'
```


```javascript
function Navbar(props) {
        ...
              <p>Welcome {props.name}</p>
```


```javascript
function Menu(props) {
    const {content, setContent} = useContext(ContentContext)
```


