export type Word = {
  id: string;
  svan: string;
  georgian: string;
  translation: string;
  description: string;
  examples?: string[];
};

export const MOCK_WORDS: Word[] = [
  {
    id: '1',
    svan: 'სგუუა',
    georgian: 'სვანური სიტყვა',
    translation: 'ქართული განმარტება',
    description: 'სიტყვის აღწერა, მნიშვნელობა და გამოყენების მოკლე დემო ტექსტი.',
    examples: ['მაგალითი 1', 'მაგალითი 2', 'მაგალითი 3'],
  },
  {
    id: '2',
    svan: 'მოშგვილო',
    georgian: 'მეორე ჩანაწერი',
    translation: 'თარგმანი',
    description: 'დროებითი აღწერა, მხოლოდ ინტერფეისის შესავსებად.',
    examples: ['დემო ფრაზა', 'დამატებითი ჩანაწერი'],
  },
  {
    id: '3',
    svan: 'ლამარია',
    georgian: 'სახელი',
    translation: 'განმარტება',
    description: 'სავარჯიშო მნიშვნელობა, არაზუსტი ენობრივი მონაცემი.',
  },
  {
    id: '4',
    svan: 'ბახუა',
    georgian: 'დემო სიტყვა',
    translation: 'პირობითი თარგმანი',
    description: 'დროებითი ტექსტი მაკეტის ვიზუალისთვის.',
  },
  {
    id: '5',
    svan: 'ქურაშ',
    georgian: 'ცოცხალი ფრაზა',
    translation: 'ქართული',
    description: 'მხოლოდ მაკეტის ტექსტი, საბოლოო მონაცემები არაა.',
  },
  {
    id: '6',
    svan: 'უშგული',
    georgian: 'ტოპონიმი',
    translation: 'მნიშვნელობა',
    description: 'დამხმარე აღწერა დემონსტრაციისთვის.',
  },
  {
    id: '7',
    svan: 'მულახი',
    georgian: 'სვანური ფორმა',
    translation: 'ქართული ფორმა',
    description: 'ეს ინფორმაცია ნიმუშია და ზუსტობას არ აცხადებს.',
  },
  {
    id: '8',
    svan: 'კალა',
    georgian: 'ტექსტი',
    translation: 'თარგმანი',
    description: 'ბარათების სიისთვის გამოყენებული დროებითი აღწერა.',
  },
];
