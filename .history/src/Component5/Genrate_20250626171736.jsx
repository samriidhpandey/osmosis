import genratai from "../Images/grnraterandom.webp"

function Genrate() {
  function Heading({ text }) {
    return (
      <h3 className="blog-page-hading">{text}</h3>
    );
  }
  return (
    <>
      <div className="container-fluid  blog-page-main" >
        {/* <div className=""> */}

        <img src={genratai} className="blog-page-img " />
        <h1 className="blog-page-text2 w-60">How to Generate Random Numbers in C Language</h1>
        <p className="blog-page-content2 border-zinc-500 ">"A comprehensive guide to generating random numbers in C using the rand() and srand() functions, with examples and output."</p>
        <p> In the C programming language, random numbers can be generated primarily using two functions like rand() and srand().</p>
        <Heading text={"Method 1: Using the rand() Function"} />
        <p> The rand() function is used to generate random numbers in C. It returns a random integer value that can further be scaled according to the range required.</p>

        <pre>
          <code style={{ height: "27vh", marginTop: "10px" }}>
            <p style={{ color: "#F47067" }}>  #include &lt;stdio.h&gt;</p>
            <p style={{ color: "#6CB6FF" }}>  #include &lt;stdlib.h&gt;</p>


            <p style={{ color: "#6CB6FF" }}>   int main() </p>
            <p style={{ color: "#6CB6FF" }}>   int random_number = rand();</p>
            <p style={{ color: "#6CB6FF" }}>   printf("Random Number: %d\\n", random_number);</p>
            <p style={{ color: "#F47067" }}>   return 0;
            </p>

          </code>
        </pre>
        <p>
          <strong> Output</strong>
          <span> Output: The value of the random number may not vary on each execution since the rand() function generates a pseudo-random number.</span>
        </p>
        <Heading text={"Method 2: Seeding with srand()"} />
        <p> To ensure a different sequence of random numbers, the srand() function is used to seed the random number generator. It's commonly used at the current time as the seed.</p>
        <pre>
          <code style={{ height: "32vh", marginTop: "10px" }}>
            <p style={{ color: "#F47067" }}>  #include &lt;stdio.h&gt;</p>
            <p style={{ color: "#6CB6FF" }}>  #include &lt;stdlib.h&gt;</p>


            <p style={{ color: "#6CB6FF" }}>   int main() </p>
            <p style={{ color: "#6CB6FF" }}>   srand(time(0));</p>
            <p style={{ color: "#6CB6FF" }}>  int random_number = rand();</p>
            <p style={{ color: "#6CB6FF" }}>   printf("Random Number: %d\\n", random_number);</p>
            <p style={{ color: "#F47067" }}>   return 0;
            </p>

          </code>
        </pre>

        <p>
          <strong> Output:</strong>
          <p>The value of the random number will change with every execution, thanks to the seeding of the random number generator with the current time.</p> </p>
        <p> By using both rand() and srand(), one can generate random numbers efficiently in C, for various purposes.</p>
        <Heading text={"Summary of Approaches"} />
        <p><strong> Using rand() Without Seeding (First Snippet)</strong></p>
        <ul>Pros
          <li> Simple and straightforward to use.</li>
          <li> Useful if you need a deterministic sequence of random numbers across different runs of the program.</li>
        </ul>
        <ul> Cons
          <li> Without seeding, the same sequence of random numbers will be generated every time the program is run.</li>
        </ul>
        <p> <strong> Using rand() with Seeding (srand()) (Second Snippet)</strong></p>
        <ul>Pros
          <li> By seeding with the current time, the random number generator produces different sequences of random numbers on each execution.</li>
          <li>Applicable in most scenarios where random numbers are required.</li>
        </ul>
        <ul> Cons
          <li> The randomness is still pseudo-random, and it might not be suitable for cryptographic purposes.</li>
          <li> Seeding with the current time might lead to the same sequence if the program is executed quickly in succession.</li>
        </ul>
        <p> In summary, using rand() without seeding might be useful in very specific cases where the same sequence is desired, but for most general purposes, using srand() to seed the random number generator is the preferable approach.</p>
      </div>
    </>
  );
}
export default Genrate