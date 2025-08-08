import React from 'react'

function Cssmargin() {
  return (
    <>
    CSS Margin
The margin is the space outside the HTML element. It gives external spacing and differentiates two or more elements.

Consider the image:

cwh tutorial image

Here, the space outside the border is the margin.

Syntax:

selector {
    margin: value;
}

The margin value can be used in any of the following methods:

Method 1

selector {
    margin: value;
}

Here, the margin value will apply an equal margin to all sides (top, right, left, and bottom).

Example:

<html lang="en">
<head>
    <style>
        #p1 {
            border: 2px solid purple;
        }
        #p2 {
            margin: 12px;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <p id="p1">CodeWithHarry (without margin)</p>
    <p id="p2">CodeWithHarry (with margin)</p>
</body>
</html>

Note: Values can be specified in different units, such as pixels (px), em, rem, percentage (%), auto, etc.

cwh tutorial image

Method 2

selector {
    margin: value1 value2;
}

Here, value 1 is the vertical margin (y-axis), and value 2 is the horizontal margin (x-axis).

Example:

<html lang="en">
<head>
    <style>
        #p1 {
            border: 2px solid purple;
        }
        #p2 {
            margin: 20px 50px;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <p id="p1">CodeWithHarry (without margin)</p>
    <p id="p2">CodeWithHarry (with margin)</p>
</body>
</html>

cwh tutorial image

Note: You can use the inspect tool to verify.

Method 3

selector {
    margin: value1 value2 value3 value4;
}

In this method, each value represents the margin of individual sides (top, right, bottom, left).

top: value1
right: value2
bottom: value3
left: value4
Example:

<html lang="en">
<head>
    <style>
        #p1 {
            border: 2px solid purple;
        }
        #p2 {
            margin: 15px 30px 25px 50px;
            border: 2px solid red;
        }
    </style>
</head>
<body>
    <p id="p1">CodeWithHarry (without margin)</p>
    <p id="p2">CodeWithHarry (with margin)</p>
</body>
</html>

cwh tutorial image

In this example, the margin on individual sides is:

top: 15px
right: 30px
bottom: 25px
left: 50p
    </>
  )
}

export default Cssmargin