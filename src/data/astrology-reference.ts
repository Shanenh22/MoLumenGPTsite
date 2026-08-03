export const planets = [
  ['☉','Sun','identity, vitality, purpose','the drive to become and create'],
  ['☽','Moon','feeling, habit, belonging','the need for safety and response'],
  ['☿','Mercury','thinking, language, exchange','the way information moves'],
  ['♀','Venus','attraction, value, relationship','the way we connect and appreciate'],
  ['♂','Mars','action, assertion, desire','the way energy pursues and separates'],
  ['♃','Jupiter','growth, meaning, confidence','the urge to expand and understand'],
  ['♄','Saturn','structure, limits, responsibility','the work of endurance and definition'],
  ['♅','Uranus','disruption, liberation, innovation','the impulse toward radical change'],
  ['♆','Neptune','imagination, permeability, ideals','the dissolving pull of image and longing'],
  ['♇','Pluto','power, depth, transformation','the pressure toward profound change'],
];

export const signs = [
  ['♈','Aries','cardinal fire','direct, initiating, immediate'],
  ['♉','Taurus','fixed earth','steady, embodied, preserving'],
  ['♊','Gemini','mutable air','curious, connecting, adaptable'],
  ['♋','Cancer','cardinal water','protective, responsive, containing'],
  ['♌','Leo','fixed fire','expressive, sustaining, radiant'],
  ['♍','Virgo','mutable earth','discerning, practical, refining'],
  ['♎','Libra','cardinal air','relational, balancing, deliberative'],
  ['♏','Scorpio','fixed water','penetrating, private, committed'],
  ['♐','Sagittarius','mutable fire','exploratory, meaning-seeking, candid'],
  ['♑','Capricorn','cardinal earth','strategic, accountable, constructive'],
  ['♒','Aquarius','fixed air','systemic, independent, future-facing'],
  ['♓','Pisces','mutable water','imaginative, receptive, unifying'],
];

export const houses = [
  ['1','Self and approach'],['2','Resources and values'],['3','Learning and local environment'],
  ['4','Home and foundations'],['5','Creation and pleasure'],['6','Work, service, and maintenance'],
  ['7','Partnership and encounter'],['8','Shared resources and transformation'],['9','Worldview and wider horizons'],
  ['10','Vocation and public direction'],['11','Community, allies, and hopes'],['12','Retreat, closure, and the unseen'],
];

export const aspects = [
  { name:'Conjunction', symbol:'☌', angle:0, beginner:'Two functions occupy the same degree area and become strongly combined.', experienced:'The planets’ natures, condition, sign, house, and phase determine whether the union is cooperative or difficult.', expert:'Judge copresence versus degree-based conjunction, orb policy, bodily application, reception, and solar phase.' },
  { name:'Sextile', symbol:'⚹', angle:60, beginner:'Two functions have an opportunity to cooperate through compatible elements.', experienced:'A sextile often describes access or potential that becomes more useful through participation and choice.', expert:'Traditional doctrine treats the sextile as Venus-like; evaluate sign-based configuration, dexter or sinister direction, and reception.' },
  { name:'Square', symbol:'□', angle:90, beginner:'Two functions create pressure that asks for action, adjustment, or skill.', experienced:'Squares can generate friction and productivity. Their expression depends more on the planets and context than a simple “bad” label.', expert:'Assess modality, angularity, overcoming, application, reception, and whether the square perfects without prohibition.' },
  { name:'Trine', symbol:'△', angle:120, beginner:'Two functions flow readily through signs of the same element.', experienced:'Ease can describe talent and support, but also patterns that operate automatically and receive less conscious attention.', expert:'Traditional doctrine treats the trine as Jupiter-like; include sect, sign relationship, reception, and the condition of both planets.' },
  { name:'Opposition', symbol:'☍', angle:180, beginner:'Two functions face one another and seek awareness, balance, or negotiation.', experienced:'Oppositions may be experienced through relationships or polarities that require both sides to be recognized.', expert:'Examine application, reception, house axis, overcoming where relevant, and how the faster planet carries or separates from the contact.' },
];

export const traditionalConditions: Record<string, {domicile:string[]; detriment:string[]; exaltation:string[]; fall:string[]}> = {
  Sun:{domicile:['Leo'],detriment:['Aquarius'],exaltation:['Aries'],fall:['Libra']},
  Moon:{domicile:['Cancer'],detriment:['Capricorn'],exaltation:['Taurus'],fall:['Scorpio']},
  Mercury:{domicile:['Gemini','Virgo'],detriment:['Sagittarius','Pisces'],exaltation:['Virgo'],fall:['Pisces']},
  Venus:{domicile:['Taurus','Libra'],detriment:['Scorpio','Aries'],exaltation:['Pisces'],fall:['Virgo']},
  Mars:{domicile:['Aries','Scorpio'],detriment:['Libra','Taurus'],exaltation:['Capricorn'],fall:['Cancer']},
  Jupiter:{domicile:['Sagittarius','Pisces'],detriment:['Gemini','Virgo'],exaltation:['Cancer'],fall:['Capricorn']},
  Saturn:{domicile:['Capricorn','Aquarius'],detriment:['Cancer','Leo'],exaltation:['Libra'],fall:['Aries']},
};

export const calculatedAspects = [
  {name:'Conjunction',symbol:'☌',angle:0,orb:8},{name:'Semi-sextile',symbol:'⚺',angle:30,orb:2},
  {name:'Semi-square',symbol:'∠',angle:45,orb:2},{name:'Sextile',symbol:'⚹',angle:60,orb:5},
  {name:'Quintile',symbol:'Q',angle:72,orb:2},{name:'Square',symbol:'□',angle:90,orb:7},
  {name:'Trine',symbol:'△',angle:120,orb:7},{name:'Sesquisquare',symbol:'⚼',angle:135,orb:2},
  {name:'Quincunx',symbol:'⚻',angle:150,orb:3},{name:'Opposition',symbol:'☍',angle:180,orb:8},
];
