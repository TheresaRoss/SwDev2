export default function Card() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          filter: "brightness(53%) ",
          backgroundImage: `url('/vaccine.webp')`,
          zIndex: -1,
          top: 0,
        }}
        className='image'
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "50px",
          alignItems: "center",
          height: "50vh",
        }}
      >
        ประชาสัมพันธ์การให้บริการวัคซีน
      </div>
    </>
  );
}
