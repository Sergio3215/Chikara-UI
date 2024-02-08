# Welcome to Chikara UI 👋

### About the library Chikara UI
Chikara UI is a library for get automatically the font color.<br/>
Also you can get some design about this library, where you can customize all.

# How Install
```bash
npm i chikara-ui
```

# Using the library

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
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Input type="text" label={"myText"} bgColor={"darkblue"}/>
    </main>
  );
}
```


# Version 1.0.8
In this version, only i add Input, but in the lastest version i am going to add another tags with an improve style.
