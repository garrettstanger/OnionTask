# Setting up the environment

After cloning the repository run the command `npm install` to install the node modules necessary to run the app.
# Project Structure.

### Creating Components:

Every component is defined in two parts. The css file defines where the component is placed. The js file defines what it is. The majority of work is in the js file. 

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


