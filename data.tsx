import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, Speech, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "1 Year of Experience",
    },
    {
        id: 2,
        name: "English",
        icon: <Speech />,
        description: "B2 Level",
    },
    {
        id: 3,
        name: "Projects",
        icon: <Wrench />,
        description: "",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
   
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development",
        experience: [
            {
                name: "HTML",
                subtitle: "Intermediate",
            },
            {
                name: "CSS",
                subtitle: "Intermediate",
            },
            {
                name: "JavaScript",
                subtitle: "Intermediate",
            },
            {
                name: "NextJs",
                subtitle: "Basic",
            },
            {
                name: "React",
                subtitle: "Basic",
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        experience: [
            {
                name: "C#",
                subtitle: "Basic",
            },
            {
                name: "Java",
                subtitle: "Basic/Intermediate",

            },
            {
                name: "Python",
                subtitle: "Basic",
            },
            {
                name: "MySQL",
                subtitle: "Basic",
            },
            {
                name: "PHP",
                subtitle: "Basic/Intermediate",
            },
            {
                name: "Django",
                subtitle: "Basic",
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Web Development",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Custom Website Development",
            },
            {
                name: "Responsive design and development",
            },
            {
                name: "Web Application Development",
            },
            {
                name: "Content Management",
            },
            {
                name: "E-commerce",
            },
            {
                name: "Maintenance and support",
            },
        ],
    },
    {
        id: 2,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Intuitive design for a smooth user experience",
            },
            {
                name: "Interactive prototyping to visualize the interface",
            },
            {
                name: "User research to understand needs and expectations",
            },
            {
                name: "Optimizing Usability to Improve Accessibility",
            },
            {
                name: "Usability testing to evaluate the experience",
            },
            {
                name: "Responsive design to adapt to different devices",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Telephone",
        subtitle: "+549 2494 313586",
        link: "tel:+5492494313586",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/LucasCueli",
        link: "github.com/LucasCueli",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "lucascueli4@gmail.com",
        link: "mailto:lucascueli@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];