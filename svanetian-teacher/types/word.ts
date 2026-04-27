export type Word = {
  id: string;
  svan: string;
  translation: string;
  description: string;
};

export const MOCK_WORDS: Word[] = [
  { id: '1', svan: 'სსგუა', translation: 'თარგმანი', description: 'სიტყვის აღწერა დემო ტექსტით.' },
  { id: '2', svan: 'მოშგვილო', translation: 'სიტყვა', description: 'სიტყვის აღწერა დემო ტექსტით.' },
  { id: '3', svan: 'ლამარია', translation: 'განმარტება', description: 'სიტყვის აღწერა დემო ტექსტით.' },
  { id: '4', svan: 'ბახუა', translation: 'თარგმანი', description: 'სიტყვის აღწერა დემო ტექსტით.' },
  { id: '5', svan: 'ქურაშ', translation: 'სიტყვა', description: 'სიტყვის აღწერა დემო ტექსტით.' },
  { id: '6', svan: 'უშგული', translation: 'განმარტება', description: 'სიტყვის აღწერა დემო ტექსტით.' },
  { id: '7', svan: 'მულახი', translation: 'თარგმანი', description: 'სიტყვის აღწერა დემო ტექსტით.' },
  { id: '8', svan: 'კალა', translation: 'სიტყვა', description: 'სიტყვის აღწერა დემო ტექსტით.' },
];
