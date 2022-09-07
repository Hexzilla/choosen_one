import { motion } from "framer-motion";

function Utility() {
  const utilityCards = [
    {
      number: "#01",
      imgSrc: "images/utility/NFT1.png",
      title: "WORLD CLASS ART WITH FULL OWNERSHIP",
      detailTable: [
        { key: "ARTWORK", value: "FULL OWNERSHIP" },
        { key: "TOKEN STANDARD", value: "ERC" },
        { key: "BLOCKCHAIN", value: "ETH & SOL" },
      ],
    },
    {
      number: "#02",
      imgSrc: "images/utility/NFT2.png",
      title: "DIGITAL ATM CARD EXCLUSIVE ACCESS TO EVENTS",
      detailTable: [
        { key: "ARTWORK", value: "FULL OWNERSHIP" },
        { key: "TOKEN STANDARD", value: "ERC" },
        { key: "BLOCKCHAIN", value: "ETH & SOL" },
      ],
    },
    {
      number: "#03",
      imgSrc: "images/utility/NFT3.png",
      title: "MONTHLY REWARDS AND GIVEAWAYS",
      detailTable: [
        { key: "DISCORD", value: "GIVEAWAYS" },
        { key: "TWITTER", value: "COMPETITIONS" },
        { key: "BLOCKCHAIN", value: "ETH & SOL" },
      ],
    },
    {
      number: "#04",
      imgSrc: "images/utility/NFT4.png",
      title: "EVENTS, WORKSHOPS & MASTERCLASS",
      detailTable: [
        { key: "EVENTS", value: "UNRIVALLED" },
        { key: "TOKEN STANDARD", value: "ERC111" },
        { key: "BLOCKCHAIN", value: "ETH & SOL" },
      ],
    },
    {
      number: "#05",
      imgSrc: "images/utility/NFT5.png",
      title: "AI DRIVEN AUTOMATION TOOL CREATE TO EARN ACCELERATOR",
      detailTable: [
        { key: "ARTWORK", value: "FULL OWNERSHIP" },
        { key: "TOKEN STANDARD", value: "ERC" },
        { key: "BLOCKCHAIN", value: "ETH & SOL" },
      ],
    },
    {
      number: "#06",
      imgSrc: "images/utility/NFT6.png",
      title: "CASCADE TAX PLATFORM",
      detailTable: [
        { key: "EVENTS", value: "UNRIVALLED" },
        { key: "TOKEN STANDARD", value: "ERC111" },
        { key: "BLOCKCHAIN", value: "ETH & SOL" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-5/6 md:flex md:flex-col mx-auto md:mt-10">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-7xl">UTILITY</h1>
          <p className="md:text-2xl pt-6 pb-6">
            We took the time to curate a specific set of utility items to
            benefit our community in a multifaceted way.
          </p>
        </div>
        <div className="flex flex-wrap">
          {utilityCards.map((card) => (
            <div className="relative  my-8 mr-auto border-stone-50 border-2 flex-col flex w-[430px]">
              <img src={card.imgSrc} alt="" width={430} />
              <div className="flex w-full  pb-4 absolute bottom-0 pl-2 backdrop-blur-xl">
                <div className="flex flex-col">
                  <h1 className="w-5/6 py-2 font-semibold">{card.title}</h1>
                  <table className="text-sm">
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

                <h1 className="text-3xl md:text-7xl font-bold ml-auto mr-1">
                  {card.number}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Utility;
