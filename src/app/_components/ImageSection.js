import Image from "next/image";

function ImageStyle({ img }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        boxShadow: "20px 20px 20px grey",
        border: "10px solid white",
        borderRadius: "12px",
      }}
    >
      <Image src={img} width={400} height={460} alt="pet image" priority />
    </div>
  );
}

export function ImageLeftSection({ img, text }) {
  return (
    <div >
      {/* <div className="my_container"> */}
        <div className="split_reverse" style={{ overflowX: "hidden" }}>

          <div style={{padding:"40px"}}>
            <h2 className="text-white italic">{text}</h2>
          </div>
          <div style={{ padding: "0px 40px" }}>
            <ImageStyle img={img} />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export function ImageRightSection({ img, text }) {
  return (
    <section>
      <div className="my_container">
        <div className="split_reverse" style={{ overflowX: "hidden" }}>
          <div>
            <p className="text-white italic">{text}</p>
          </div>

          <div>
            <div className="image_space"></div>
            <ImageStyle img={img} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImageLeftSectionBullets({ img, bullets }) {
  return (
      <div className="my_container">
        <div className="split_reverse" style={{ overflowX: "hidden" }}>
          <div style={{ padding: "40px" }}>
            <Image
              src={img}
              width={500}
              height={500}
              alt="pet image"
              priority
            />
          </div>

          <div style={{ padding: "40px" }}>
            <div style={{ borderRadius: "10%",padding:"40px" }}>
              {bullets.map((item, index) => (
                <div key={index}>
                  <p className="text-white ">• {item}</p>
                  <br></br>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export function ImageRightSectionBullets({ img, bullets }) {
  return (
      <div className="my_container">
        <div className="split_reverse" style={{ overflowX: "hidden" }}>


          <div style={{ padding: "40px" }}>
            <div style={{ borderRadius: "10%",padding:"40px" }}>
              {bullets.map((item, index) => (
                <div key={index}>
                  <p className="text-white ">• {item}</p>
                  <br></br>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "0px 0px" }}>
            <Image
              src={img}
              width={500}
              height={500}
              alt="pet image"
              priority
            />
          </div>
        </div>
    </div>
  );
}


