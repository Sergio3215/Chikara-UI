# 👋 Welcome to Chikara UI 

### About the library Chikara UI
Chikara UI is a library for get automatically the font color.<br/>
Also you can get some design about this library, where you can customize all.

# ⚙ How Install
```bash
npm i chikara-ui
```

# 🤓 Using the library

### Input

The properties for Input, for example is:<br/>
<b>label: Text of label of component</b><br/>
<b>name: Name attribute of tag</b><br/>
<b>type: It is the type of input</b><br/>
<b>bgColor: It is for add background-color. You need add the background-color</b><br/>
<b>onChange: You can add the event onChange</b><br/>

```js
import {Input} from 'chikara-ui';

export default function Home() {
  return (
    <>
      <Input type="text" label={"myText"} bgColor={"darkblue"}/>
    </>
  );
}
```

### Title

The properties for Title is:<br/>
<b>text: Text of label of component</b><br/>
<b>bgColor: It is for add background-color. You need add the background-color</b><br/>
<b>className: You can add the className</b><br/>
<b>id: You can add the id</b><br/>

```js
import {Title} from 'chikara-ui';

export default function Home() {
  return (
    <>
      <Title bgColor="#000" text="Hola como estas?" />
    </>
  );
}
```

### Button

The properties for Button is:<br/>
<b>text: Text of label of component</b><br/>
<b>bgColor: It is for add background-color. You need add the background-color</b><br/>
<b>className: You can add the className</b><br/>
<b>id: You can add the id</b><br/>

```js
import {Button} from 'chikara-ui';

export default function Home() {
  return (
    <>
      <Button bgColor="darkblue">Click here</Button>
    </>
  );
}
```

### Dropdown

The properties for Dropdown is:<br/>
<b>name: name of component</b><br/>
<b>bgColor: It is for add background-color. You need add the background-color</b><br/>
<b>className: You can add the className</b><br/>
<b>id: You can add the id</b><br/>
<b>borderRadius: It is the border radius of component</b><br/>

```js
import {Dropdown} from 'chikara-ui';

export default function Home() {
  return (
    <>
      <Dropdown bgColor="white" name={"drp"} borderRadius="10px">
        <option>Select your number</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Dropdown>
    </>
  );
}
```
### Divider

The properties for Divider is:<br/>
<b>width: width of component</b><br/>
<b>style: set your style of component</b><br/>
<b>className: You can add the className</b><br/>
<b>id: You can add the id</b><br/>

```js
import {Divider} from 'chikara-ui';

export default function Home() {
  return (
    <>
      <Divider width="30%"/>
    </>
  );
}
```

### Sketch (P5)

The properties for Sketch is:<br/>
<b>sketch: code for P5, it is a code normal, using the property "p"</b><br/>
<b>style: set your style of component</b><br/>
<b>className: You can add the className</b><br/>
<b>id: You can add the id</b><br/>

```js
import {Sketch} from 'chikara-ui/P5';

export default function Home() {
  return (
    <>
    <Sketch sketch={
        (p)=>{
          p.setup = () => {
            p.createCanvas(500, 500);
          }
        
          p.draw = () => {
            p.background("#e9e2d7")
            p.circle(120, 120, 90);
            p.rect(120, 120, 120,12);
          }
        }} />
    </>
  );
}
```

# 📝 Version 1.1.7
### Add follow components:
 ### Update Documentation
 <br/>
 
# <s>📝 Version 1.1.6</s>
### Add follow components:
 #### Divider
 #### Sketch (P5)
### Improve the component style
</br>

# <s>📝 Version 1.1.5 </s>

### Improve the component style
# <s>📝 Version 1.1.4 </s>

### Improve the component style
# <s>📝 Version 1.1.3 </s>

### Improve the component style
# <s>📝 Version 1.1.2 </s>
### Adding Button Component
# <s>📝 Version 1.1.0 </s>
### Improve the component Dropdown Style
# <s>📝 Version 1.0.9 </s>
### Adding components Title, Dropdown and Image
# <s>📝 Version 1.0.8 </s>
### In this version, only i add Input, but in the lastest version i am going to add another tags with an improve style.
# <s>📝 Version 1.0.7 </s>
### Improve Naural Network
# <s>📝 Version 1.0.6 </s>
### Adding Naural Network
# <s>📝 Version 1.0.5 </s>
### Improve component Input
# <s>📝 Version 1.0.4 </s>
### Adding component Input