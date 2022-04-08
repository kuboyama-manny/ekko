import Images from '../assets/images';

export const howItWorksData = [
  {
    imageUrl: Images.userIcon,
    title: 'Join ekko',
    description: 'Download and subscribe to ekko and every time you use your ekko card you spread good vibes. Every five transactions will pay for one ocean bound plastic bottle to be collected. Every fifty transactions will pay for a tree to be planted.',
    mobileDescription: 'Subscribe to ekko and every 5 transactions on your card will pay for one ocean bound plastic bottle to be collected. Every 50 transactions will plant a tree for you.'
  },
  {
    imageUrl: Images.cupIcon,
    title: 'Live Your Life',
    description: 'You carry on living your life, but with ekko every coffee, book, weekly shop and tap of the card is one more towards you planting a forest and collecting thousands of ocean bound plastic bottles. Change the world without doing anything different.',
    mobileDescription: 'Every coffee, book and weekly shop spreads good vibes. Change the world without doing anything different.',
  },
  {
    imageUrl: Images.treeIcon,
    title: 'See your impact',
    description: 'Watch your tree count and bottle count grow in your ekko app. Monitor your carbon footprint via your carbonmeter linked to every puchase. Shop in our enviroconomy marketplace of sustainable products and services.',
    mobileDescription: 'Track your own forest, bottle count and alongside your own carbon footprint in the ekko app. Shop in our sustainable marketplace called the enviroconomy.',
  },
];

export const treesData = [
  {
    imageUrl: Images.masterCard,
    title: 'Partnership with Mastercard',
    description: 'ekko has partnered with Mastercard to launch in the UK and soon Europe. We’re proud of our partnership and how we’ll allow our customers to  make a real difference.',
    mobileDescription: 'ekko has partnered with Mastercard to launch in the UK and soon Europe.',
  },
  {
    imageUrl: Images.plantIcon,
    title: 'Priceless planet coalition',
    description: 'Trees are planted in partnership with the Mastercard priceless planet coalition. Each tree is maintained to make sure they have the biggest possible impact.',
    mobileDescription: 'Trees are planted and maintained in partnership with the Mastercard priceless planet coalition',
  },
  {
    imageUrl: Images.plasticIcon,
    title: 'Ocean bound plastics',
    description: 'We are partnered with Prevented Ocean Plastic who will clean our world of plastic bottles thanks to the impact our customers will make when using ekko',
    mobileDescription: 'We are partnered with Prevented Ocean Plastic who will clean our world of plastic bottles',
  },
];

export const faqs = [
  {
    question: 'When are you launching?',
    answer: 'Our first customers will join ekko in June. Those on the waitlist will get first access.'
  },
  {
    question: 'I’ve joined the waitlist, how will I know when I can download the app?',
    answer: 'We’ll email you when your turn is up with a special code. We’re going to launch on a first-come first-serve basis so the sooner you join the waitlist, the better.'
  },
  {
    question: 'What do I need to do to make a difference using ekko?',
    answer: 'Nothing. Simply use the ekko debit card and app and we’ll do the rest. You’ll be able to see the impact you personally are making in the ekko app.'
  },
  {
    question: 'How safe is my money?',
    answer: 'Money with ekko isn’t used to lend like they do in banks, we think this is a good thing as we keep nice and safe in a special account with your name on it. This bit can get technical, so we’ll make sure it’s all very clear in our T&Cs'
  },
  {
    question: 'How do I contact the ekko team?',
    answer: 'We love to chat! Email us at hello@enviroconomy.io'
  }
]

export const waitlistErrors = {
  '500': {
    title: 'Oops, looks like this link has expired',
    description: 'No sweat, you just need to re-enter your details',
  },
  '409': {
    title: 'Oops, looks like you’re already on the waitlist',
    description: 'Look out for an email from us and we’ll let you know when it’s your turn to start changing the world',
  },
}
