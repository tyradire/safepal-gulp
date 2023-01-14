const feedback = [
  {
    describe: `SafePal is a successful company incubated from the first Binance Labs Incubation Program. The team has strong cumulation in both technology and products and shows tenacity when the market is in the downturn. Veronica is a female CEO that has successfully built a mass-scale web3 product. I'm very impressed by her and the whole team.`,
    avatar: ('./images/avatar-1.jpg'),
    name: 'He Yi',
    info: 'Binance Co-founder & CMO'
  },
  {
    describe: `SafePal is quickly becoming the ultimate solution for all crypto holders and traders. I've been enjoying all the products from the hardware wallet to the wallet extension. Having everything seamlessly working together is brilliant!`,
    avatar: ('./images/avatar-2.jpg'),
    name: 'Charlie Shrem',
    info: 'Co-Founder of Bitcoin Foundation'
  },
  {
    describe: 'Notably, SafePal allows for buying and swapping within the SafePal App, hooks into CEX like Binance, and provides powerful DApp support for DeFi with Uniswap and Compound. Perfect for DeFi traders.',
    avatar: ('./images/avatar-3.jpg'),
    name: 'Forbes',
    info: ''
  },
  {
    describe: `It's rare to see a company like SafePal that provides such comprehensive products and service offerings in one place. It is truly the only wallet you need.`,
    avatar: ('./images/avatar-4.jpg'),
    name: 'Eric Chen',
    info: 'Founder of Injective Protocol'
  },
  {
    describe: `I'm a SafePal user myself and I'm often impressed by the rapid product iterations the SafePal team has been delivering and the well-thought UX design that is built into every product details. It is one of the best crypto wallets and you should definitely consider getting one.`,
    avatar: ('./images/avatar-5.jpg'),
    name: 'Terry Tai',
    info: 'Co-founder of Nervos'
  },
  {
    describe: `SafePal has built a wallet that combines advanced security and seamless user experience together. It has truly lowered the hurdle of users onboarding to DeFi, NFT and the whole Web3 ecosystem.`,
    avatar: ('./images/avatar-6.jpg'),
    name: 'Yenwen',
    info: 'Founder of Perpetual Protocol'
  },
  {
    describe: `Your keys are safe on the device, because there is no bluetooth, no WiFi, and no NFC. There is no connection really happening.`,
    avatar: ('./images/avatar-7.jpg'),
    name: 'Hashoshi',
    info: 'Crypto Expert'
  },
  {
    describe: `You are good to go with a SafePal S1 Hardware Wallet anywhere at anytime.`,
    avatar: ('./images/avatar-8.jpg'),
    name: 'Crypto Fiend',
    info: 'Crypto Expert'
  },
  {
    describe: `This wallet is just the best one, you can access all DApp , trade on binance spot trading and manage a lot of differents blockchains, all tokens erc20 , Bep, TRC xlm and neo tokens are availables. So good, i think its the most secure hardware wallet with the qrcode scanning option to broadcast transactions. The private key still offline and no connection required ! Thanks this is an amazing product !`,
    avatar: ('./images/avatar-9.jpg'),
    name: 'Mat',
    info: 'SafePal User'
  },
  {
    describe: `The box came in sealed, the unit was shipped directly from safepal and I know that from the shipping label.This is an amazing value for the money easy to use, before you send your crypto into it making sure it use it and reset it a few time to make sure that the 12 phrases you wrote down were correct and your passcodes are all working as it should.The mobile app is amazing and it really gives you the power of decentralization and privacy and security.`,
    avatar: ('./images/avatar-10.jpg'),
    name: 'Nour Halawani',
    info: 'SafePal User'
  },
  {
    describe: `SafePal S1 is exactly the wallet that every crypto owner should have!It's slim, have a clean design, good brightness to the front screen with good resolution, good camera at the back and without forgetting the safety of the system! I'll recommend it to everyone!`,
    avatar: ('./images/avatar-11.jpg'),
    name: 'Olivier.L',
    info: 'SafePal User'
  },
  {
    describe: `SafePal is a successful company incubated from the first Binance Labs Incubation Program. The team has strong cumulation in both technology and products and shows tenacity when the market is in the downturn. Veronica is a female CEO that has successfully built a mass-scale web3 product. I'm very impressed by her and the whole team.`,
    avatar: ('./images/avatar-1.jpg'),
    name: 'He Yi',
    info: 'Binance Co-founder & CMO'
  },
  {
    describe: `SafePal is quickly becoming the ultimate solution for all crypto holders and traders. I've been enjoying all the products from the hardware wallet to the wallet extension. Having everything seamlessly working together is brilliant!`,
    avatar: ('./images/avatar-2.jpg'),
    name: 'Charlie Shrem',
    info: 'Co-Founder of Bitcoin Foundation'
  },
  {
    describe: 'Notably, SafePal allows for buying and swapping within the SafePal App, hooks into CEX like Binance, and provides powerful DApp support for DeFi with Uniswap and Compound. Perfect for DeFi traders.',
    avatar: ('./images/avatar-3.jpg'),
    name: 'Forbes',
    info: ''
  },
  {
    describe: `It's rare to see a company like SafePal that provides such comprehensive products and service offerings in one place. It is truly the only wallet you need.`,
    avatar: ('./images/avatar-4.jpg'),
    name: 'Eric Chen',
    info: 'Founder of Injective Protocol'
  },
  {
    describe: `I'm a SafePal user myself and I'm often impressed by the rapid product iterations the SafePal team has been delivering and the well-thought UX design that is built into every product details. It is one of the best crypto wallets and you should definitely consider getting one.`,
    avatar: ('./images/avatar-5.jpg'),
    name: 'Terry Tai',
    info: 'Co-founder of Nervos'
  },
]

const template = document.getElementById('slide-template');
const container = document.querySelector('.trust__slide-container');

const createSlide = (describe, avatar, name, info) => {
  const newSlide = template.content.querySelector('.trust__slide-item').cloneNode(true);
  const slideDescribe = newSlide.querySelector('.trust__describe');
  const slideAvatar = newSlide.querySelector('.trust__avatar');
  const slideName = newSlide.querySelector('.trust__name');
  const slideInfo = newSlide.querySelector('.trust__info');
  slideDescribe.textContent = describe;
  slideAvatar.src = avatar;
  slideName.textContent = name;
  slideInfo.textContent = info;
  return newSlide;
}

feedback.forEach(function(item) {
  container.append(createSlide(item.describe, item.avatar, item.name, item.info));
})
