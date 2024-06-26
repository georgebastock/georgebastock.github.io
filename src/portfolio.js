const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://georgebastock.github.io/',
  invertedTitle: ' { George ',
  title: 'Bastock }',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'George Bastock',
  role: 'Full Stack Web Dev',
  resume:
    'https://drive.google.com/file/d/1aD89iV7_m88ciFaC1EgcWLanxTzi6HHN/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/george-bastock',
    github: 'https://github.com/georgebastock',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mind Norfolk & Waveney',
    description:
      'Built from the ground up using multiple backend modules within Kentico for mind users to manage finance, tracking clients, raising tickets and more. Mind helps across England and Wales by making mental health an everyday priority.',
    stack: [
      'HTML',
      'SASS',
      'JavaScript',
      'Kentico',
      'ASP.NET',
      'IIS',
      'Git',
      'MVC',
    ],
    sourceCode: '',
    livePreview: 'https://www.norfolkandwaveneymind.org.uk/',
    screenshot: (
      <img src='https://i.imgur.com/J5NRreT.png' alt='Mind Front Page' />
    ),
  },
  {
    name: 'Garden Care',
    description:
      'Aiming to help a wide audience looking for advice on how to deal safely with slugs, weed control in their first garden, concerns about insecticides and bee health, this site hopes to be a valuable and informative resource.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    sourceCode: '',
    livePreview: 'https://garden-care.org.uk/',
    screenshot: (
      <img src='https://i.imgur.com/iNKRV5V.png' alt='Garden Care Front Page' />
    ),
  },
  {
    name: '101 Computers',
    description:
      'Upgraded a local business to be able to book appointments, setup cloud backups, and provide office 365 support all from there website while all content is highly customisable.',
    stack: ['HTML', 'SASS', 'JavaScript', 'Umbraco', 'ASP.NET', 'Bootstrap'],
    sourceCode: '',
    livePreview: 'https://101computers.co.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/yZqUTnG.png'
        alt='101 Computers Front Page'
      />
    ),
  },
  {
    name: 'Saint Francis Xavier Sixth Form',
    description:
      'Made specifically to provide easy to read infomation on all courses the school offers built in mind with a simple to use filter and fast acting search bar',
    stack: ['HTML', 'CSS', 'JavaScript', 'Kentico', 'ASP.NET', 'MySQL', 'IIS'],
    sourceCode: '',
    livePreview: 'https://www.sfx.ac.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/Sb4yMVY.png'
        alt='Saint Francis Front Page'
      />
    ),
  },
  {
    name: 'House Exchange',
    description:
      'House Exchange is the best mutual exchange service for finding a home swap. Features include a secure user login system, property listings and using the full power of Umbraco supports multi language versions.',
    stack: [
      'HTML',
      'SASS',
      'JavaScript',
      'Umbraco',
      'ASP.NET',
      'MySQL',
      'IIS',
      'Git',
      'Bootstrap',
    ],
    sourceCode: '',
    livePreview: 'https://www.houseexchange.org.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/tJuWc1q.png'
        alt='House Exchange Front Page'
      />
    ),
  },
  {
    name: 'Superior Freight',
    description:
      'A company gateway to access many of the services they provide including courier express services, project forwarding ocean freight, air freight road domestic, training bespoke solutions and more.',
    stack: [
      'HTML',
      'SASS',
      'JavaScript',
      'Umbraco',
      '.NET',
      'MySQL',
      'IIS',
      'Git',
    ],
    sourceCode: '',
    livePreview: 'https://supuk.com/',
    screenshot: (
      <img
        src='https://i.imgur.com/xmnCqWT.png'
        alt='Superior Freight Front Page'
      />
    ),
  },
  {
    name: 'Moneyfacts Group',
    description:
      'A business first companion site to go along side the consumer comparison site that acts as a portal to everything analyser related.',
    stack: [
      'HTML',
      'SASS',
      'JavaScript',
      'Umbraco',
      'ASP.NET',
      'MySQL',
      'IIS',
      'Git',
      'Bootstrap',
    ],
    sourceCode: '',
    livePreview: 'https://www.moneyfactsgroup.co.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/tBFIVIF.png'
        alt='Superior Freight Front Page'
      />
    ),
  },
]

const skills = [
  {
    name: 'HTML',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        alt='HTML'
      />
    ),
    icon: <i className='devicon-html5-plain colored' />,
  },
  {
    name: 'CSS/SCSS',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        alt='CSS'
      />
    ),
    icon: <i className='devicon-css3-plain colored' />,
  },
  {
    name: 'JavaScript',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        alt='JavaScript'
      />
    ),
    icon: <i className='devicon-javascript-plain colored' />,
  },
  {
    name: 'React.js',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        alt='React.js'
      />
    ),
    icon: <i className='devicon-react-original colored' />,
  },
  {
    name: 'Git',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        alt='Git'
      />
    ),
    icon: <i className='devicon-git-plain colored' />,
  },
  {
    name: 'Umbraco',
    img: '',
    icon: <i className='devicon-csharp-plain colored' />,
  },
  {
    name: 'ASP.NET',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
        alt='ASP.NET'
      />
    ),
    icon: <i className='devicon-dot-net-plain colored' />,
  },
  {
    name: 'SQL',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
        alt='SQL'
      />
    ),
    icon: <i className='devicon-microsoftsqlserver-plain colored' />,
  },
  {
    name: 'Kentico',
    img: '',
    icon: <i className='devicon-csharp-plain colored' />,
  },
  {
    name: 'Node.js',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        alt='Node.js'
      />
    ),
    icon: <i className='devicon-nodejs-plain colored' />,
  },
  {
    name: 'Azure',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
        alt='SQL'
      />
    ),
    icon: <i className='devicon-azure-plain colored' />,
  },
  {
    name: 'C#',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
        alt='C#'
      />
    ),
    icon: <i className='devicon-csharp-plain colored' />,
  },
]

const contact = {
  // email is optional
  email: 'gbastock@outlook.com',
}

export { header, about, projects, skills, contact }
