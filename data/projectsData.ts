interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Trillion Trees Movement',
    description: `World Economic Forum's 1 Trillion Trees initiative`,
    imgSrc: '/static/images/1t.avif',
    href: 'https://www.1t.org/home',
  },
]

export default projectsData
