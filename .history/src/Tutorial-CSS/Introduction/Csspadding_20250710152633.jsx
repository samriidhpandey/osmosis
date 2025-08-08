import React from 'react'

function Csspadding() {
  return (
    <>
    CSS Padding
Padding is the space between the HTML content and the border. It gives internal spacing and helps to enhance the website.

Consider the image:

cwh tutorial image

Here, the space between the content "CodeWithHarry" and the border is the padding.

Syntax:

selector{
    padding: value;
}

Padding value can be used in any of the following methods:

Method 1

selector{
    padding: value;
}

Here, the padding value will apply equal padding to all sides (top, right, left, and bottom).

Example:

<html lang="en">
<head>
    <style>
        #p1{
            border: 2px solid purple;
        }
        #p2 {
            padding: 12px;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <p id="p1">CodeWithHarry (without padding)</p>
    <p id="p2">CodeWithHarry (with padding)</p>
</body>
</html>

cwh tutorial image

Note: Values can be specified in different units, such as pixels (px), em, rem, percentage (%), auto, etc.

If you are not familiar with borders, you can also check out the CSS borders tutorial.

Method 2

selector{
    padding: value1 value2;
}

Here, value 1 is the vertical padding (y-axis) and value 2 is the horizontal padding (x-axis).

Example:

<html lang="en">
<head>
    <style>
        #p1{
            border: 2px solid purple;
        }
        #p2 {
            padding: 20px 50px;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <p id="p1">CodeWithHarry (without padding)</p>
    <p id="p2">CodeWithHarry (with padding)</p>
</body>
</html>

cwh tutorial image

Method 3

selector{
    padding: value1 value2 value3 value4;
}

In this method, each value represents the padding of individual sides (top, right, bottom, left).

top: value1
right: value2
bottom: value3
left: value4
Example:

<html lang="en">
<head>
    <style>
        #p1{
            border: 2px solid purple;
        }
        #p2 {
            padding: 15px 30px 25px 50px;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <p id="p1">CodeWithHarry (without padding)</p>
    <p id="p2">CodeWithHarry (with padding)</p>
</body>
</html>

cwh tutorial image

In this example, the padding on individual sides is:

top: 15px
right: 30px
bottom: 25px
left: 50px
Playaround:

You can also check the padding of each HTML element(s) using the inspect tool. Follow the steps.

Right-click and click on inspect.
Click on the computed styles sidebar.
Toggle with the box model.
or follow the video.


    </>
  )
}

export default Csspadding