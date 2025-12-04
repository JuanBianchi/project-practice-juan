export interface ArticleData {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
}

export const articles: ArticleData[] = [
    {
        id: 1,
        title: 'Understanding SOLID Principles',
        summary:
            'SOLID principles are a set of design principles that help developers write maintainable and scalable code. Learn how to apply them in your React projects.',
        content: `
      <p>SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.</p>
      <h3>Single Responsibility Principle (SRP)</h3>
      <p>A class or module should have one, and only one, reason to change.</p>
      <h3>Open/Closed Principle (OCP)</h3>
      <p>Software entities should be open for extension, but closed for modification.</p>
      <h3>Liskov Substitution Principle (LSP)</h3>
      <p>Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.</p>
      <h3>Interface Segregation Principle (ISP)</h3>
      <p>Many client-specific interfaces are better than one general-purpose interface.</p>
      <h3>Dependency Inversion Principle (DIP)</h3>
      <p>Depend upon abstractions, [not] concretions.</p>
    `,
        date: '2023-10-27',
        author: 'Juan Bianchi',
    },
    {
        id: 2,
        title: 'The Power of Tailwind CSS',
        summary:
            'Tailwind CSS is a utility-first CSS framework that allows you to build modern websites rapidly. Discover why it is becoming the go-to choice for many developers.',
        content: `
      <p>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
      <p>It's fast, flexible, and reliable. With zero runtime, you get all the benefits of a utility-first framework without the bloat.</p>
    `,
        date: '2023-11-05',
        author: 'Juan Bianchi',
    },
    {
        id: 3,
        title: 'Building Responsive Layouts',
        summary:
            "Creating responsive web applications is crucial in today's mobile-first world. Explore techniques and best practices for building layouts that work on any device.",
        content: `
      <p>Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen sizes and viewports.</p>
      <p>Using CSS media queries, flexbox, and grid layouts are essential techniques for modern responsive design.</p>
    `,
        date: '2023-11-12',
        author: 'Juan Bianchi',
    },
    {
        id: 4,
        title: 'Next.js 14 Features',
        summary:
            'Next.js 14 brings exciting new features like Server Actions and partial prerendering. Dive into what makes this release a game-changer for full-stack React development.',
        content: `
      <p>Next.js 14 introduces Server Actions, which allow you to define functions that run on the server and can be called directly from your components.</p>
      <p>It also includes performance improvements and a more stable App Router.</p>
    `,
        date: '2023-11-20',
        author: 'Juan Bianchi',
    },
];

export function getArticleById(id: number): ArticleData | undefined {
    return articles.find((article) => article.id === id);
}
