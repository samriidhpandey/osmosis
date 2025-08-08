import React from 'react'

function Video() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">HTML Tags</h2>

        <p>
          HTML provides built-in tags to embed media content like video and audio. The <code className="p-2">&lt;video&gt;</code> and <code className="p-2">&lt;audio&gt;</code> tags make it simple to add media files with full control over playback features.
        </p>

        {/* Video Section */}
        <h4 className="text-success mt-4">🎥 The <code className="p-2">&lt;video&gt;</code> Tag</h4>
        <p>
          Use the <code className="p-2">&lt;video&gt;</code> tag to display video content directly on a webpage.
        </p>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;video src="video.mp4" controls&gt;&lt;/video&gt;
        </code>

        <ul>
          <li><strong>src:</strong> Path to the video file</li>
          <li><strong>controls:</strong> Displays video controls</li>
          <li><strong>autoplay:</strong> Plays video automatically on load</li>
          <li><strong>loop:</strong> Repeats the video</li>
          <li><strong>muted:</strong> Mutes audio by default</li>
          <li><strong>poster:</strong> Thumbnail image before playback</li>
          <li><strong>width/height:</strong> Dimensions of the video player</li>
        </ul>

        {/* Audio Section */}
        <h4 className="text-success mt-5">🎵 The <code className="p-2">&lt;audio&gt;</code> Tag</h4>
        <p>
          Use the <code className="p-2">&lt;audio&gt;</code> tag to embed audio content such as music or podcasts.
        </p>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;audio src="audio.mp3" controls&gt;&lt;/audio&gt;
        </code>

        <ul>
          <li><strong>src:</strong> Path to the audio file</li>
          <li><strong>controls:</strong> Displays audio controls</li>
          <li><strong>autoplay:</strong> Starts playback on load</li>
          <li><strong>loop:</strong> Repeats the audio</li>
          <li><strong>muted:</strong> Mutes sound by default</li>
          <li><strong>preload:</strong> Defines how audio loads initially (<code className="p-2">none</code>, <code className="p-2">metadata</code>, <code className="p-2">auto</code>)</li>
        </ul>

        <h5 className="text-secondary mt-4">🧠 Understanding preload Attribute</h5>
        <ul>
          <li><strong>none:</strong> Do not preload anything until user initiates play.</li>
          <li><strong>metadata:</strong> Preload only basic info like duration.</li>
          <li><strong>auto:</strong> Try loading entire file when possible.</li>
        </ul>

        <h5 className="text-secondary">🔚 Conclusion</h5>
        <p>
          The <code className="p-2">&lt;video&gt;</code> and <code className="p-2">&lt;audio&gt;</code> tags enhance user experience by allowing rich multimedia content. Make use of their attributes to customize how media behaves on your site.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> Link & Script Tags<br />
            <strong>Next:</strong> Embedding YouTube or External Media (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Video