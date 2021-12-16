# Training Week
Training week is a web-based application built in HTML/CSS and JavaScript that  
 allows strength athletes to visualize exercises that they may include in  
 their training, as well as view brief tutorial descriptions how certain  
 exercises are performed. This can be a useful tool when drawing up programs,  
 especially for individuals that work best with visual feedback, providing a  
 convenient alternative to notes or spreadsheets as a means of conceptualizing  
 training days. 

## Usage

Training Week is relatively straightforward in its use. There are two search  
menus on the screen, one populated with a preset list of common exercises, and  
one that enables a user to search [wger.de](wger.de)'s online database of  
exercises. When an exercise is selected from the dropdown menu or search  
bar, if it is a valid result, it will populate the right container of the  
screen with 'cards' containing the title of the exercise, a brief how-to  
instruction set, and (if applicable) an image of the exercise. 

Here is a brief tutorial of the site:


At the moment, Training Week is not a live site. To run it, the repository  
must be cloned locally. As an external dependency, Training Week uses 
```json-server``` to spoof an API on which the data from ```db.json``` is  
stored. 

json-server can be installed with the following shell command (requires [npm](https://www.npmjs.com/)):
```
npm install -g json-server
```
Run:
```
json-server --watch db.json
```
While in the directory containing this repository in order for the site to  
access the preset data. 

## Bugs/Issues
The 'search from database' query can be a dependent on spelling to match the  
exercise as listed in the wger.de database. There is no option to fuzzy match  
search results, though this may be a feature that is added to this app in the  
future. 