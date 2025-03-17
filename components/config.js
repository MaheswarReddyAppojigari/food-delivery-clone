const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const restaurantList = [
  {
    info: {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
      locality: "Richmond Town",
      areaName: "Shanti Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "4.1", ratingCount: "1.8K+" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23847",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/a6dfc662-f040-4e87-b5e4-daef000ddedf_23847.jpg",
      locality: "MG Road",
      areaName: "Brigade Road",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "5.9K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-10 22:59:00", opened: true },
      badges: {
        imageBadges: [
          { imageId: "Rxawards/_CATEGORY-Pizza.png", description: "Delivery!" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹1199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "4.0", ratingCount: "4.8K+" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "426730",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/92dc5ce1-d1ee-41f4-9449-90cc1278d82f_426730.jpg",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.7,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "5.0K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-10 23:00:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹99" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "4.1", ratingCount: "422" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53608",
      name: "Sweet Chariot",
      cloudinaryImageId: "r91ay2xujwrwvmj5oat8",
      locality: "Residency Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Desserts"],
      avgRating: 4.6,
      parentId: "912",
      avgRatingString: "4.6",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-10 22:00:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/sweet-chariot-residency-road-ashok-nagar-rest53608",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17376",
      name: "Glen's Bakehouse",
      cloudinaryImageId: "m6jahioyu7zrodei5pcq",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Desserts", "Bakery", "Beverages", "Continental", "Italian"],
      avgRating: 4.7,
      parentId: "3220",
      avgRatingString: "4.7",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-10 23:59:00", opened: true },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "4.4", ratingCount: "10K+" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/glens-bakehouse-lavelle-road-ashok-nagar-rest17376",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "622202",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
      locality: "Langford Road",
      areaName: "Shantinagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.6,
      parentId: "11329",
      avgRatingString: "4.6",
      totalRatingsString: "558",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-shantinagar-rest622202",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "643832",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/59e251dc-b6d9-4566-97c3-931b83ef7061_643832.JPG",
      locality: "Langford Road",
      areaName: "Santhinagar",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.7,
      parentId: "355285",
      avgRatingString: "4.7",
      totalRatingsString: "564",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-rest643832",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "681612",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.7,
      parentId: "11216",
      avgRatingString: "4.7",
      totalRatingsString: "324",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-shanti-nagar-rest681612",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "681363",
      name: "GLOBO Ice Creams Of The World",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/04968076-c09c-464e-90e2-e0dd29ea1dfa_681363.JPG",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts", "Bakery"],
      avgRating: 4.4,
      parentId: "22303",
      avgRatingString: "4.4",
      totalRatingsString: "48",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "10-20 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/globo-ice-creams-of-the-world-lakshmi-road-shanti-nagar-rest681363",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "692226",
      name: "BOOM - Sub Style Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c5bbd782-00ef-45a8-aae7-ed1f86cee653_692226.JPG",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Snacks", "Indian", "Desserts"],
      avgRating: 4.5,
      parentId: "401169",
      avgRatingString: "4.5",
      totalRatingsString: "129",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "15-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/boom-sub-style-sandwiches-lakshmi-road-shanti-nagar-rest692226",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750396",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
      locality: "Lakshmi Road",
      areaName: "Langford Road",
      costForTwo: "₹250 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.5,
      parentId: "444382",
      avgRatingString: "4.5",
      totalRatingsString: "485",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "10-20 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-lakshmi-road-langford-road-rest750396",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "503001",
      name: "Mealful Rolls - India's Biggest Rolls",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c6d98b17-67f6-4ad0-95a8-cf40554297fb_503001.JPG",
      locality: "SHANTHINAGAR",
      areaName: "Lakshmi Road",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "Snacks", "North Indian", "Desserts"],
      avgRating: 4.6,
      parentId: "10390",
      avgRatingString: "4.6",
      totalRatingsString: "226",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mealful-rolls-indias-biggest-rolls-shanthinagar-lakshmi-road-rest503001",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "503000",
      name: "Itminaan Matka Biryani - Slow Cooked",
      cloudinaryImageId: "e165225d26130103fecf1c40f5dc3669",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Mughlai"],
      avgRating: 4.6,
      parentId: "107673",
      avgRatingString: "4.6",
      totalRatingsString: "77",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/itminaan-matka-biryani-slow-cooked-lakshmi-road-shanti-nagar-rest503000",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "503003",
      name: "ZAZA Mughal Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d26bdfca-3b50-41ea-87e1-e7f9a6b0581d_503003.jpg",
      locality: "Lakshmi Nagar Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Awadhi"],
      avgRating: 4.5,
      parentId: "22473",
      avgRatingString: "4.5",
      totalRatingsString: "478",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "10-20 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-lakshmi-nagar-road-shanti-nagar-rest503003",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "503002",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/aea607a6-5ce6-4fe6-b7d1-7ba2bacdc647_503002.jpg",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.7,
      parentId: "22452",
      avgRatingString: "4.7",
      totalRatingsString: "663",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "10-20 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-rest503002",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "616273",
      name: "Bhatti Chicken - Grilled, NOT Fried!",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/2a97ccc8-394e-455b-99e7-22b55908b169_616273.JPG",
      locality: "Langford Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Snacks", "Fast Food", "Tandoor"],
      avgRating: 4.6,
      parentId: "355286",
      avgRatingString: "4.6",
      totalRatingsString: "45",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/bhatti-chicken-grilled-not-fried-langford-road-shanti-nagar-rest616273",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "740521",
      name: "Hola Pasta - Fresh Gourmet Pasta",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/0d125f0f-1c6b-4573-b2cf-c71d31526452_740521.JPG",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.6,
      parentId: "418135",
      avgRatingString: "4.6",
      totalRatingsString: "87",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/hola-pasta-fresh-gourmet-pasta-lakshmi-road-shanti-nagar-rest740521",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69876",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
      locality: "UB City",
      areaName: "Central Bangalore",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "3.7K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-10 23:00:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹119" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "3.8", ratingCount: "282" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-ub-city-central-bangalore-rest69876",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:45:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "502999",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/261b5751-d567-4d3b-9045-c8e8947bbdb3_502999.jpg",
      locality: "Lakshmi Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.6,
      parentId: "10655",
      avgRatingString: "4.6",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "10-20 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-12-11 02:00:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: { lottie: {}, video: {} },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-af465136-7a3b-4684-b978-3ccea80c392d" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/box8-desi-meals-lakshmi-road-shanti-nagar-rest502999",
      type: "WEBLINK",
    },
  },
];
export { IMG_CDN_URL, restaurantList };
