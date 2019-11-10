# blizard.js

> __This library is still in the development stage. It is incomplete but, you are welcome to contribute.__  
[website tutorial (i just converted the readme to HTML so all credit to Ethan Priest AKA allyouaskfor)](http://blizardjs.ueuo.com/)
## Getting Started


Include the `blizard.js` file in your document the way which you prefer. Something like:  

<!-- change the link here -->
`<script src="https://blizardjs.ueuo.com/blizard.min.js"></script>`  

or if you choose to host it yourself:  

`<script src="js/blizard.min.js"></script>`

> Remember to replace the location with the location where it resides on your machine/server.

------
## Local Development

Install all the dependencies -

```bash
npm install
```

**Build the production javascript**
```bash
npm run build
```

**Webpack watch files**
```bash
npm run watch
```

**Generate docs**
```bash
npm run jsdoc
```

### Usage

Checkout the [docs]() folder

***sl.print(@elementId-toChange, @newString);***  

    sl.print(‘p’, ‘Hello’);

<br>  

***sl.hide(@elementId-toHide);***  

    sl.hide(‘p1’);

<br>  

***sl.show(@elementId-toShow);***  

    sl.show(‘p1’);

<br>  

***sl.col(@elementId-toChangeColor, @newColor);***  

    sl.col(‘p1’, ‘red’);

<br>  

***sl.family(@elementId-toChangeFont, @newFontFamily);***  

    sl.family(‘p1’, ‘Impact, Charcoal, sans-serif’)

<br>  

***sl.size(@elementId-toChangeSize, @newSize);***  

    sl.size(‘p1’, ‘medium’);  
> Options for __*size*__:  
> *xx-small  |  x-small  |  small  |  medium  |  large  |  x-large  |  xx-large  |  smaller  |  larger*  

<br>  

***sl.wait(@function, @milliseconds);***  

    sl.wait(‘f1()’, 1000);  
    function f1() {  
      alert(‘i love blizard.js’);  
    };

<br>  

***sl.setlocalstorage(@nameForStorage, @storageValue);***  

    sl.setlocalstorage(‘name’, ‘smith’);

<br>  

***sl.printlocalstorage(@element-toShowValue, @storageToShow);***  

    sl.printlocalstorage(‘p1’, ‘name’);

<br>  

***sl.click(@element-toMakeClickable, @function-whenClicked);***  

    sl.click(‘p’, ‘click()’);
    function click() {
      console.log(‘do something in here’);
    };

<br>  

***sl.id(@element-toChangeId, @element-newId);***  

    sl.id(‘old-id’, ‘new-id’);
> Could be used to modify element styles without additional Javascript.  

<br>  

***sl.createElement(@NEW-ELEMENT, @PARENT, @newElement-id);***  

    sl.createElement(‘P’, ‘HEAD’, ‘id’);
> Use capitals for parameter 1 and parameter 2.

## Built With

* [atomo.css](http://atomo.ueuo.com/) - Simple HTML/CSS library by Rohan Samra-O’Neill

## Authors

* **Rohan Samra-O’Neill** - [Slitherlizard](https://github.com/Slitherlizard/)

See also the list of [contributors](https://github.com/Slitherlizard/blizard.js/blob/master/authors.txt) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Slitherlizard/blizard.js/blob/master/LICENSE) file for details.

## Acknowledgments

* **Ethan Priest** - [allyouaskfor](https://github.com/allyouaskfor/) - Created a proper [README](https://github.com/Slitherlizard/blizard.js/blob/master/README.md)

------

the brand new javascript library.

Made with :heart:
