import React from "react";
import "./Utility.css";
import { motion } from "framer-motion";
import useProgressiveImg from "../hooks/useProgressiveImg";

const utilityCards = [
  {
    number: "#01",
    imgSrc: "images/utility/NFT1.jpg", //https://choosen-ones-dev.netlify.app/
    title: "WORLD CLASS ART WITH FULL OWNERSHIP",
    detailTable: [
      { key: "ARTWORK", value: "FULL OWNERSHIP" },
      { key: "TOKEN STANDARD", value: "ERC" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
  },
  {
    number: "#02",
    imgSrc: "images/utility/NFT2.jpg",
    title: "DIGITAL ATM CARD EXCLUSIVE ACCESS TO EVENTS",
    detailTable: [
      { key: "ARTWORK", value: "FULL OWNERSHIP" },
      { key: "TOKEN STANDARD", value: "ERC" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
  },
  {
    number: "#03",
    imgSrc: "images/utility/NFT3.jpg",
    title: "MONTHLY REWARDS AND GIVEAWAYS",
    detailTable: [
      { key: "DISCORD", value: "GIVEAWAYS" },
      { key: "TWITTER", value: "COMPETITIONS" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
  },
  {
    number: "#04",
    imgSrc: "images/utility/NFT4.jpg",
    title: "EVENTS, WORKSHOPS & MASTERCLASS",
    detailTable: [
      { key: "EVENTS", value: "UNRIVALLED" },
      { key: "TOKEN STANDARD", value: "ERC111" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
  },
  {
    number: "#05",
    imgSrc: "images/utility/NFT5.jpg",
    title: "AI DRIVEN AUTOMATION TOOL CREATE TO EARN ACCELERATOR",
    detailTable: [
      { key: "ARTWORK", value: "FULL OWNERSHIP" },
      { key: "TOKEN STANDARD", value: "ERC" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
  },
  {
    number: "#06",
    imgSrc: "images/utility/NFT6.jpg",
    title: "CASCADE TAX PLATFORM",
    detailTable: [
      { key: "EVENTS", value: "UNRIVALLED" },
      { key: "TOKEN STANDARD", value: "ERC111" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
  },
];

const UtilityCard = ({ card }) => {
  const [src, blur] = useProgressiveImg(
    "images/utility/tiny.jpg",
    card.imgSrc
  );

  return (
    <div className="relative flex-col flex w-full">
      <div className="border-stone-30 border-2 relative">
        <div style={{ minHeight: "658px" }}>
          <img
            src={src}
            className="w-full"
            style={{
              filter: blur ? "blur(20px)" : "none",
              transition: blur ? "none" : "filter 0.3s ease-out",
            }}
            alt="Utility"
          />
        </div>
        <div className="flex pb-4 absolute bottom-0 pl-2 backdrop-blur-xl w-full">
          <div className="flex flex-col">
            <h1 className="w-5/6 py-2 font-semibold">{card.title}</h1>
            <table className="text-xs">
              {card.detailTable.map((row) => (
                <tr>
                  <td className="pr-3 font-extralight opacity-100">
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
    </div>
  );
};

const Utility = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-5/6 md:flex md:flex-col mx-auto md:mt-10"
        style={{ paddingBottom: "100px" }}
      >
        <div className="flex flex-col">
          <h1 className="title">UTILITY</h1>
          <p className="text pt-6 pb-6">
            We took the time to curate a specific set of utility items to
            benefit our community in a multifaceted way.
          </p>
        </div>
        <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-24 md:gap-20 mt-8">
          {utilityCards.map((card) => (
            <UtilityCard card={card}></UtilityCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Utility;
