import React from 'react'

function Introandhis() {
  return (
    <>
    <Container className="py-5">
      <h1 className="text-center text-primary mb-5">Information & History</h1>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title className="text-success">Welcome to CSS Learning</Card.Title>
          <Card.Text>
            Let's start this journey of learning CSS together. I'm Harry, the same guy from the <strong>CodeWithHarry</strong> YouTube channel. This tutorial will serve as a resource for students to learn CSS and use the code from these lessons as a reference.
          </Card.Text>
          <Card.Text><strong>Without further ado, let's dive into learning CSS.</strong></Card.Text>
        </Card.Body>
      </Card>

      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm h-100">
            <Card.Body>
              <Card.Title>What is CSS?</Card.Title>
              <Card.Text>
                CSS stands for <strong>Cascading Style Sheets</strong>. It is a stylesheet language used to describe the visual presentation of HTML pages.
              </Card.Text>
              <Card.Text>
                HTML builds the structure, while CSS styles that structure. This tutorial assumes prior HTML knowledge.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow-sm h-100">
            <Card.Body>
              <Card.Title>Why the word "Cascade"?</Card.Title>
              <Card.Text>
                The term "cascade" refers to the priority system for determining which CSS rules apply when multiple rules affect the same element.
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Based on Specificity</ListGroup.Item>
                <ListGroup.Item>Inheritance Rules</ListGroup.Item>
                <ListGroup.Item>Order of Appearance</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm h-100">
            <Card.Body>
              <Card.Title>Why use CSS?</Card.Title>
              <Card.Text>
                CSS makes HTML pages visually appealing and user-friendly.
              </Card.Text>
              <Alert variant="info">Your browser does not support the video tag.</Alert>
              <Card.Text>
                <strong>Without CSS:</strong>
                <div className="bg-light text-center p-2 mb-2">[cwh tutorial image]</div>
                <strong>With CSS:</strong>
                <div className="bg-success-subtle text-center p-2">[cwh tutorial image]</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 shadow-sm h-100">
            <Card.Body>
              <Card.Title>Analogy to Understand CSS</Card.Title>
              <Card.Text>
                Imagine reading a book with only plain text. It’s dull, right? Now imagine that book with colors, fonts, and elegant formatting—that’s what CSS does for web pages.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>How does CSS work?</Card.Title>
          <Card.Text>
            CSS targets HTML elements using selectors and applies style properties. You can apply styles to elements, classes, or IDs.
          </Card.Text>
          <Card.Text>
            Here's an example of a CSS rule:
          </Card.Text>
          <div className="bg-dark text-light p-3 rounded mb-3">
            <pre className="mb-0">
<code>
selector &#123;<br />
&nbsp;&nbsp;property: value;<br />
&#125;
</code>
            </pre>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Quick Follow-Up Task</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Right-click on the screen and choose <strong>Inspect</strong> or press <kbd>Ctrl + Shift + C</kbd></ListGroup.Item>
            <ListGroup.Item>Click the arrow icon in the dev tools panel.</ListGroup.Item>
            <ListGroup.Item>Select any HTML element to inspect its applied CSS styles.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Key Features of CSS</Card.Title>
          <ListGroup>
            <ListGroup.Item>Style and layout control for webpages</ListGroup.Item>
            <ListGroup.Item>Works with HTML and XML</ListGroup.Item>
            <ListGroup.Item>Responsive design for all screen sizes</ListGroup.Item>
            <ListGroup.Item>Interactive effects (hover, animations)</ListGroup.Item>
            <ListGroup.Item>Modular, with ongoing updates</ListGroup.Item>
            <ListGroup.Item>Reusable across multiple HTML documents</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>A Bit of History</Card.Title>
          <Card.Text>
            CSS was created by <strong>Håkon Wium Lie</strong> to improve the design of web pages. Early websites were mostly used by researchers and lacked styling. As the web grew, better visuals became essential.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Important References</Card.Title>
          <ul>
            <li>Start with the <strong>HTML tutorial</strong></li>
            <li>Learn more at <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer">CSS - Wikipedia</a></li>
            <li>Advanced readers can refer to <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noreferrer">W3C CSS Specifications</a></li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default Introandhis