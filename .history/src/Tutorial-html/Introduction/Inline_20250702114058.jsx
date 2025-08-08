import React from 'react'

function Inline() {
  return (
    <>
    <Container className="my-5">
      <Card className="shadow rounded-4">
        <Card.Body>
          <Card.Title as="h2" className="mb-3 text-primary">
            HTML Inline Elements
          </Card.Title>
          <Card.Text>
            Inline elements don’t start on a new line. They only take the width
            required to cover the content.
          </Card.Text>

          <Card className="bg-light border-0 my-4">
            <Card.Body>
              <h5 className="text-secondary">Inline vs Block</h5>
              <p>
                HTML elements are generally divided into two categories:
                <strong> Block-level</strong> and <strong>Inline</strong>{" "}
                elements.
              </p>
              <p>
                Block elements always start on a new line and take up full width
                available, while inline elements flow within content and only
                take the space they need.
              </p>
            </Card.Body>
          </Card>

          <h4 className="mt-4 text-success">What are Inline Elements?</h4>
          <p>
            Inline elements do not start on a new line and only take up as much
            width as necessary. They are part of the flow within other elements.
          </p>
          <p>
            Inline elements can contain other inline elements, but should not
            contain block-level elements like <code>&lt;div&gt;</code> or{" "}
            <code>&lt;p&gt;</code>.
          </p>

          <Card bg="dark" text="light" className="my-3">
            <Card.Body>
              <strong>Correct Example:</strong>
              <pre className="mb-0">
{`<span>This is <strong>important</strong> text.</span>`}
              </pre>
            </Card.Body>
          </Card>

          <Card bg="danger" text="white" className="my-3">
            <Card.Body>
              <strong>Incorrect Example:</strong>
              <pre className="mb-0">
{`<span>This is <div>not recommended</div> text.</span>`}
              </pre>
            </Card.Body>
          </Card>

          <h5 className="mt-4 text-warning">Common Inline Elements</h5>
          <ListGroup variant="flush" className="mb-4">
            <ListGroup.Item>&lt;span&gt;: A generic inline container</ListGroup.Item>
            <ListGroup.Item>&lt;a&gt;: Defines a hyperlink</ListGroup.Item>
            <ListGroup.Item>&lt;strong&gt;: Defines important text</ListGroup.Item>
            <ListGroup.Item>&lt;em&gt;: Defines emphasized text</ListGroup.Item>
            <ListGroup.Item>&lt;img&gt;: Embeds an image</ListGroup.Item>
            <ListGroup.Item>&lt;input&gt;: Input control</ListGroup.Item>
          </ListGroup>

          <h5 className="text-info">Example Paragraph:</h5>
          <p className="p-3 bg-light rounded">
            This text contains{" "}
            <a href="#" className="text-decoration-underline">a link</a>,{" "}
            <strong>an important text</strong>, and{" "}
            <em>an emphasized text</em>.
          </p>

          <h5 className="mt-4 text-success">Styling Inline Elements</h5>
          <p>
            You can style inline elements with CSS, but width and height don’t
            always apply.
          </p>

          <h5 className="text-primary">List of Inline Elements</h5>
          <Row xs={2} sm={3} md={4} className="g-2">
            {[
              "a", "abbr", "acronym", "button", "br", "big", "bdo", "b", "cite", "code",
              "dfn", "i", "em", "img", "input", "kbd", "label", "map", "object", "output",
              "tt", "time", "samp", "script", "select", "small", "span", "strong", "sub",
              "sup", "textarea"
            ].map((tag, index) => (
              <Col key={index}>
                <div className="border p-2 rounded text-center bg-light">
                  &lt;{tag}&gt;
                </div>
              </Col>
            ))}
          
    </Container>
    </>
  )
}

export default Inline