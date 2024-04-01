type Project = {
  title: string;
  description: string;
  languages: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "ContaComigo",
    description:
      "Platform for controlling personal finances built for the IT Project Management course",
    languages: ["Typescript", "ReactJS", "NodeJS"],
    href: 'https://github.com/ViniciusKuchnir/ContaComigo/tree/master'
  },
  {
    title: "Qualist",
    description:
      "Apps for software quality assurance professionals",
    languages: ["Javascript", "React Native"],
    href: 'https://github.com/ViniciusKuchnir/QualistV2/tree/master'
  },
  {
    title: "Financa",
    description:
      "Mobile app for financial control (Interfaces)",
    languages: ["Javascript", "React Native"],
    href: 'https://github.com/ViniciusKuchnir/Financa'
  },
  {
    title: "Encomenda",
    description:
      "App for tracking packages",
    languages: ["Javascript", "React Native"],
    href: 'https://github.com/ViniciusKuchnir/Encomenda/tree/master'
  },
  {
    title: "ACME Products Commands",
    description:
      "Product command microservice (CQRS pattern)",
    languages: ["Java", "SpringBoot", "RabbitMQ"],
    href: 'https://github.com/ViniciusKuchnir/acme_products_commands'
  },
  {
    title: "ACME Products Queries",
    description:
      "Product queries microservice (CQRS pattern)",
    languages: ["Java", "SpringBoot", "RabbitMQ"],
    href: 'https://github.com/ViniciusKuchnir/acme_products_queries'
  }
];
