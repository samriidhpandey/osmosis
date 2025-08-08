import React from 'react'

function Cssimg() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Images</h2>
      <p>Images are essential for enhancing the visual design of a website. Here's how we can style them using CSS:</p>

      <h4 className="mt-4">Basic Image</h4>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZkGD1igzEfuQLSp9ydI5TadrB-mvyaBYzQ&s"
        alt="osmosis"
        style={{ border: '2px solid #000', marginBottom: '10px' }}
      />

      <h4 className="mt-4">Image with Inline Width & Height</h4>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZkGD1igzEfuQLSp9ydI5TadrB-mvyaBYzQ&s"
        height="300"
        width="400"
        alt="osmosis"
        style={{ border: '2px dashed #ff0000', marginBottom: '10px' }}
      />

      <h4 className="mt-4">Image with Internal CSS Style</h4>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZkGD1igzEfuQLSp9ydI5TadrB-mvyaBYzQ&s"
        alt="osmosis"
        style={{ width: '600px', height: '400px', border: '2px solid green' }}
      />

      <h4 className="mt-4">Image Border Radius</h4>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZkGD1igzEfuQLSp9ydI5TadrB-mvyaBYzQ&s"
        alt="osmosis"
        style={{ borderRadius: '25px', border: '2px solid #888' }}
      />

      <h4 className="mt-4">Responsive Image</h4>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZkGD1igzEfuQLSp9ydI5TadrB-mvyaBYzQ&s"
        alt="osmosis"
        style={{ maxWidth: '100%', height: 'auto', border: '2px solid #007bff' }}
      />

      <h4 className="mt-4">Image with Opacity</h4>
      <img
        src="https://via.placeholder.com/300x150"
        alt="osmosis"
        style={{ opacity: '0.6', border: '2px solid #333' }}
      />

      <h4 className="mt-4">Image Filters</h4>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>Grayscale</p>
          <img
            src="https://via.placeholder.com/300x150"
            alt="osmosis"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>

        <div>
          <p>Blur</p>
          <img
            src="https://via.placeholder.com/300x150"
            alt="osmosis"
            style={{ filter: 'blur(5px)' }}
          />
        </div>

        <div>
          <p>Brightness</p>
          <img
            src="https://via.placeholder.com/300x150"
            alt="osmosis"
            style={{ filter: 'brightness(180%)' }}
          />
        </div>

        <div>
          <p>Contrast</p>
          <img
            src="https://via.placeholder.com/300x150"
            alt="osmosis"
            style={{ filter: 'contrast(10%)' }}
          />
        </div>

        <div>
          <p>Invert</p>
          <img
            src="https://via.placeholder.com/300x150"
            alt="osmosis"
            style={{ filter: 'invert(100%)' }}
          />
        </div>

        <div>
          <p>Saturate</p>
          <img
            src="https://via.placeholder.com/300x150"
            alt="osmosis"
            style={{ filter: 'saturate(300%)' }}
          />
        </div>

        <div>
          <p>Hue Rotate</p>
          <img
            src="https://via.placeholder.com/300x150"
            alt="osmosis"
            style={{ filter: 'hue-rotate(90deg)' }}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Cssimg