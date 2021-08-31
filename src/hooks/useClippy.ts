import React from 'react';
import clippyjs from 'clippyjs';
import { useWindowSize } from './useWindowSize';

const shittyTips = [
  `If you glue a dead wasp to the palm of your hand, you can hit your boss on the back of the head as hard as you like and act like you saved him.`,
  `Make your edibles in the shape of dog treats and take them anywhere you want. If a drug dog finds them, his handler will just think he's being a silly boy.`,
  `Keep hydrated at work. You'll need to take a lot of bathroom breaks. This will make up for all the breaks smokers get. Might as well double up and start smoking`,
  `Koalas have a 20% chance of being infected with Chlamydia with many more carrying the disease. If you are harboring koala refugees from the Australian bushfires, and you cheated on your spouse and got chlamydia, use this as an excuse.`,
  `If you plan on going to prison, learn to cut hair. Barbers are greatly appreciated by other inmates and you’ll likely be spared when it comes to prison violence`,
  `Need friends? Create an attractive fake tinder profile of the opposite sex, start leading on a bunch of people, arrange a date with all of them on the same time, same place. Show up as well. Announce that they must have pulled a prank on all of you and suggest you all go drinking together.`,
  `Tell your friends that you've made them a partial life insurance beneficiary. They'll feel obligated to do the same for you, and will only find out you lied if you die first.`,
  `Starting a new job? No matter what the reality is you now have four, alive grandparents`,
  `Don't get caught by your boss reading news or sports articles on your computer at work. Quickly copy the content of the article into an email and read it from there. Your boss will think you are dealing with an intensive email and will leave you alone.`,
  `If you’re driving next to a cop with drugs in your car and are trying to act normal, pick your nose. Your body language shows you aren’t concerned with anyone around you. The last thing you’d ever do if you were paranoid about a cop next to you is pick you nose.`,
  `When ordering ice cream, always ask for a single scoop. However, when the server is finished, say, “Actually I’d like a second scoop.” This forces them into matching the size of the first scoop, which tends to be bigger, since it was for a single cone.`,
  `If you work at a place that offers surveys on the receipts (fast food, grocery, etc), pocket all of the receipts that customers decline and fill them out with really positive comments about yourself, or really negative comments about your co-workers that you don't like`,
  `Break off the end of any random key in your possession and use it as a prop/proof as to why your late for any obligation (work, social, family) by telling them "My stupid key broke off in my door. Had to call a locksmith/landlord."`,
  `A little paint on the visor of a riot helmet will render them entirely useless.`,
  `Need a phone and/or cash? Volunteer to clean up after a big concert. People tend to lose their stuff there.`,
  `Leave negative reviews for your gym to deter people from joining and overcrowding the place.`,
  `Find and befriend your co-workers that don't drink, because if there's ever a work function with drink tickets, you can try to get theirs.`,
  `Win internet arguments by editing your comments after your opponent has responded to completely change what you said and making it look like your opponent has no idea what they're talking about.`,
  `Just lie about having a college degree. Companies rarely check, and the only consequence if they do is not getting hired.`,
  `Pick up any business cards you see lying around. If you ever do something like ding someone's car, hand them one and say all your contact details are on there.`,
  `Create a frozen seafood company called Fresh Off the Boat so that restaurants which buy from you can claim their seafood is fresh off the boat. You charge a premium over other frozen food suppliers but they pay less than buying fresh.`,
  `If you are tired at work, just lie down on the floor at random places and sleep. When your coworkers wake you up, they are gonna be really kind and helpful because they think you have fainted. If you play it really well, you can get the rest of the day too.`,
  `Use the "send at a specific time" feature on most email platforms to make it look like you're working at all hours of the day when emailing/cc'ing your boss`,
  `Moving and sad to lose access to your reliable drug dealer? Report them to crime stoppers and collect the reward money for their arrest`,
  `Want a cigarette but don‘t have any, ask a stranger if you can buy one from them. Most people will laugh and give you one for free and you will come off as a nice person.`,
  `Want a good performance review/promotion without having to put in a ton of extra work? Switch the office coffee out for decaf without telling anyone.`,
  `90% of the time, when you hold something out in your hand and say "here", the person in front of you will take it without even thinking about it. Use this to get people to throw away your trash.`,
  `Keep a handful of sand in your pocket so you can throw it in someone's eyes in case you need a couple of extra seconds to escape.`,
  `Put liquor in a bottle of cough syrup so you can take shots at work without anyone noticing. As a bonus, everyone will think you're sick, so they won't want to interact with you.`,
  `If you work in retail and your company has a rewards program, after a customer says they don’t have an account enter your own info to get the points/rewards.`,
  `Gift your enemies, their partners, or their children the starter set for an expensive, time-consuming hobby. They'll waste time and money and thank you for it.`,
  `Heading to an event that allows you to bring food, but not alcohol? Two cans of beer fit nicely in a Pringles can under a deceiving layer of chips.`,
  `If you want better service at a restaurant, bring a notebook and semi-surreptitiously take notes on your experience. The staff will think that you're a restaurant critic and prioritise your service.`,
  `When sending viruses through email, design your email to look like a major corporation’s advertisement, and then put your virus in the “unsubscribe” link.`,
  `You don't have to pay for your meal if you're forcibly removed from the restaurant`,
  `When checking out always try codes like “test”, “test1”, etc. when checking out. Most sites forget to add time frames to test discounts allowing them to always be active`,
];

export const useClippy = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [clippy, setClippy] = React.useState<any>();
  const windowSize = useWindowSize();

  React.useEffect(() => {
    clippyjs.load(
      'Clippy',
      agent => {
        agent.show();
        agent.speak(shittyTips[Math.floor(Math.random() * shittyTips.length)]);

        setClippy(agent);
      },
      undefined,
      '/assets/win98/'
    );
  }, []);

  React.useEffect(() => {
    if (!clippy) {
      return;
    }
    const randomTip = () =>
      shittyTips[Math.floor(Math.random() * shittyTips.length)];
    const randomWidth = () =>
      Math.floor(Math.random() * windowSize.width - 100);
    const randomHeight = () =>
      Math.floor(Math.random() * windowSize.height - 50);

    const handle = setInterval(() => {
      clippy.animate();
      clippy.moveTo(randomWidth(), randomHeight());
      clippy.speak(randomTip());
    }, 5000);

    return () => clearInterval(handle);
  }, [clippy, windowSize]);
};
