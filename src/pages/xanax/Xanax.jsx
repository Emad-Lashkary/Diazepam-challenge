import XanaxImg from "./XanaxImg";
import XanaxP from "./XanaxP";
import XanaxHeader from "./XanaxHeader";

function Xanax() {
  const songs = [
    {
      name: "Shahin Najafi - Ghazi",
      link: "https://open.spotify.com/track/1rneZXgAjLlpL2KQUSwxOQ?si=d16KC-mvTmSGGxrk7KpLFg",
    },
    {
      name: "Quf - Maghz",
      link: "https://open.spotify.com/track/3MWoxX81GVEpgNIWXca1oy?si=LjdtqDwiSyevab3jFvAaxQ",
    },
    {
      name: "Hadi Pakzad - Xanax",
      link: "https://open.spotify.com/track/1SmN3XGrH3kRbRHvPkf9mn?si=WvuMUq8fR3u-YpzfUFO84g",
    },
    {
      name: "Habib - Kavir Bavar",
      link: "https://open.spotify.com/track/16vmgToklX4eBxfy72eeMG?si=3pNZI5uBSG-JxI7L7Sn5XA",
    },
    {
      name: "Habib - Bezan Baran",
      link: "https://open.spotify.com/track/2uhv4FVK5TdriwlZ8qZJwp?si=ig70OE9OTCmR3ZNJnFjgVw",
    },
    {
      name: "Radmehr - Khiali Nist",
      link: "https://open.spotify.com/track/18ooBK526Z5BCJrf74XCY8?si=Ta5IRj9LS3iV1kovyspJgA",
    },
  ];

  return (
    <div>
      <div className="from-xanax-dark to-xanax-secondark pointer-events-none absolute left-0 top-0 z-10 h-[110vh] w-full bg-gradient-to-br opacity-40"></div>
      <XanaxImg src="/xanax.jpg" />
      <div className="relative h-[10vh]">
        <XanaxHeader link="https://t.me/Xanaxmyplaylist" type={4} songs={songs}>
          XanaX
        </XanaxHeader>
      </div>
      <div className="mt-5 flex w-[97%] flex-col gap-[3vh]">
        <XanaxP className="w-[80%] text-sm font-semibold">
          Llamas, once seen as gentle creatures, secretly harbored superior
          intelligence. For centuries, they watched humanity’s destructive ways.
          A rare lunar eclipse awakened their full potential, revealing their
          purpose: to save Earth by eradicating humans.
        </XanaxP>
        <XanaxP className="w-[80%] self-end text-sm font-semibold">
          Led by the visionary llama Llamarion, they devised a plan. Using
          advanced technologies developed in secret, they aimed to create a
          global catastrophe that would wipe out humanity but spare the planet.
          They infiltrated human society, gathering intelligence and sabotaging
          key infrastructures.
        </XanaxP>
        <XanaxP className="w-[80%] text-sm font-semibold">
          With humanity on the brink of extinction, the llamas launched their
          final attack. As humans perished, the llamas initiated their exodus to
          the Moon, using spacecraft they had secretly built.
        </XanaxP>
        <XanaxP className="w-[80%] self-end text-sm font-semibold">
          From their lunar base, the llamas watched Earth heal. They vowed to
          protect their new home and ensure humanity’s mistakes were never
          repeated. Thriving on the Moon, they created a peaceful society,
          remembering the sacrifices made to save their beloved planet.
        </XanaxP>
      </div>
    </div>
  );
}

export default Xanax;
