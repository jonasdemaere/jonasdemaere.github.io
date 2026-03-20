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
            },},{id: "news-personal-blog-relaunched",
          title: 'Personal Blog Relaunched',
          description: "",
          section: "News",},{id: "projects-project-1",
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
