// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "resume",
          description: "Experienced retail professional with a track record in category management, sourcing, and merchandising. Strong quantitative background in data and statistical analysis. Trained in applied economics and corporate governance. International professional experience spanning strategy consulting, research, writing, and teaching. Confident in leading teams both with direct and indirect authority.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-appearances",
          title: "appearances",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/appearances/";
          },
        },{id: "nav-wineries",
          title: "wineries",
          description: "A personal log of wineries I have visited around the world.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/wineries/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-relaunching-my-personal-blog",
        
          title: "Relaunching my Personal blog",
        
        description: "Picking up where I left off.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/relaunch-personal-blog/";
          
        },
      },{id: "post-griekenland-zon-zee-en-wijn",
        
          title: "Griekenland: zon, zee en … wijn",
        
        description: "Een ontdekkingsreis doorheen de wijngaarden van Nemea op de Peloponnesos — Moschofilero, Agiorgitiko en de beste domeinen van Griekenland.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/griekenland-zon-zee-en-wijn/";
          
        },
      },{id: "post-concours-mondial-de-bruxelles-behind-the-scenes-of-the-world-39-s-largest-wine-competition",
        
          title: "Concours Mondial de Bruxelles: Behind the Scenes of the World&#39;s Largest Wine Competition...",
        
        description: "An inside look at the methodology, scale, and judging process of the world&#39;s most recognized wine competition.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/concours-mondial-de-bruxelles/";
          
        },
      },{id: "post-the-drinkalsace-experience",
        
          title: "The #DrinkAlsace Experience",
        
        description: "Een week lang de wijngaarden van de Elzas verkennen — oenotoerisme en technologie gecombineerd in de",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/drinkalsace-experience/";
          
        },
      },{id: "post-on-chianti-classico-and-tuscan-wines",
        
          title: "On Chianti Classico and Tuscan Wines",
        
        description: "On how to choose a good Chianti Classico, and what makes Tuscan wines so endlessly compelling.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/on-chianti-classico-and-tuscan-wines/";
          
        },
      },{id: "post-belgium-the-smallest-wine-producing-country-in-the-world",
        
          title: "Belgium: the Smallest Wine Producing Country in the World",
        
        description: "On the history, climate, and quiet revival of Belgian winemaking.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/belgium-the-smallest-wine-producing-country-in-the-world/";
          
        },
      },{id: "post-the-wine-muse",
        
          title: "The Wine Muse",
        
        description: "On wine as a symbol of art, culture, religion, and inspiration throughout history.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/the-wine-muse/";
          
        },
      },{id: "post-campo-viejo",
        
          title: "Campo Viejo",
        
        description: "Een bezoek aan de indrukwekkende bodega van Campo Viejo in Rioja — 70.000 eikenvaten, 320 fermentatietanks en 24 miljoen flessen per jaar.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/campo-viejo/";
          
        },
      },{id: "post-is-champagne-still-sparkling",
        
          title: "Is Champagne Still Sparkling?",
        
        description: "On Champagne&#39;s economic resilience, brand power, and shifting global demand.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/is-champagne-still-sparkling/";
          
        },
      },{id: "post-bodega-ysios",
        
          title: "Bodega Ysios",
        
        description: "Een bezoek aan Bodega Ysios in Rioja Alavesa — een architecturaal meesterwerk en een kathedraal ter verering van het wijnmaken.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/bodega-ysios/";
          
        },
      },{id: "post-harvest-the-birth-of-a-new-vintage",
        
          title: "Harvest, the Birth of a New Vintage",
        
        description: "On the timing, labor, and transition of harvest — from vineyard to cellar.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/harvest-the-birth-of-a-new-vintage/";
          
        },
      },{id: "post-sun-sea-sand-and-rosé",
        
          title: "Sun, Sea, Sand and Rosé",
        
        description: "On why rosé is the perfect summer wine, how it is made, and how to choose one well.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/sun-sea-sand-and-rose/";
          
        },
      },{id: "post-a-french-lady-who-speaks-german",
        
          title: "A French Lady Who Speaks German",
        
        description: "On Pinot Noir, Spätburgunder, and the art of treating a noble grape with care.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/a-french-lady-who-speaks-german/";
          
        },
      },{id: "post-organic-and-biodynamic-wines",
        
          title: "Organic and Biodynamic Wines",
        
        description: "On the philosophy, methods, and meaning behind organic and biodynamic winemaking.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/organic-and-biodynamic-wines/";
          
        },
      },{id: "post-the-economics-of-a-bottle-breaking-down-the-price-tag",
        
          title: "The Economics of a Bottle: Breaking Down the Price Tag",
        
        description: "A detailed look at the production costs, logistics, taxes, and markups that shape the price of a bottle of wine.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2009/the-economics-of-a-bottle/";
          
        },
      },{id: "post-what-determines-the-cost-of-wine",
        
          title: "What Determines the Cost of Wine?",
        
        description: "A breakdown of the objective factors that shape the price of a bottle of wine.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2009/what-determines-the-cost-of-wine/";
          
        },
      },{id: "post-wine-storage-and-preservation",
        
          title: "Wine Storage and Preservation",
        
        description: "A practical guide to storing wine correctly, from temperature and humidity to light and vibration.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2009/wine-storage-and-preservation/";
          
        },
      },{id: "post-the-art-of-serving-wine",
        
          title: "The Art of Serving Wine",
        
        description: "A guide to glassware, serving temperatures, opening bottles, and aeration.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2009/the-art-of-serving-wine/";
          
        },
      },{id: "post-wine-a-journey-beyond-the-glass",
        
          title: "Wine: A Journey Beyond the Glass",
        
        description: "A personal vision of wine as experience, art, and discovery.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2009/wine-a-journey-beyond-the-glass/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-tv-interview-verkiezing-beste-belgische-wijn-tv-oost",
          title: 'TV Interview: Verkiezing Beste Belgische Wijn, TV-Oost',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2010-09-16-verkiezing-beste-belgische-wijn-tv-oost/";
            },},{id: "news-guest-appearance-econoshock-belgium",
          title: 'Guest Appearance: Econoshock, Belgium',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-01-02-econoshock-guest-appearance/";
            },},{id: "news-guest-author-campo-viejo-belgian-wino",
          title: 'Guest Author: Campo Viejo, Belgian Wino',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-01-03-campo-viejo-belgian-wino/";
            },},{id: "news-guest-author-bodega-ysios-belgian-wino",
          title: 'Guest Author: Bodega Ysios, Belgian Wino',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-01-04-bodega-ysios-belgian-wino/";
            },},{id: "news-columnist-good-wine-magazine-ukraine-2013-2014",
          title: 'Columnist, Good Wine Magazine (Ukraine), 2013–2014',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-01-05-good-wine-magazine-columnist/";
            },},{id: "news-tv-interview-commentaar-op-het-oogstjaar-2013-vtm-nieuws",
          title: 'TV Interview: Commentaar op het oogstjaar 2013, VTM Nieuws',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2013-09-15-vtm-oogstjaar-2013/";
            },},{id: "news-dissertation-do-expert-tasters-evaluate-wines-consistently-weinakademiker",
          title: 'Dissertation: Do Expert Tasters Evaluate Wines Consistently? (Weinakademiker)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-01-weinakademiker-dissertation/";
            },},{id: "news-author-vino-fest-ukrainian-wine-magazine",
          title: 'Author: Vino Fest, Ukrainian Wine Magazine',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-02-vino-fest-ukrainian-wine-magazine/";
            },},{id: "news-guest-author-griekenland-zon-zee-en-wijn-belgian-wino",
          title: 'Guest Author: Griekenland — Zon, Zee en... Wijn, Belgian Wino',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-03-griekenland-belgian-wino/";
            },},{id: "news-guest-author-the-drinkalsace-experience-belgian-wino",
          title: 'Guest Author: The #DrinkAlsace Experience, Belgian Wino',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-04-drink-alsace-belgian-wino/";
            },},{id: "news-featured-in-het-nieuwsblad-leerlingen-serveren-belgische-wijn",
          title: 'Featured in Het Nieuwsblad: Leerlingen serveren Belgische wijn',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-05-leerlingen-belgische-wijn-nieuwsblad/";
            },},{id: "news-quoted-in-wijnkanaal-be-is-een-wijndomein-in-ons-land-leefbaar",
          title: 'Quoted in Wijnkanaal.be: Is een wijndomein in ons land leefbaar?',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-06-wijndomein-leefbaar-wijnkanaal/";
            },},{id: "news-quoted-in-tijd-be-vlaamse-wijnen-werken-aan-wederopstanding",
          title: 'Quoted in Tijd.be: Vlaamse wijnen werken aan wederopstanding',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-07-vlaamse-wijnen-wederopstanding-tijd/";
            },},{id: "news-preface-wijnbouwers-in-belgie-het-verhaal-achter-de-belgische-wijn-dirk-de-mesmaeker",
          title: 'Preface, Wijnbouwers in Belgie — Het verhaal achter de Belgische wijn (Dirk De...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-08-wijnbouwers-belgie-preface/";
            },},{id: "news-presentation-the-niche-in-the-market-wbis-munich",
          title: 'Presentation: The Niche in the Market, WBIS Munich',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2014-01-09-wbis-munich-presentation/";
            },},{id: "news-tv-interview-proeven-van-belgische-wijnen-atv",
          title: 'TV Interview: Proeven van Belgische wijnen, ATV',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-01-01-proeven-belgische-wijnen-atv/";
            },},{id: "news-featured-in-gazet-van-antwerpen-eigen-wijn-eerst-aan-oudevaartplaats",
          title: 'Featured in Gazet Van Antwerpen: Eigen wijn eerst aan Oudevaartplaats',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-01-02-eigen-wijn-oudevaartplaats/";
            },},{id: "news-featured-in-winetasting-be-belgian-wines-bar-opens-in-antwerp",
          title: 'Featured in Winetasting.be: Belgian Wines Bar Opens in Antwerp',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-07-30-winetasting-belgian-wines-bar/";
            },},{id: "news-featured-in-meersmaak-be-belgian-wines",
          title: 'Featured in Meersmaak.be: Belgian Wines',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-01-03-belgian-wines-meersmaak/";
            },},{id: "news-preface-wijn-van-eigen-bodem-peter-doomen",
          title: 'Preface, Wijn Van Eigen Bodem (Peter Doomen)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-01-01-wijn-van-eigen-bodem-preface/";
            },},{id: "news-author-de-kersttips-van-sommelier-jonas-de-maere-bordeaux-com",
          title: 'Author: De Kersttips van sommelier Jonas De Maere, Bordeaux.com',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-01-02-kersttips-bordeaux-com/";
            },},{id: "news-mentioned-in-wijnkronieken-wijn-van-eigen-bodem",
          title: 'Mentioned in Wijnkronieken: Wijn van eigen bodem',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2016-05-11-wijnkronieken-wijn-van-eigen-bodem/";
            },},{id: "news-quoted-in-knack-belgische-wijnen-en-bubbels-hebben-ze-een-toekomst",
          title: 'Quoted in Knack: Belgische wijnen en bubbels, hebben ze een toekomst?',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2017-01-01-belgische-wijnen-knack/";
            },},{id: "news-quot-very-39-import-39-ant-wine-import-manager-quot",
          title: '&amp;quot;Very &amp;#39;Import&amp;#39;ant Wine Import Manager&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-01-01-very-important-wine-import-manager/";
            },},{id: "news-testimonial-vinexpo-bordeaux",
          title: 'Testimonial, Vinexpo Bordeaux',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-01-02-vinexpo-bordeaux-testimonial/";
            },},{id: "news-quoted-in-meininger-39-s-international-wine-quality-from-eastern-europe-at-wbwe",
          title: 'Quoted in Meininger&amp;#39;s International: Wine Quality from Eastern Europe at WBWE',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-03-01-meiningers-eastern-europe-bulk-wine/";
            },},{id: "news-tapping-into-the-source-retail-business-services-pilots-private-label-wine",
          title: 'Tapping into The Source: Retail Business Services Pilots Private Label Wine',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-04-02-rbs-pilots-private-label-wine/";
            },},{id: "news-wine-program-toasts-new-domestic-wines",
          title: 'Wine Program Toasts New Domestic Wines',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-10-15-wine-program-toasts-domestic-wines/";
            },},{id: "news-quot-the-rise-and-rise-of-sauvignon-blanc-in-the-global-marketplace-quot",
          title: '&amp;quot;The Rise, and Rise, of Sauvignon Blanc in the Global Marketplace&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-01-21-sauvignon-blanc-global-marketplace/";
            },},{id: "news-adusa-39-s-artie-wine-wins-2021-best-new-product-award",
          title: 'ADUSA&amp;#39;s Artie Wine Wins 2021 Best New Product Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-03-23-artie-wines-best-new-product-award/";
            },},{id: "news-featured-on-ecrm-39-s-supplier-success-stories-page",
          title: 'Featured on ECRM&amp;#39;s Supplier Success Stories Page',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-01-01-ecrm-supplier-success-stories/";
            },},{id: "news-winewise-student-in-the-spotlight-amp-wset-testimonial",
          title: 'WineWise: Student in the Spotlight &amp;amp; WSET Testimonial',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-01-02-winewise-spotlight-testimonial/";
            },},{id: "news-the-org-vintaflow-founder-amp-ceo-profile",
          title: 'The Org: Vintaflow — Founder &amp;amp; CEO Profile',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-03-the-org-vintaflow/";
            },},{id: "news-how-ahold-delhaize-usa-finds-the-latest-innovations-in-wine-beer-amp-spirits",
          title: 'How Ahold Delhaize USA Finds the Latest Innovations in Wine, Beer &amp;amp; Spirits...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-01-ecrm-video-feature/";
            },},{id: "news-how-private-labels-can-help-bulk-suppliers-ramp-up-sales",
          title: 'How Private Labels Can Help Bulk Suppliers Ramp Up Sales',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-31-linkedin-feature/";
            },},{id: "news-quoted-in-vitisphere-on-private-label-wine-strategy-at-ahold-delhaize-usa",
          title: 'Quoted in Vitisphere on Private-Label Wine Strategy at Ahold Delhaize USA',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-08-vitisphere-private-label-strategy/";
            },},{id: "news-judging-panel-the-tasting-panel-39-s-best-hard-lemonade-feature",
          title: 'Judging Panel: The Tasting Panel&amp;#39;s Best Hard Lemonade Feature',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-12-tasting-panel-hard-lemonade-judge/";
            },},{id: "news-mentioned-in-vinetur-italian-wine-exports-to-u-s-plunge-as-tariffs-drive-up-retail-prices",
          title: 'Mentioned in Vinetur: Italian Wine Exports to U.S. Plunge as Tariffs Drive Up...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-23-vinetur-wine-tariffs/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jonasdemaere", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/jonasdemaere", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/jonasdemaere", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
