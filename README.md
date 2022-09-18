# Day-scheduler
A work day scheduler to enter any tasks or reminders

## Description

This website allows users to enter in any tasks they have within business hours. The time block that corresponds to the current hour will be coloured red, while time blocks that are already past will grey out and any business time in the future will be coloured green. These is also the added functionality of the application using local storage to save any task inputted so you can revisit it if you refresh or close the website. 

In creating this application the following was completed:
- Bootstrap was used for the input field, the time label and also the save button - this was nested into the HTML file. 
- IDs were added for each of the time blocks.
- Variables were used to call upon the time block elements in the HTML file using the IDs given. 
- The moment function was used for the date at the top of the page - this was reformatted. 
- If statements were used to cahnge the colour of the blocks depending on the hour. 
- Local storage (set/get) and event listeners were used to save the text in the input to local storage when save was clicked. 

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Usage

To view the website please follow this link: (https://nt399.github.io/day-scheduler/)

To use the application, please follow the steps below:
1. Input tasks in the time block where 'Enter task' is displayed.
2. Click Save.
3. The entered task should appear in the field when the page is refreshed.


![Screenshot of the website] https://github.com/NT399/day-scheduler/blob/main/assets/word%20day%20scheduler%20website.PNG

## Credits

The following links were helpful for the completion of this project:
- https://getbootstrap.com/docs/4.0/components/input-group/ (This was the source of the bootstrap)
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- https://www.w3schools.com/tags/att_input_value.asp
- https://www.w3schools.com/js/js_if_else.asp

## License

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
