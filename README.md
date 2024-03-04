# LLM website with no-code

Can an LLM generrative model like ChatGPT or Gemini design an entire webpage with jsavascript server side code? We want to enable anyone to be able to create and publish simple websites with limited coding knowledge and using modern AI tools.

We experiment on multiple platforms:

- Google Gemini
- Google AI Studio
- Microsoft Co-pilot

## PROMPT #1:

Design a webpage with the following folder organization:
“
Assets/
    favicon.ico
	images/
		euge.jpg
		soo.jpg
		geo.jpg
html/
	euge.html
	soo.html
	geo.html
css/
    style.css
js/
	script.js
index.html
“
The webpage has an index.html page with title: “our family” and it list the three family members: Euge, Soo, Geo. 
The index page will have a 256 width image of each member and has a link to go to their respective member pages in the folder html/.
Make the member photos centered and with a nice style, each with their own background theme color around each photo.

Store the variable for each member in the script.js file. The variables for each member are: hair_color, eyes_color, theme_color.
Each member page (euge.html, soo.html, geo.html) has a title with the name of the member, their image, and their information: eye color, hair color, theme color. Add a button to go back to the index.html with nice style and centered at the bottom. Add an edit button that allows to change their image, change colors of hair and eyes. The colors are selectable from a palette of 16 basic colors. Please code the javascript routine to change members information.

Use this template for the website: 
https://www.w3schools.com/howto/tryhow_css_example_website.htm
Add a style.css file with the style of that website also.

Now design the webpage and all complete code.


## Fix prompt 1

in AIStudio: 

add files:
family-html6 files

Store the variable for each member in the script.js file. The variables for each member are: hair_color, eyes_color, theme_color.
Each member page (euge.html, soo.html, geo.html) has a title with the name of the member, their image, and their information: eye color, hair color, theme color. Add a button to go back to the index.html with nice style and centered at the bottom. Add an edit button that allows to change their image, change colors of hair and eyes. The colors are selectable from a palette of 16 basic colors. Please code the javascript routine to change members information.


## Tests

### https://gemini.google.com/

missing a lot of code, js missing

### https://aistudio.google.com/

can input a directory with code!
best results, but not great, js does not work effectively, hard to ask for updates

Worked on 2nd try with fix: see fix prompt 1 above


### https://copilot.microsoft.com

results similar to Gemini chat: missing a lot of code, js missing