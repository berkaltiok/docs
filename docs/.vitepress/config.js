const sidebarGuide = () => [
  {
    text: "Getting Started",
    collapsed: false,
    items: [
      {
        text: "Quick start",
        link: "/learn/quick-start",
      },
      { text: "Tutorial: Bookstore API", link: "/learn/bookstore-api" },
    ],
  },
  {
    text: "Fundamentals",
    collapsed: true,
    items: [
      { text: "What does a Model mean?", link: "/learn/models" },
      { text: "Understanding the routing", link: "/learn/routing" },
      { text: "Version management", link: "/learn/version-management" },
      { text: "Validate your data", link: "/learn/validations" },
    ],
  },
  {
    text: "Gains",
    collapsed: true,
    items: [
      { text: "Auto-created documentation", link: "/learn/documentation" },
      { text: "Querying data", link: "/learn/querying-data" },
      { text: "Related data queries", link: "/learn/related-data-queries" },
      {
        text: "How DB Analyzer works?",
        link: "/learn/db-analyzer",
      },
    ],
  },
  {
    text: "Application Logic",
    collapsed: true,
    items: [
      { text: "Getting started", link: "/learn/application-logic" },
      { text: "Request-Response cycle", link: "/learn/request-response-cycle" },
      { text: "Middlewares", link: "/learn/middlewares" },
      { text: "Hooks & Events", link: "/learn/hooks-and-events" },
      { text: "Serializers", link: "/learn/serializers" },
    ],
  },
  {
    text: "Advanced",
    collapsed: true,
    items: [
      { text: "Configurations", link: "/learn/configurations" },
      { text: "Internationalization", link: "/learn/i18n" },
      { text: "Error handling", link: "/learn/error-handling" },
      {
        text: "Database transactions",
        link: "/learn/database-transactions",
      },
    ],
  },
  {
    text: "How to?",
    collapsed: true,
    items: [
      { text: "File uploading", link: "/learn/file-uploading" },
      { text: "Authentication", link: "/learn/authentication" },
      { text: "Rate limiting", link: "/learn/rate-limiting" },
      {
        text: "Deployment",
        link: "/learn/deployment",
      },
    ],
  },
  {
    text: "Contribution",
    collapsed: true,
    items: [
      { text: "Preparation", link: "/learn/contribution" },
      { text: "Development Kit", link: "/learn/development-kit" },
      { text: "Databases", link: "/learn/dev-kit-databases" },
      { text: "Tests", link: "/learn/contribution-tests" },
    ],
  },
];

