

// Question 1
// ### Q1. ReactJS Hooks
// Please take a look at this ReactJS code and correct the mistakes that you find. You may edit the code in this markdown file directly.
 ```javascript
import React, {useState} from 'react';

function Counter(props) {
  const [count] = useState(0);
  
  return (
    <p>Current count: {count}</p>
    <button onClick={() => (count = count + 1)}>Increment count</button>
  );
}
```

// Answer

import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0); // setcount
  
  return (
    <> // wrap multipleline code.
    <p>Current count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment count</button> // increment using state
    </>
  );
}

// ### Q2. Events
// Explain the difference between these 4 ways of passing a function to a component. </br>
// What will happen when you click each of these buttons and why?

```javascript
class App extends React.Component {
  
  constructor() {
    super(); 
    this.name = 'MyComponent';
    
    this.handleClick2 = this.handleClick1.bind(this);
  }
  
  handleClick1() {
    alert(this.name);
  }
  
  handleClick3 = () => alert(this.name);
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}
```

//Answer
this.handleClick1() // 
``` easy way to pass parameters and if code is not involve with rerendering```
// ---------//

this.handleClick1 
``` call function without passing parameters```

this.handleClick2
``` bind event will rerender new data so when in 
our code we need new render on every button call then we can use bind```

this.handleClick3
```best way to update state as it will update state only without rerendering```

