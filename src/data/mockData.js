// Mock content used during development and by components when i18n keys are not sufficient
const mock = {
  hero: {
    title: 'Elmentor Program',
    subtitle: 'A mentorship community for growth',
    cta: 'Join Now'
  },
  about: {
    title: 'About Elmentor',
    description: 'Elmentor brings learners and mentors together to share knowledge and projects — open to all skill levels.'
  },
  circles: [
    { id: 'design', title: 'Design Circle', summary: 'Designers sharing patterns, feedback, and portfolios' },
    { id: 'dev', title: 'Developer Circle', summary: 'Developers collaborating on projects and helpers' },
    { id: 'product', title: 'Product Circle', summary: 'Product and UX conversations for growth' }
  ],
  activities: [
    { id: 'workshop', title: 'Intro to Design Systems', date: '2025-12-01' },
    { id: 'talk', title: 'Web Performance Talk', date: '2026-01-15' }
  ],
  founder: {
    title: 'About the Founder',
    name: 'Mohamed Radwan',
    role: 'Microsoft DevOps MVP, Founder — DevOps Visions & Elmentor Program',
    image: 'https://raw.githubusercontent.com/ElmentorProgram/elmentorprogram.github.io/main/assets/founder/mohamed_radwan.jpg',
    story: `Mohamed Radwan is a Microsoft DevOps MVP with over 24 years of experience in the tech industry. He's worked with more than 60 global enterprises and focuses on DevOps, Azure, Agile, and GitHub. Mohamed is passionate about automation and community contributions, and he founded DevOps Visions and the Elmentor Program to empower professionals through mentorship, collaborative knowledge sharing, and hands-on projects.`
  },
  news: [
    { id: 'n1', date: '2025-11-10', title: 'Elmentor Launch — Welcome!' },
    { id: 'n2', date: '2026-01-06', title: 'First Project Showcase' }
  ],
  contact: {
    title: 'Join & Contact',
    nojs: 'Please enable JavaScript to submit the form, or email us directly.'
  }
}

export default mock
