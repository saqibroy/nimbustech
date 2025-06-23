// data.js

const companyInfo = {
    name: "Nimbus Solutions",
    email: "info@nimbussolutions.com",
    phoneNumber: "+1 (555) 123-4567" // Placeholder
};

const teamMembers = [
    {
        name: "Zaman Bajwa",
        title: "Senior Backend Developer",
        initials: "ZB",
        description: "Specializing in robust and scalable backend systems."
    },
    {
        name: "Saqib Sohail",
        title: "Senior Full Stack Developer",
        initials: "SS",
        description: "Expert in end-to-end web solutions and cloud technologies."
    },
    {
        name: "Qaswa Shahid",
        title: "Junior Frontend Developer",
        initials: "QS",
        description: "Passionate about creating intuitive and engaging user interfaces."
    },
    {
        name: "Zuneral Sarfraz",
        title: "UI UX Designer",
        initials: "ZS",
        description: "Crafting beautiful and user-friendly digital experiences."
    },
    {
        name: "Afaq Ahmed",
        title: "Junior Full Stack Developer",
        initials: "AA",
        description: "Building dynamic web applications with a focus on performance."
    }
];

const leadershipTeam = [
    {
        name: "Saqib Sohail",
        title: "Chief Technology Officer",
        initials: "SS",
        description: "Leading technical architecture and innovation with expertise in scalable web applications and cloud technologies."
    },
    {
        name: "Ahsan Mirza",
        title: "Head of Marketing & Digital Growth",
        initials: "AM",
        description: "Driving strategic marketing initiatives and digital growth strategies for comprehensive business solutions."
    },
    {
        name: "Umair Saleem",
        title: "Chief Business Officer",
        initials: "US",
        description: "Overseeing business operations, client relationships, and strategic partnerships for sustainable growth."
    }
];

const coreServices = [
    {
        title: "Custom Web Applications",
        description: "Scalable, high-performance applications built with modern frameworks and best practices for maximum efficiency.",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        title: "Frontend Excellence",
        description: "Component-based architecture using Next.js, React, and modern state management for exceptional user experiences.",
        iconPath: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
    },
    {
        title: "Cloud-Native Solutions",
        description: "AWS-powered serverless architecture with microservices, API gateways, and CDN optimization for global performance.",
        iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-10 4.7 4.7 0 00-.1-1A5 5 0 008 3.5a4.88 4.88 0 00-4.5 3A4.1 4.1 0 003 15z"
    }
];

const whyUsAdvantages = [
    {
        title: "Integrated Expertise",
        description: "Technical excellence combined with marketing integration and strategic business consulting for comprehensive solutions.",
        iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        title: "Remote-First Advantages",
        description: "Cost-effective solutions with access to global talent, flexible scheduling, and reduced overhead costs.",
        iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
    },
    {
        title: "Proven Methodology",
        description: "Agile development with predictable timelines, transparent budgeting, and comprehensive quality assurance.",
        iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
];

const techStacks = [
    {
        category: "Frontend Frameworks",
        description: "Component-based architecture with modern state management and performance optimization.",
        technologies: [
            "Next.js & React Ecosystem",
            "TypeScript Integration",
            "Vue.js & Angular Alternatives",
            "Accessibility (WCAG Compliance)"
        ]
    },
    {
        category: "Backend Architecture",
        description: "Scalable server-side solutions with microservices and efficient database management.",
        technologies: [
            "Node.js (Express.js, Microservices)",
            "Python (Django, Flask, FastAPI)",
            "Ruby on Rails",
            "Go Lang",
            "Database Optimization"
        ]
    },
    {
        category: "Cloud-Native Development",
        description: "Serverless architecture with AWS services for maximum scalability and performance.",
        technologies: [
            "AWS Lambda & API Gateway",
            "RDS, DynamoDB, CloudFront CDN",
            "Multi-cloud Capabilities"
        ]
    },
    {
        category: "API-First Development",
        description: "RESTful and GraphQL APIs with comprehensive documentation and testing.",
        technologies: [
            "RESTful API Design",
            "GraphQL Implementation",
            "OpenAPI Documentation",
            "AI / LLM models Integration"
        ]
    }
];

const developmentPhilosophy = [
    {
        title: "User-Centric Design",
        description: "Every decision focused on optimal user experience and business outcomes.",
        iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    },
    {
        title: "Agile Methodology",
        description: "Iterative development with continuous feedback and rapid adaptation to changes.",
        iconPath: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    },
    {
        title: "Robust Architecture",
        description: "Scalable foundations built for growth and long-term sustainability.",
        iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    },
    {
        title: "Security First",
        description: "Performance optimization with comprehensive security measures built-in.",
        iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
];

const coreValues = [
    "Excellence in execution",
    "Transparent communication",
    "Continuous innovation",
    "Client-centric approach",
    "Accessibility (WCAG Compliance)"
];

const portfolioItems = [
    {
        title: "E-commerce Platform",
        description: "Scalable online marketplace with real-time inventory management and payment processing.",
        achievement: "300% increase in online sales",
        gradientFrom: "from-blue-400",
        gradientTo: "to-purple-500"
    },
    {
        title: "SaaS Application",
        description: "Multi-tenant platform with advanced analytics and automated workflow management.",
        achievement: "Successful Series A funding",
        gradientFrom: "from-green-400",
        gradientTo: "to-blue-500"
    },
    {
        title: "Corporate Portal",
        description: "Enterprise-grade internal platform with user management and document sharing capabilities.",
        achievement: "50% efficiency improvement",
        gradientFrom: "from-purple-400",
        gradientTo: "to-pink-500"
    }
];

const clientReviews = [
    {
        stars: 5,
        quote: "Nimbus Solutions transformed our online presence completely. Their technical expertise and strategic approach helped us achieve a 300% increase in sales within six months.",
        reviewerName: "John Davis",
        reviewerTitle: "CEO, TechStart Inc.",
        reviewerInitials: "JD"
    },
    {
        stars: 5,
        quote: "The team at Nimbus Solutions is truly exceptional. Their agile approach and commitment to quality ensured our SaaS platform was launched on time and exceeded our expectations.",
        reviewerName: "Sarah Miller",
        reviewerTitle: "Founder, Innovate Now",
        reviewerInitials: "SM"
    },
    {
        stars: 5,
        quote: "Working with Nimbus Solutions was a game-changer for our corporate portal. Their profound technical understanding and seamless communication made the project a huge success.",
        reviewerName: "Robert Williams",
        reviewerTitle: "CTO, Global Corp",
        reviewerInitials: "RW"
    }
];

const blogPosts = [
    {
        title: "The Power of Next.js for Enterprise Applications",
        description: "Discover why Next.js is the go-to framework for building high-performance, SEO-friendly web applications.",
        link: "#",
        iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4-4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1zm-3-4H9c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm3-4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1z"
    },
    {
        title: "Designing Scalable Microservices with Node.js",
        description: "A deep dive into building resilient and high-performance backend systems using Node.js and microservices architecture.",
        link: "#",
        iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4-4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1zm-3-4H9c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm3-4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1z"
    },
    {
        title: "Maximizing Scalability with AWS Lambda",
        description: "Explore the benefits of serverless computing and how AWS Lambda can optimize your application's scalability and cost efficiency.",
        link: "#",
        iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4-4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1zm-3-4H9c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm3-4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1z"
    }
]; 