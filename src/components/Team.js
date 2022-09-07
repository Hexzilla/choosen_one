import { motion } from "framer-motion";

function Team() {
  const utilityCards = [
    {
      imgSrc: "images/team/mem1.png",
      title: "MICHAEL PIERI",
      subtitle: "HEAD OF MARKETING",
      detailTable: [
        { key: "EXPERIENCE", value: "REAL ESTATE AGENT, BUSINESS OWNER" },
        { key: "SOCIALS", value: "TWITTER, LINKEDIN, YOUTUBE, INSTAGRAM" },
        { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
      ],
    },
    {
      imgSrc: "images/team/mem2.png",
      title: "ISAAC WIESENTHAL",
      subtitle: "CHIEF MARKETING OFFICER",
      detailTable: [
        { key: "EXPERIENCE", value: "COMPETETIVE BOXER, MARKETING GENIUS" },
        { key: "SOCIALS", value: "LINKEDIN, INSTAGRAM" },
        { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
      ],
    },
    {
      imgSrc: "images/team/mem3.png",
      title: "MICHAEL PIERI",
      subtitle: "FOUNDER & CEO",
      detailTable: [
        { key: "EXPERIENCE", value: "REAL ESTATE, BUSINESS OWNER" },
        { key: "SOCIALS", value: "TWITTER, LINKEDIN, YOUTUBE, INSTAGRAM" },
        { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
      ],
    },
    {
      imgSrc: "images/team/mem4.png",
      title: "MANON",
      subtitle: "LEAD ARTIST",
      detailTable: [
        { key: "EXPERIENCE", value: "ARTIST" },
        { key: "SOCIALS", value: "LINKEDIN, INSTAGRAM" },
        { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
      ],
    },
    {
      imgSrc: "images/team/mem5.png",
      title: "ANIS AMRANE",
      subtitle: "LEAD ARTIST",
      detailTable: [
        { key: "EXPERIENCE", value: "ARTIST" },
        { key: "SOCIALS", value: "LINKEDIN, INSTAGRAM" },
        { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" md:flex md:flex-col w-5/6 mx-auto md:mt-10">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-7xl">TEAM</h1>
          <p className="md:text-2xl pt-6 pb-6">
            A big old spiel about our utility.
          </p>
        </div>
        <div className="flex flex-wrap">
          {utilityCards.map((card) => (
            <div className="relative  my-8 md:mr-24 border-stone-50 border-2 flex-col flex w-[400px]">
              <img src={card.imgSrc} alt="" width={400} />
              <div className="flex w-full  pb-4 absolute bottom-0 pl-2 backdrop-blur-xl">
                <div className="flex flex-col">
                  <h1 className="w-5/6 pt-2 font-semibold">{card.title}</h1>
                  <h2 className="pb-2">{card.subtitle}</h2>
                  <table className="text-xs">
                    {card.detailTable.map((row) => (
                      <tr>
                        <td className="pr-10 font-extralight opacity-50">
                          {row.key}
                        </td>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Team;
