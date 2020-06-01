const movies = [
  {
    name: "Love 101",
    categories: ["Heartfelt", "Emotional", "Teens"],
    description: "Love asldashdjah",
    video: "https://www.youtube.com/watch?v=EINTw8RecjI",
    target: "18+",
    seasons: 1,
    release: 2020,
    match: 99,
    starring: ["Pınar Deniz", "Kubilay Aka", "Mert Yazıcıoğlu"],
    genres: ["Teen Tv Shows", "Tv Dramas"],
    cover:
      "https://www.thecinemaholic.com/wp-content/uploads/2020/04/love-1010.jpg",
  },
  {
    name: "Money Heist",
    categories: ["Suspenseful", "Exciting", "Thriller"],
    description: "Nine robbers try to pull off hte greatest heist",
    video: "https://www.youtube.com/watch?v=p_PJbmrX4uk",
    target: "16+",
    seasons: 4,
    release: 2020,
    match: 78,
    starring: ["Ursula Corbero", "Alvaro Morte", "Itziar Ituno"],
    genres: ["Spanish Tv Shows", "Tv Thrillers"],
    cover:
      "https://streamingwars.com/wp-content/uploads/2020/04/Screenshot-2020-04-03-at-23.02.00-700x300.png",
  },
  {
    name: "Never Have I Ever",
    categories: ["Suspenseful", "Exciting", "Thriller"],
    description:
      "After a traumatic year, an Indian teen just wants to spruce up her social status",
    video: "https://www.youtube.com/watch?v=HyOCCCbxwMQ",
    target: "16+",
    seasons: 1,
    release: 2020,
    match: 95,
    starring: ["Maitreiy Ramakrishnan", "Alvaro Morte", "Itziar Ituno"],
    genres: ["Teen Tv Shows", "Tv Thrillers"],
    cover:
      "https://specials-images.forbesimg.com/imageserve/5eaacfc6165a170006a6044b/960x0.jpg?fit=scale",
  },
  {
    name: "EXTRACTION",
    categories: ["Violent", "Gritty", "Forceful"],
    description:
      "A hardened mercenary's mission becomes a soul-searching race to survive",
    video: "https://www.youtube.com/watch?v=L6P3nI6VnlY",
    target: "16+",
    seasons: 1,
    release: 2020,
    match: 98,
    starring: ["Chris Hemsworth", "Rudhraksh Jaiswal", "Randeep Hooda"],
    genres: [
      "Movies Based On Books",
      "Actions and Adventures",
      "Action Thrillers",
    ],
    cover:
      "https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/qbzgtg3lgarfreyo_1585626271.jpeg?tr=w-812,h-464",
  },
  {
    name: "FRIENDS",
    categories: ["Violent", "Gritty", "Forceful"],
    description:
      "This hit sitcom follows the merry misadventures of six 20-something pals...",
    video: "https://www.youtube.com/watch?v=hDNNmeeJs1Q",
    target: "13+",
    seasons: 10,
    release: 2003,
    match: 98,
    starring: ["Jennifer Anniston", "Courteney Cox", "Lisa Kudrow"],
    genres: ["Sitcoms", "US TV Shows", "TV Comedies"],
    cover:
      "https://i.pinimg.com/originals/4b/c5/ba/4bc5bad1486ce68d2ea241c0e3c928b3.jpg",
  },
  {
    name: "Elite",
    categories: ["Suspensful"],
    description:
      "When a three working class enrol in an exclusive private school in spain...",
    video: "https://www.youtube.com/watch?v=uZ0nDpVJ7rk",
    target: "16+",
    seasons: 3,
    release: 2020,
    match: 98,
    starring: ["Dana Paola", "Itzan Escamilla", "Miguel Bernardeu"],
    genres: ["Crime", "TV Dramas", "Teen TV Shows"],
    cover:
      "https://news.otakukart.com/wp-content/uploads/2020/01/Elite-Season-3-scaled.jpeg",
  },
  {
    name: "LAST DANCE",
    categories: ["Feel Good", "Exciting"],
    description: "This docuseries gives an definitive account of Michael...",
    video: "https://www.youtube.com/watch?v=Peh9Yqf1GXc",
    target: "16+",
    seasons: 1,
    release: 2020,
    match: 98,
    starring: ["Michael Jordan", "Scottie Pipen", "Dennis Rodman"],
    genres: ["Social & cultural Docs", "Sport Documentaries"],
    cover:
      "https://www.thesportsgeek.com/wp-content/uploads/2020/04/jordan-last-dance-doc-image-1-1280x720.jpg",
  },
  {
    name: "The Vampire Diaries",
    categories: ["Feel Good", "Exciting"],
    description: "Trapped in adolescent bodies...",
    video: "https://www.youtube.com/watch?v=BmVmhjjkN4E",
    target: "16+",
    seasons: 8,
    release: 2017,
    match: 98,
    starring: ["Nina Dobrev", "Paul Wersley", "Dennis Rodman"],
    genres: ["Social & cultural Docs", "Sport Documentaries"],
    cover:
      "https://i.pinimg.com/originals/ac/58/2f/ac582f7d4f25b68cacaa04bc1ae7c745.jpg",
  },

  {
    name: "The Protector",
    categories: ["Suspensful", "Exciting", "Romantic"],
    description:
      "Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.",
    video: "https://www.youtube.com/watch?v=80dqOwAOhbo",
    target: "18+",
    seasons: 3,
    release: 2020,
    match: 99,
    starring: ["Çağatay Ulusoy", "Ayça Ayşin Turan", "Hazar Ergüçlü"],
    genres: ["Fantasy TV Shows", "TV Shows Based on Books", "TV Thrillers"],
    cover: "https://miro.medium.com/max/3840/1*t35JGGE-TqXKEj9lCvUW7w.jpeg",
  },

  {
    name: "El Dragon-Return of the warrior",
    categories: ["Exciting"],
    description:
      "To replace his grandfather as head of a cartel, a Tokyo financier returns to his home country of Mexico, where he must battle two rivals for control.",
    video: "https://www.youtube.com/watch?v=h-ScBupZV8k",
    target: "18+",
    seasons: 2,
    release: 2020,
    match: 85,
    starring: ["Sebastián Rulli", "Renata Notni", "Roberto Mateos"],
    genres: ["Crime TV Dramas", "Mexican TV Shows", "Latin American TV Shows"],
    cover: "https://miro.medium.com/max/4000/1*jSLTGkRhc1EH_aUhUMv5_w.jpeg",
  },

  //////////////////////////////////////////////

  {
    name: "The Witcher",
    categories: ["Exciting"],
    description:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    video: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
    target: "18+",
    seasons: 1,
    release: 2020,
    match: 99,
    starring: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    genres: ["Fantasy TV Shows", "TV Shows Based on Books", "TV Dramas"],
    cover:
      "https://www.imgbase.info/images/safe-wallpapers/video_games/the_witcher_3/52895-the_witcher_3_wallpaper.jpg",
  },

  {
    name: "The Ritual",
    categories: ["Chilling", "Ominous", "Scary"],
    description:
      "Four friends with a long-standing -- but strained -- connection take a hiking trip into the Swedish wilderness, from which they may never return.",
    video: "https://www.youtube.com/watch?v=Vfugwq2uoa0",
    target: "18+",
    // seasons: //
    release: 2018,
    match: 85,
    starring: ["Arsher Ali", "Rob James-Collier", "Rafe Spall"],
    genres: ["British Movies", "Movies Based on Books", "Horror Movies"],
    cover:
      "https://i.pinimg.com/originals/4d/42/e8/4d42e8127f9753fdf1076427cbe9d910.jpg",
  },

  {
    name: "How to get away with a murderer",
    categories: ["Suspenseful"],
    description:
      "Brilliant criminal defense attorney and law professor Annalise Keating, plus five of her students, become involved in a twisted murder case.",
    video: "https://www.youtube.com/watch?v=buUuev4yu_8",
    target: "18+",
    seasons: 5,
    release: 2018,
    match: 99,
    starring: ["Viola Davis", "Billy Brown", "Alfred Enoch"],
    genres: ["Crime TV Dramas", "Social Issue TV Dramas", "TV Mysteries"],
    cover: "https://wallpapercave.com/wp/wp2198828.jpg",
  },

  {
    name: "Teen Wolf",
    categories: ["Suspenseful", "Exciting"],
    description:
      "An animal bite turns a high schooler into a werewolf and he suddenly becomes a star athlete and chick magnet. But he also faces a new set of problems.",
    video: "https://www.youtube.com/watch?v=EGbO0C_RUCQ",
    target: "18+",
    seasons: 6,
    release: 2017,
    match: 93,
    starring: ["Tyler Posey", "Crystal Reed", "Dylan O'Brien"],
    genres: ["TV Dramas", "Teen TV Shows", "TV Horror"],
    cover:
      "https://mtv.mtvnimages.com/apps/series-art/teen-wolf/TeenWolf_Season6B_AppSeriesImages_16x9.png",
  },

  {
    name: "Iron Fist",
    categories: ["Suspenseful", "Exciting"],
    description:
      "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
    video: "https://www.youtube.com/watch?v=kvvWB0GwCek",
    target: "16+",
    seasons: 2,
    release: 2018,
    match: 93,
    starring: ["Finn Jones", "Jessica Henwick", "David Wenham"],
    genres: ["Crime TV Dramas", "TV Shows Based on Comics", "TV Dramas"],
    cover: "https://wallpapercave.com/wp/wp3914160.jpg",
  },

  {
    name: "Freud",
    categories: ["Suspenseful", "Dark"],
    description:
      "Eager to make his name in 19th-century Vienna, a hungry young Sigmund Freud joins a psychic and an inspector to solve a string of bloody mysteries.",
    video: "https://www.youtube.com/watch?v=VQfcZ9Ak2nU",
    target: "18+",
    seasons: 1,
    release: 2020,
    match: 90,
    starring: ["Robert Finster", "Ella Rumpf", "Georg Friedrich"],
    genres: ["Crime TV Dramas", "TV Mysteries", "Period Pieces"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BMWU4ZDEzZDAtNzJmYS00Mjg1LWFlZjMtYWE4YjMwZGI5NzI3XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },

  {
    name: "The Originals",
    categories: ["Suspenseful", "Exciting"],
    description:
      "The Mikaelsons move to New Orleans and form an alliance with local witches in an effort to rule the city once again in this 'Vampire Diaries' spinoff.",
    video: "https://www.youtube.com/watch?v=7XEQqaV_dTM",
    target: "16+",
    seasons: 5,
    release: 2020,
    match: 93,
    starring: ["Joseph Morgan", "Daniel Gillies", "Phoebe Tonkin"],
    genres: ["TV Shows Based on Books", "TV Dramas", "TV Thrillers"],
    cover:
      "https://i.pinimg.com/originals/21/14/fe/2114fef7cedf9be834f19e2af85ae1db.jpg",
  },

  {
    name: "Shadow Hunters",
    categories: ["Exciting"],
    description:
      "The life of typical teen Clary Fray is upended when she learns that she's part of a race of demon-hunting humans who have the blood of angels.",
    video: "https://www.youtube.com/watch?v=bgiyCUI-0Bo",
    target: "18+",
    seasons: 4,
    release: 2019,
    match: 89,
    starring: ["Katherine McNamara", "Dominic Sherwood", "Alberto Rosende"],
    genres: ["Fantasy TV Shows", "Sci-Fi TV", "TV Shows Based on Books"],
    cover:
      "https://www.nerdsandbeyond.com/wp-content/uploads/2018/03/shadowhunters-season-3-e1521401049458.jpg",
  },

  {
    name: "The Flash",
    categories: ["Adrenaline", "Exciting"],
    description:
      "A forensics expert who wakes from a coma with amazing new powers squares off against forces threatening the city in this live-action superhero romp.",
    video: "https://www.youtube.com/watch?v=Yj0l7iGKh8g",
    target: "16+",
    seasons: 4,
    release: 2018,
    match: 93,
    starring: ["Grant Gustin", "Candice Patton", "Danielle Panabaker"],
    genres: ["TV Action & Adventure", "Sci-Fi TV", "TV Shows Based on Comics"],
    cover: "https://wallpaperaccess.com/full/222143.jpg",
  },

  {
    name: "Resurrection Ertugrul",
    categories: ["Adrenaline", "Suspenseful", "Forceful"],
    description:
      "When a good deed unwittingly endangers his clan, a 13th-century Turkish warrior agrees to fight a sultan's enemies in exchange for new tribal land.",
    video: "https://www.youtube.com/watch?v=Yj0l7iGKh8g",
    target: "16+",
    seasons: 5,
    release: 2018,
    match: 92,
    starring: ["Engin Altan Düzyatan", "Serdar Gökhan", "Hülya Darcan"],
    genres: ["TV Action & Adventure", "Period Pieces", "TV Action & Adventure"],
    cover:
      "https://www.itl.cat/pngfile/big/57-576110_ergual-is-one-of-the-best-turkish-shows.jpg",
  },

  //////////////////////////////////////////////////////////////////////////
  {
    name: "Triple Frontier",
    categories: ["Gritty", "Suspenseful", "Exciting"],
    description:
      "Loyalties are tested when five former special forces operatives reunite to steal a drug lord's fortune, unleashing a chain of unintended consequences.",
    video: "https://www.youtube.com/watch?v=Fo3yRLLrXQA",
    target: "18+",
    //  seasons: 5,//
    release: 2019,
    match: 90,
    starring: ["Ben Affleck", "Oscar Isaac", "Charlie Hunnam"],
    genres: [
      "Action & Adventure",
      "Blockbuster Action & Adventure",
      "Action Thrillers",
    ],
    cover: "https://wallpapercave.com/wp/wp4393359.jpg",
  },

  {
    name: "Colombiana",
    categories: ["Gritty", "Forceful"],
    description:
      "After seeing Bogota gangsters murder her parents, Cataleya Restrepo turns herself into a ruthless assassin, dedicated to tracking down their killers.",
    video: "https://www.youtube.com/watch?v=HCxPLlFWdFo",
    target: "18+",
    //  seasons: 5,//
    release: 2011,
    match: 88,
    starring: ["Zoe Saldana", "Jordi Mollà", "Lennie James"],
    genres: ["Action & Adventure", "French Movies", "Action Thrillers"],
    cover: "https://cdn.hipwallpaper.com/i/81/63/xvjFw7.jpg",
  },

  {
    name: "The Equalizer",
    categories: ["Violent", "Dark"],
    description:
      "Ex-CIA agent-turned-vigilante Robert McCall uses his deadly skills once again to avenge the death of a close friend and former colleague.",
    video: "https://www.youtube.com/watch?v=HyNJ3UrGk_I",
    target: "18+",
    //  seasons: 5,//
    release: 2018,
    match: 80,
    starring: ["Denzel Washington", "Pedro Pascal", "Ashton Sanders"],
    genres: [
      "Action & Adventure",
      "Crime Action & Adventure",
      "Action Thrillers",
    ],
    cover: "https://images.hdqwalls.com/wallpapers/the-equalizer-2-4k-0u.jpg",
  },

  {
    name: "John Wick 2",
    categories: ["Violent", "Forceful", "Dark"],
    description:
      "Forced to honor a debt from his past life, John Wick assassinates a target he has no wish to kill, then faces betrayal at the hands of his sponsor.",
    video: "https://www.youtube.com/watch?v=XGk2EfbD_Ps",
    target: "18+",
    //  seasons: 5,//
    release: 2017,
    match: 78,
    starring: ["Keanu Reeves", "Common", "Laurence Fishburne"],
    genres: [
      "Action & Adventure",
      "Crime Action & Adventure",
      "Action Thrillers",
    ],
    cover: "https://wallpaperaccess.com/full/1842590.jpg",
  },

  {
    name: "6 Underground",
    categories: ["Adrenaline Rush", "Exciting"],
    description:
      "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
    video: "https://www.youtube.com/watch?v=YLE85olJjp8",
    target: "18+",
    //  seasons: 5,//
    release: 2019,
    match: 96,
    starring: ["Ryan Reynolds", "Mélanie Laurent", "Corey Hawkins"],
    genres: [
      "Action & Adventure",
      "Blockbuster Action & Adventure",
      "Action Thrillers",
    ],
    cover:
      "https://movie.idevcreations.com/wp-content/uploads/2019/12/eFw5YSorHidsajLTayo1noueIxI.jpg",
  },

  {
    name: "The Irishman",
    categories: ["Gritty", "Forceful"],
    description:
      "Hit man Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese.",
    video: "https://www.youtube.com/watch?v=RS3aHkkfuEI",
    target: "16+",
    seasons: 5,
    release: 2019,
    match: 86,
    starring: ["Robert De Niro", "Al Pacino", "Joe Pesci"],
    genres: ["Movies Based on Books", "Crime Movies", "Gangster Movies"],
    cover: "https://images6.alphacoders.com/105/1055781.jpg",
  },

  {
    name: "The Outsider",
    categories: ["Ominous", "Violent"],
    description:
      "An American soldier imprisoned in postwar Japan enters the dark world of the yakuza, adopting their way of life in repayment for his freedom.",
    video: "https://www.youtube.com/watch?v=eNDKWr3Xmjk",
    target: "18+",
    seasons: 5,
    release: 2019,
    match: 86,
    starring: ["Jared Leto", "Tadanobu Asano", "Kippei Shiina"],
    genres: ["Crime Dramas", "Crime Movies", "Gangster Movies"],
    cover:
      "https://images.wallpapersden.com/image/download/the-outsider-4k_69537_3840x2160.jpg",
  },

  {
    name: "The Momentum",
    categories: ["Forceful", "Violent"],
    description:
      "After her identity is revealed during her final heist, ace thief Alex finds herself hunted by a relentless assassin hired by a corrupt U.S. senator.",
    video: "https://www.youtube.com/watch?v=0pbsqakNL1c",
    target: "18+",
    seasons: 5,
    release: 2015,
    match: 90,
    starring: ["Olga Kurylenko", "James Purefoy", "Morgan Freeman"],
    genres: ["Crime Movies", "African Movies"],
    cover:
      "https://cdn1.thr.com/sites/default/files/2015/10/momentum_still_1_-h_2015.jpg",
  },

  {
    name: "Extraction",
    categories: ["Forceful", "Violent", "Gritty"],
    description:
      "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
    video: "https://www.youtube.com/watch?v=M_o2z9jU_VE",
    target: "18+",
    seasons: 5,
    release: 2015,
    match: 98,
    starring: ["Chris Hemsworth", "Rudhraksh Jaiswal", "Randeep Hooda"],
    genres: ["Movies Based on Books", "Crime Movies", "Action & Adventure"],
    cover: "https://wallpaperaccess.com/full/2660647.jpg",
  },
  {
    name: "American Assasin",
    categories: ["Forceful", "Violent"],
    description:
      "After grad student Mitch Rapp suffers a tragic loss during a terrorist attack, his single-minded thirst for vengeance catches the interest of the CIA.",
    video: "https://www.youtube.com/watch?v=y76-yj2kvWw",
    target: "18+",
    seasons: 5,
    release: 2017,
    match: 88,
    starring: ["Dylan O'Brien", "Michael Keaton", "Sanaa Lathan"],
    genres: ["Movies Based on Books", "Action Thrillers", "Action & Adventure"],
    cover:
      "https://lionsgate.brightspotcdn.com/1f/35/a4f602ee4fc3b1a87279e70112f9/americanassassin-background-02.jpg",
  },
];
