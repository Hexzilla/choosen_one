import { motion } from "framer-motion";
import Circle from "./Circle";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-black">
        <div className="flex justify-center">
          <Circle width={520} height={520}></Circle>
          <img
            className="-ml-4 z-10"
            width={
              visualViewport.width > 700
                ? visualViewport.width / 4
                : visualViewport.width / 3
            }
            src="images/about/Lady-1 1.png"
            alt=""
          />
          <img
            className="-ml-4 z-10"
            width={
              visualViewport.width > 700
                ? visualViewport.width / 4
                : visualViewport.width / 3
            }
            src="images/about/image 1.png"
            alt=""
          />
          <img
            className="-ml-4 z-10"
            width={
              visualViewport.width > 700
                ? visualViewport.width / 4
                : visualViewport.width / 3
            }
            src="images/about/dudde 1.png"
            alt=""
          />
        </div>
        <div className="mt-8 z-20">
          <article className="md:w-2/3 w-5/6 mx-auto">
            <div className="pb-16">
              <h1 className="md:text-4xl text-3xl pb-8">WHO ARE WE?</h1>
              <p className="pb-6">
                Innovative, progressive and inspirational, The Chosen Ones look
                to redifine the approach of real world utility by drawing on
                years of collective knowledge and experience while striving to
                build a culture driven identity.
              </p>
              <p className="pb-6">
                Our purpose, vision, and attitude guide the way we run our
                company, how we work with our partners, and how we engage with
                our community. They define who we are.
              </p>
            </div>
            <div className="pb-16">
              <h1 className="md:text-4xl text-3xl pb-8">OUR VISION</h1>
              <p className="pb-6">
                The Chosen One’s vision is to inspire, educate and entertain you
                in ways you never thought possible and knew you needed. We want
                to build a community that encourages and supports one another
                through all walks of life, and a network that helps them get
                there.
              </p>
              <p className="pb-6">
                Using our industry connections and business experience, we will
                partner up with some of the biggest names across multiple
                industries to give back to our community. The NFT space is
                contiously evolving but one thing that will always remain
                constant in our vision and beliefs, is educating others in the
                hopes of providing knowledge and success into their lives.
              </p>
            </div>
            <div className="pb-16">
              <h1 className="md:text-4xl text-3xl pb-8">OUR MISSION</h1>
              <p className="pb-6">
                Using our industry connections and business experience, we will
                partner up with some of the biggest names across multiple
                industries to give back to our community. The NFT space is
                contiously evolving but one thing that will always remain
                constant in our vision and beliefs, is educating others in the
                hopes of providing knowledge and success into their lives.
              </p>
            </div>
            <div className="pb-16">
              <h1 className="md:text-4xl text-3xl pb-8">OUR STRATEGY</h1>
              <ol className="list-decimal ml-4">
                <li>
                  We will continue to grow The Chosen One’s brand globally
                  through a variety of partnerships, collaborations and by
                  bringing value to our community and the NFT space as a whole.
                </li>
                <li>
                  We will continue to invest in inspiring and educating as many
                  people as we can. Through NFT’s, we have the power and
                  opportunities to change lives.
                </li>
                <li>
                  Our strategy is all about changing at pace, inspiring and
                  innovating for the future with a passion and vision for our
                  community and industry.
                </li>
              </ol>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
