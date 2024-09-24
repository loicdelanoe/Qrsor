# Qrsor
Qrsor is a lightweight and simple JS library to create a mouse follow. Currently in developement.

## Setup
- Clone or download this repo
- Put the Qrsor Class in your JS folder,
- Create a new instance
```
import {Qrsor} from "./your/js/folder/Qrsor.js";

new Qrsor();
```

## Parallax on hover
If you want to create a little effect on hover you can pass 2 parameters to the constructor
```
new Qrsor(
    ['.link', '.post'], // Select your elements to be animate on hover
    0.3 // movement speed of the element on hover
});
```