const menu = [

  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: "activity-round-fill",
    text: "Subscribers",
    link: "/subscribers",
  },
  
  {
    icon: "tile-thumb-fill",
    text: "Top Games Today",
    subMenu: [
      {
        text: "Trivia Clash",
        link: "/trivia-clash",
      },
      {
        text: "Mega Quiz",
        link: "/mega-quiz",
      },
      {
        text: "Puzzle Hero",
        link: "/puzzle-hero",
      },
    ],
  },
   {
    icon: "tag-alt-fill",
    text: "Subscriptions",
    link: "/sales",
  },

  {
    icon: "bag-fill",
    text: "Billing & Transactions",
    link: "/billing-transactions",
  },
   
  {
    icon: "growth-fill",
    text: "Analytics & Reports",
    subMenu: [
      {
        text: "Revenue Report",
        link: "/analytics",
      },
      {
        text: "Subscription Report",
        link: "/analytics",
      },
      {
        text: "Churn Report",
        link: "/analytics",
      },
      {
        text: "MTN Settlement Report",
        link: "/analytics",
      },
    ],
  },
  
   {
    icon: "bag-fill",
    text: "Game Categories",
    subMenu: [
      {
        text: "Create Trending Game",
        link: "/create-tranding-game",
      },
      {
        text: "Create Racing Game",
        link: "/create-racing-game",
      },
      {
        text: "Create Release Game",
        link: "/create-release-games",
      },
      {
        text: "Create Mind-mining games",
        link: "/create-mind-mining-games",
      },
      {
        text: "Gameio Exclusive Game",
        link: "/create-exclusive-games",
      } 
    ],
  },
  {
    icon: "bag-fill",
    text: "Create Trailer",
    link: "/create-trailer",
  },
  {
    icon: "bag-fill",
    text: "Create Videos",
    link: "/create-video",
  }
];

export {menu } ;