const sidebarReference = [
  {
    text: "Configs",
    collapsed: false,
    items: [
      { text: "API configs", link: "/" },
      { text: "Database configs", link: "/" },
      { text: "Version configs", link: "/" },
    ],
  },
  {
    text: "Initialization",
    collapsed: true,
    items: [
      { text: "onBeforeInit()", link: "/" },
      { text: "onAfterInit()", link: "/" },
    ],
  },
  {
    text: "Models",
    collapsed: true,
    items: [
      { text: "table()", link: "/" },
      { text: "primaryKey()", link: "/" },
      { text: "fillable()", link: "/" },
      { text: "validations()", link: "/" },
      { text: "hiddens()", link: "/" },
      { text: "createdAtColumn()", link: "/" },
      { text: "updatedAtColumn()", link: "/" },
      { text: "deletedAtColumn()", link: "/" },
      { text: "handlers()", link: "/" },
      { text: "middlewares()", link: "/" },
      { text: "limits()", link: "/" },
      { text: "ignore()", link: "/" },
    ],
  },
  {
    text: "Handlers",
    collapsed: true,
    items: [
      { text: "INSERT", link: "/" },
      { text: "PAGINATE", link: "/" },
      { text: "SHOW", link: "/" },
      { text: "UPDATE", link: "/" },
      { text: "DELETE", link: "/" },
      { text: "FORCE_DELETE", link: "/" },
      { text: "PATCH", link: "/" },
      { text: "ALL", link: "/" },
    ],
  },
  {
    text: "Queries",
    collapsed: true,
    items: [
      { text: "fields", link: "/" },
      { text: "sort", link: "/" },
      { text: "page", link: "/" },
      { text: "per_page", link: "/" },
      { text: "trashed", link: "/" },
      { text: "q", link: "/" },
    ],
  },
  {
    text: "Hooks & Events",
    collapsed: true,
    items: [
      { text: "onBeforeInsert()", link: "/" },
      { text: "onBeforeUpdateQuery()", link: "/" },
      { text: "onBeforeUpdate()", link: "/" },
      { text: "onBeforeDeleteQuery()", link: "/" },
      { text: "onBeforeDelete()", link: "/" },
      { text: "onBeforeForceDeleteQuery()", link: "/" },
      { text: "onBeforeForceDelete()", link: "/" },
      { text: "onBeforePaginate()", link: "/" },
      { text: "onBeforeAll()", link: "/" },
      { text: "onBeforeShow()", link: "/" },
      { text: "onAfterInsert()", link: "/" },
      { text: "onAfterUpdateQuery()", link: "/" },
      { text: "onAfterUpdate()", link: "/" },
      { text: "onAfterDeleteQuery()", link: "/" },
      { text: "onAfterDelete()", link: "/" },
      { text: "onAfterForceDeleteQuery()", link: "/" },
      { text: "onAfterForceDelete()", link: "/" },
      { text: "onAfterPaginate()", link: "/" },
      { text: "onAfterAll()", link: "/" },
      { text: "onAfterShow()", link: "/" },
    ],
  },
  {
    text: "Hooks & Event Parameters",
    collapsed: true,
    items: [
      { text: "request", link: "/" },
      { text: "response", link: "/" },
      { text: "model", link: "/" },
      { text: "database", link: "/" },
      { text: "relation", link: "/" },
      { text: "parentModel", link: "/" },
      { text: "query", link: "/" },
      { text: "conditions", link: "/" },
      { text: "item", link: "/" },
      { text: "result", link: "/" },
      { text: "formData", link: "/" },
    ],
  },
  {
    text: "System",
    collapsed: true,
    items: [
      { text: "IoC", link: "/" },
      { text: "Error Codes", link: "/" },
      { text: "ApiError", link: "/" },
    ],
  },
  {
    text: "Upgrading",
    items: [
      { text: "0.20.0", link: "/upgrading/0.20.0" },
      { text: "0.30.0", link: "/upgrading/0.30.0" },
    ],
  },
  {
    text: "Basics",
    items: [
      { text: "Versions", link: "/basics/versions" },
      { text: "Configs", link: "/basics/config" },
      { text: "Initialization", link: "/basics/init" },
      { text: "Models", link: "/basics/models" },
      { text: "Handlers", link: "/basics/handlers" },
      { text: "Queries", link: "/basics/queries" },
    ],
  },
  {
    text: "Advanced",
    items: [
      { text: "Hooks", link: "/advanced/hooks" },
      { text: "IoC", link: "/advanced/ioc" },
      { text: "System Errors", link: "/errors" },
    ],
  },
  {
    text: "Database",
    items: [{ text: "Migrations", link: "/database/migrations" }],
  },
  {
    text: "Testing",
    items: [{ text: "Concepts", link: "/testing" }],
  },
];

export default {
  title: "Axe API",
  description:
    "The fastest way to create Rest API, by defining database models and relations.",

  lang: "en-US",

  lastUpdated: true,

  themeConfig: {
    logo: "/axe.png",

    nav: [
      { text: "GitHub", link: "https://github.com/axe-api/axe-api" },
      {
        text: "Changelog",
        link: "https://github.com/axe-api/axe-api/blob/master/CHANGELOG.md",
      },
      {
        text: "Cookbooks",
        link: "/cookbooks/",
      },
      {
        text: "SonarCloud",
        link: "https://sonarcloud.io/dashboard?id=axe-api_axe-api",
      },
      {
        text: "Releases",
        link: "https://github.com/axe-api/axe-api/releases",
      },
      { text: "CLI", link: "https://github.com/axe-api/axe-magic" },
    ],

    sidebar: {
      "/learn/": sidebarGuide(),
      "/reference/": sidebarReference,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/axe-api/axe-api" },
      { icon: "twitter", link: "https://twitter.com/axeapi" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2020-present",
    },
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["link", { rel: "stylesheet", href: "/styles.css" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-1HBM031QWE",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1HBM031QWE');
      `,
    ],
    // [
    //   "script",
    //   {},
    //   `
    //   (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    // .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    // n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    // (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    // ml('account', '418678');
    //   `,
    // ],
  ],
};
