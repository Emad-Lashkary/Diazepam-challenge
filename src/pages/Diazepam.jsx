import BackgroundImage from "../ui/BackgroundImage";
import Header from "../ui/Header";

function Diazepam() {
  const songs = [
    {
      name: "kavakar",
      link: "https://open.spotify.com/album/2Gq0BfIewJqKFk0KncpsMA",
    },
    { name: "jahananm", link: "" },
    { name: "jahanam", link: "" },
  ];

  return (
    <div className="">
      <Header
        link="https://t.me/emdpills"
        color="diazepam"
        type={2}
        songs={songs}
      >
        Diazepam Challenge
      </Header>
      <BackgroundImage src="/diazepam.jpg" color="diazepam" darkness={45} />
    </div>
  );
}

export default Diazepam;
