import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Dynage Research",
  DESCRIPTION: "Welcome to Dynage Research, a portfolio and blog for designers and developers.",
  AUTHOR: "Dynage Technologies",
}

export const LOGO = {
  LIGHT: "https://res.cloudinary.com/dk0pompea/image/upload/v1739251032/dynage/logo/research02_mqayim.svg",
  DARK: "https://res.cloudinary.com/dk0pompea/image/upload/v1739251031/dynage/logo/research01_duhtky.svg",
  alt: "Dynage Research Logo",
}

// Work Page
export const WORK: Page = {
  TITLE: "Roadmap and Timeline",
  DESCRIPTION: "Our Research Roadmap.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics our researchers are passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects we have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Roadmap and Timeline", 
    HREF: "/roadmap", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@dynage.technology",
    HREF: "mailto:hello@dynage.technology",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "dynage-engineering",
    HREF: "https://github.com/dynage-engineering/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Dynage Technologies",
    HREF: "https://www.linkedin.com/company/dynage/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Dynage Technologies",
    HREF: "https://twitter.com/_dynage",
  },
]

