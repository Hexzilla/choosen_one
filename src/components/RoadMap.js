import { motion } from "framer-motion";

function RoadMap() {
  const roadMapCards = [
    {
      cardNumber: "01",
      phaseString: "PHASE 1",
      title: "Digital currency",
      subtitle: "From Discord to the MetaVerse",
      paras: [
        `From day one, we will be implementing a digital currency developed within Discord, that will translate to the metaverse and all marketplace items added from The Chosen Ones.`,
        `This allows our community, and our active, avid members who
        believe in the project, to earn this digital currency that
        they can then go on to use for specific giveaways, raffles,
        and metaverse items.`,
        `Those who get in early will receive an often overused OG
        member role, but we will ensure this has true meaning by
        giving them access to our future master classes, events, and
        merchandise should they hold onto at least one of the NFT’s
        they mint.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
    {
      cardNumber: "02",
      phaseString: "PHASE 2",
      title: "Launchine the collection",
      subtitle: "8,888 Chosen Ones are Released into the MetaVerse",
      paras: [
        `The day of mint is here for our Whitelist holders and we cannot wait to see the amazing collections revealed to the world. Months and months of endless refinement, sleepless nights, blood, sweat and tears all coming to life on this very day and we can’t thank our amazing community enough.`,
        `Our Whitelist mint will allow up to 3 NFT’s to be purchased per wallet, with the public mint following 42 hours later.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
    {
      cardNumber: "03",
      phaseString: "PHASE 3",
      title: "Digital ATM Card",
      subtitle: "Stake, Earn, Get Rewarded ",
      paras: [
        `This is something we are quite excited about and gives our holders and stakers the opportunity to earn passive income monthly on cashback rewards. The more you spend, the better your monthly rewards sent right back into your nomiated wallet.`,
        `Not only are we rewarding you as mentioned above, but depending on the numbers of NFT’s you have from our collection and how many are staked will increase your % of earnings and rewards, how awesome is that?`,
        `For our most loyal and dedicated holders, after a certain period of time we will send out a custom engraved card with your choice of wording and NFT, lasered into the metal card in a variety of colours which we will later release on the website and socials.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
    {
      cardNumber: "04",
      phaseString: "PHASE 4",
      title: "End of Year Event + Create to Earn Accelerator Program",
      subtitle: "The True Value of Chosen Ones ",
      paras: [
        `This is where the true value of The Chosen Ones lays. Ever since a young age Michael Pieri (Founder & CEO) has always been about empowering others, supporting those in need, and building others up in the areas he had experience in to provide more confidence to the individual. The Chosen Ones is a way Michael can continue to do this on a much larger scale, in others words globally.`,
        `To kick of stage 4 of our roadmap we will be hosting a 2 day event with our partners over at Club 14. The itinerary is yet to be released but expect world class speakers, entreprneurs, real estate gurus, investment and crypto experts, musicians, food, drinks, and much more. Everything will be provided by Nine Lives and Club 14 and will be the biggest event of the year, so don’t miss out.`,
        `Following this event will be the release of our Accelerator Program - Create to Earn. We will have an application process for anyone to apply where we will carefully select the top few businesses and/or individuals based on very specific criteria only known to us. We want you to apply for this application with everything you’ve got, we want no stone left unturned. After we have selected the winning applicants, we will then begin the meetings and planning process to see how we can further assist your ideas from funding, training, advising, and more.`,
        `“Give a Man a Fish, and You Feed Him for a Day. Teach a Man To Fish, and You Feed Him for a Lifetime”. This rings true to everything Michael and his team are about and with this program not only will we help fund or develop your ideas, we will ensure that educating you across all facets of business ownership, leadership, taxes and more to ensure your future success once you leave our program.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
    {
      cardNumber: "05",
      phaseString: "PHASE 5",
      title: "Accelerator Part 2",
      subtitle: "Launch of DAO Accelerator for Holders ",
      paras: [
        `Launch of the DAO Accelerator program where you as Token holders decide which projects we will bring on to help educate and build, in turn providing you with passive income. For the holders who have multiple pieces from our collection, are stakers, and also hold a digital card, you will have more power and priority in voting rights than others.`,
        `The DAO governance structure we will set in place will help The Chosen Ones gain valuable information on which projects have the most potential according to the community.`,
        `To be able to participate in the decision-making process, one needs to vote on a project by using tokens that can be earned via staking or holding our Digital ATM Card. Holders are only able to vote for one project per wallet. The projects that receive the most votes are then selected for the accelerator program introduction call. We will then decide whether or not all the required materials and plans are set in place for the utmost success of the project, therefore, resulting in greater yield for our holders.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
    {
      cardNumber: "06",
      phaseString: "PHASE 6",
      title: "Cascade",
      subtitle: "The True Value of Chosen Ones ",
      paras: [
        `This is where the true value of The Chosen Ones lays. Ever since a young age Michael Pieri (Founder & CEO) has always been about empowering others, supporting those in need, and building others up in the areas he had experience in to provide more confidence to the individual. The Chosen Ones is a way Michael can continue to do this on a much larger scale, in others words globally.`,
        `To kick of stage 4 of our roadmap we will be hosting a 2 day event with our partners over at Club 14. The itinerary is yet to be released but expect world class speakers, entreprneurs, real estate gurus, investment and crypto experts, musicians, food, drinks, and much more. Everything will be provided by Nine Lives and Club 14 and will be the biggest event of the year, so don’t miss out.`,
        `Following this event will be the release of our Accelerator Program - Create to Earn. We will have an application process for anyone to apply where we will carefully select the top few businesses and/or individuals based on very specific criteria only known to us. We want you to apply for this application with everything you’ve got, we want no stone left unturned. After we have selected the winning applicants, we will then begin the meetings and planning process to see how we can further assist your ideas from funding, training, advising, and more.`,
        `“Give a Man a Fish, and You Feed Him for a Day. Teach a Man To Fish, and You Feed Him for a Lifetime”. This rings true to everything Michael and his team are about and with this program not only will we help fund or develop your ideas, we will ensure that educating you across all facets of business ownership, leadership, taxes and more to ensure your future success once you leave our program.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
    {
      cardNumber: "07",
      phaseString: "PHASE 7",
      title: "Digital ATM Card",
      subtitle: "Stake, Earn, Get Rewarded ",
      paras: [
        `This is something we are quite excited about and gives our holders and stakers the opportunity to earn passive income monthly on cashback rewards. The more you spend, the better your monthly rewards sent right back into your nomiated wallet.`,
        `Not only are we rewarding you as mentioned above, but depending on the numbers of NFT’s you have from our collection and how many are staked will increase your % of earnings and rewards, how awesome is that?`,
        `For our most loyal and dedicated holders, after a certain period of time we will send out a custom engraved card with your choice of wording and NFT, lasered into the metal card in a variety of colours which we will later release on the website and socials.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
    {
      cardNumber: "08",
      phaseString: "PHASE 8",
      title: "Digital ATM Card",
      subtitle: "Stake, Earn, Get Rewarded ",
      paras: [
        `This is something we are quite excited about and gives our holders and stakers the opportunity to earn passive income monthly on cashback rewards. The more you spend, the better your monthly rewards sent right back into your nomiated wallet.`,
        `Not only are we rewarding you as mentioned above, but depending on the numbers of NFT’s you have from our collection and how many are staked will increase your % of earnings and rewards, how awesome is that?`,
        `For our most loyal and dedicated holders, after a certain period of time we will send out a custom engraved card with your choice of wording and NFT, lasered into the metal card in a variety of colours which we will later release on the website and socials.`,
      ],
      imgsrc: "images/roadmap/roamap-1.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" md:flex md:flex-col mx-auto md:mt-10">
        <div className="flex flex-col w-5/6 mx-auto">
          <h1 className="text-5xl md:text-7xl">ROADMAP</h1>
        </div>
        <div className="flex flex-wrap mt-10">
          {roadMapCards.map((card, index) => (
            <div
              className={`flex flex-col md:flex-row w-5/6 md:w-2/3 mb-10 mx-auto ${
                index % 2 === 1 ? "bg-[#006F57]" : "bg-[#8D99AE]"
              }`}
            >
              <div className="md:w-1/2  m-3 md:ml-16">
                <h1 className="md:text-7xl text-5xl md:pb-16 font-bold">
                  {card.cardNumber}
                </h1>
                <article>
                  <h2 className="font-thin">{card.phaseString}</h2>
                  <h2>{card.title}</h2>
                  <h3 className="italic font-thin">{card.subtitle}</h3>
                  {card.paras.map((para) => (
                    <p className="pt-4">{para}</p>
                  ))}
                </article>
              </div>
              <img
                src={card.imgsrc}
                alt=""
                width={368}
                className="pr-4 md:p-0 max-h-[450px] my-auto mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default RoadMap;
