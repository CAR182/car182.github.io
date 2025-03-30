import { Artemis, Leonardo, Angier, Iro, Lamora, Nagata, Kira, Dinah } from 'containers';

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chris',
  role: 'Front End Engineer',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Artemis',
    description: 'A ThreeJS experiment into a 3D website',
    sourceCode: 'https://github.com/CAR182/Project-Artemis',
    livePreview: '',
    tile: 'tiles/Artemis_Tile.png',
    banner: 'banners/Artemis_Banner.png',
    reference: {
      name: 'Artemis',
      title: 'Artemis',
      link: 'https://www.goodreads.com/book/show/34928122-artemis',
    },
    get element() {
      return (
        <Artemis
          sourceCode={this.sourceCode}
          live={this.livePreview}
          name={this.name}
          banner={this.banner}
          reference={this.reference}
        />
      );
    },
  },
  // {
  //   name: 'Angier',
  //   sourceCode: 'https://github.com/CAR182/Project-Angier',
  //   livePreview: '',
  //   tile: 'tiles/Angier_Tile.png',
  //   banner: 'banners/Angier_Banner.png',
  //   reference: {
  //     name: 'Robert Angier',
  //     title: 'The Prestige',
  //     link: 'https://www.goodreads.com/book/show/239239.The_Prestige',
  //   },
  //   get element() {
  //     return (
  //       <Angier
  //         sourceCode={this.sourceCode}
  //         live={this.livePreview}
  //         name={this.name}
  //         banner={this.banner}
  //         reference={this.reference}
  //       />
  //     );
  //   },
  // },
  {
    name: 'Iro',
    description: 'A Pokémon style RPG built in React with the JS Canvas',
    sourceCode: 'https://github.com/CAR182/Project-Iro',
    livePreview: 'test',
    tile: 'tiles/Iro_Tile.png',
    banner: 'banners/Iro_Banner.png',
    reference: {
      name: 'Courage Iro',
      title: 'Titan Hoppers',
      link: 'https://www.goodreads.com/book/show/61261449-titan-hoppers',
    },
    get element() {
      return (
        <Iro sourceCode={this.sourceCode} live={this.livePreview} banner={this.banner} reference={this.reference} />
      );
    },
  },

  {
    name: 'Leonardo',
    description: 'Jigsaw puzzle app built in Unity',
    sourceCode: '',
    livePreview: '',
    tile: 'tiles/Leonardo_Tile.png',
    banner: 'banners/Leonardo_Banner.png',
    reference: {
      name: 'Leonardo Da Vinci',
      title: 'Leonardo Da Vinci',
      link: 'https://www.goodreads.com/book/show/34684622-leonardo-da-vinci',
    },
    get element() {
      return (
        <Leonardo
          sourceCode={this.sourceCode}
          live={this.livePreview}
          name={this.name}
          banner={this.banner}
          reference={this.reference}
        />
      );
    },
  },
  {
    name: 'Lamora',
    description: 'Experimenting with ThreeJS & the Slack API',
    sourceCode: 'https://github.com/CAR182/Project-Lamora',
    livePreview: '',
    tile: 'tiles/Lamora_Tile.png',
    banner: 'banners/Lamora_Banner.png',
    reference: {
      name: 'Locke Lamora',
      title: 'The Gentlemen Bastard Sequence',
      link: 'https://www.goodreads.com/series/43531-gentleman-bastard',
    },
    get element() {
      return (
        <Lamora
          sourceCode={this.sourceCode}
          live={this.livePreview}
          name={this.name}
          banner={this.banner}
          reference={this.reference}
        />
      );
    },
  },
  {
    name: 'Nagata',
    description: 'Experimenting with Google Maps 3D data in Blender',
    tile: 'tiles/Nagata_Tile.png',
    banner: 'banners/Nagata_Banner.png',
    reference: {
      name: 'Naomi Nagata',
      title: 'The Expanse',
      link: 'https://www.goodreads.com/series/56399-the-expanse',
    },
    get element() {
      return <Nagata name={this.name} banner={this.banner} reference={this.reference} />;
    },
  },
  {
    name: 'Kira',
    description: 'Disney+ Clone project used for training',
    sourceCode: 'https://github.com/CAR182/Project-Kira',
    tile: 'tiles/Kira_Tile.png',
    banner: 'banners/Kira_Banner.png',
    reference: {
      name: 'Kira',
      title: 'The Mortal Techniques Series',
      link: 'https://www.goodreads.com/series/281543-mortal-techniques',
    },
    get element() {
      return (
        <Kira
          sourceCode={this.sourceCode}
          live={this.livePreview}
          name={this.name}
          banner={this.banner}
          reference={this.reference}
        />
      );
    },
  },
  {
    name: 'Dinah',
    sourceCode: '',
    livePreview: '',
    tile: 'tiles/Dinah_Tile.jpg',
    banner: 'banners/Dinah_Banner.png',
    reference: {
      name: 'Dinah',
      title: 'Alice in Wonderland',
      link: 'https://www.goodreads.com/series/94209-alice-s-adventures-in-wonderland',
    },
    get element() {
      return (
        <Dinah
          sourceCode={this.sourceCode}
          live={this.livePreview}
          name={this.name}
          banner={this.banner}
          reference={this.reference}
        />
      );
    },
  },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
  linkedin: 'https://www.linkedin.com/in/c-rayner',
};

export { about, projects, contact };
