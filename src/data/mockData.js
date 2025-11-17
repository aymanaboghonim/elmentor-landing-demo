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
    title: 'Founder Story',
    story: 'Started by a group of mentors and learners, Elmentor is a safe place to collaborate and grow.'
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
