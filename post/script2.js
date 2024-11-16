const newsData = [
  {
    src: "../people/assests/images/image 85.png",
    title: "Israel Expands Military Operations Amid Conflict Escalation",
    tag: "News",
    date: "12/10/2024",
  },
  {
    src: "../people/assests/images/image 86.png",
    title: "US Inflation Shows Signs of Easing in Latest Report",
    tag: "Economy",
    date: "12/09/2024",
  },
  {
    src: "../people/assests/images/image 87.png",
    title: "Amazon Announces Major Layoffs in Response to Market Conditions",
    tag: "Tech",
    date: "12/08/2024",
  },
  {
    src: "https://cdn.unreports.com/sudan-crisis.jpg",
    title: "UN Calls for Immediate Ceasefire in Sudan as Crisis Worsens",
    tag: "World",
    date: "12/07/2024",
  },
  {
    src: "https://cdn.metainnovations.com/meta-ai-tools.jpg",
    title: "Meta's New AI Toolset Promises Major Advances for Developers",
    tag: "Tech",
    date: "12/06/2024",
  },
  {
    src: "https://cdn.technologynews.com/elon-musk-twitter.jpg",
    title: "Elon Musk Unveils New Twitter Features Amid Criticism",
    tag: "Tech",
    date: "12/05/2024",
  },
  {
    src: "https://cdn.worldreporter.com/global-climate-summit.jpg",
    title: "Global Climate Summit Kicks Off with Key Initiatives",
    tag: "Environment",
    date: "12/04/2024",
  },
  {
    src: "https://cdn.spaceexploration.com/china-moon-probe.jpg",
    title: "China Launches New Lunar Probe to Collect Moon Samples",
    tag: "Science",
    date: "12/03/2024",
  },
  {
    src: "https://cdn.politicsnow.com/ukraine-aid.jpg",
    title: "Ukraine Seeks More International Aid Following Recent Attacks",
    tag: "Politics",
    date: "12/02/2024",
  },
  {
    src: "https://cdn.autoshow.com/ford-electric-cars.jpg",
    title: "Ford Unveils New Line of Electric Vehicles for 2025",
    tag: "Autos",
    date: "12/01/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/hurricane-forecast.jpg",
    title: "Hurricane Season Forecast Shows Increased Activity",
    tag: "Weather",
    date: "11/30/2024",
  },
  {
    src: "https://cdn.financialtimes.com/global-market-trends.jpg",
    title: "Global Markets Show Signs of Recovery After Economic Downturn",
    tag: "Economy",
    date: "11/29/2024",
  },
  {
    src: "https://cdn.healthtoday.com/healthcare-tech.jpg",
    title: "Healthcare Tech Startup Raises Record Funding in Latest Round",
    tag: "Health",
    date: "11/28/2024",
  },
  {
    src: "https://cdn.travelnews.com/paris-tourism-boom.jpg",
    title: "Paris Sees Unprecedented Growth in Tourism Amid Pandemic Recovery",
    tag: "Travel",
    date: "11/27/2024",
  },
  {
    src: "https://cdn.sportsnews.com/worldcup-2024.jpg",
    title: "World Cup 2024: Early Surprises and Top Performances",
    tag: "Sports",
    date: "11/26/2024",
  },
  {
    src: "https://cdn.techinsider.com/google-ai-update.jpg",
    title: "Google AI Update Brings New Features to Search Algorithms",
    tag: "Tech",
    date: "11/25/2024",
  },
  {
    src: "https://cdn.politicswatch.com/us-election-2024.jpg",
    title: "US Election 2024: Key Candidates Face Tough Battles Ahead",
    tag: "Politics",
    date: "11/24/2024",
  },
  {
    src: "https://cdn.healthnews.com/new-vaccine-approval.jpg",
    title: "New Vaccine Approval Could Revolutionize Cancer Treatment",
    tag: "Health",
    date: "11/23/2024",
  },
  {
    src: "https://cdn.foodnews.com/global-food-crisis.jpg",
    title: "Global Food Crisis Worsens as Supply Chains Struggle",
    tag: "World",
    date: "11/22/2024",
  },
  {
    src: "https://cdn.fashionupdate.com/2025-collection-preview.jpg",
    title: "2025 Fashion Collection: Designers Push Boundaries with New Styles",
    tag: "Fashion",
    date: "11/21/2024",
  },
  {
    src: "https://cdn.educationtrends.com/online-education-2024.jpg",
    title: "Online Education Platforms Continue to Grow as Schools Adapt",
    tag: "Education",
    date: "11/20/2024",
  },
  {
    src: "https://cdn.spaceupdates.com/space-tourism-research.jpg",
    title: "Space Tourism Industry Faces Major Setbacks Amid Safety Concerns",
    tag: "Science",
    date: "11/19/2024",
  },
  {
    src: "https://cdn.medicalbreakthroughs.com/new-cancer-drug.jpg",
    title: "New Cancer Drug Shows Promising Results in Early Trials",
    tag: "Health",
    date: "11/18/2024",
  },
  {
    src: "https://cdn.socialmedia.com/facebook-data-privacy.jpg",
    title: "Facebook Faces Lawsuit Over Data Privacy Breaches",
    tag: "Tech",
    date: "11/17/2024",
  },
  {
    src: "https://cdn.globalpolitics.com/brexit-deal-2024.jpg",
    title: "UK and EU Reach New Deal on Post-Brexit Trade Arrangements",
    tag: "Politics",
    date: "11/16/2024",
  },
  {
    src: "https://cdn.investmentnews.com/stock-market-growth.jpg",
    title: "Stock Market Growth Boosts Confidence in Economic Recovery",
    tag: "Economy",
    date: "11/15/2024",
  },
  {
    src: "https://cdn.medicalinnovations.com/robotic-surgeries.jpg",
    title: "Robotic Surgeries Revolutionize Healthcare in Major Hospitals",
    tag: "Health",
    date: "11/14/2024",
  },
  {
    src: "https://cdn.energyupdates.com/renewable-energy-2024.jpg",
    title: "Renewable Energy Investments Surge as Global Demand Grows",
    tag: "Environment",
    date: "11/13/2024",
  },
  {
    src: "https://cdn.spaceexploration.com/mars-mission-2024.jpg",
    title: "Mars Mission Set for Launch in 2024 with New Technology",
    tag: "Science",
    date: "11/12/2024",
  },
  {
    src: "https://cdn.cryptomarket.com/bitcoin-reaches-new-high.jpg",
    title: "Bitcoin Reaches New High Amid Global Economic Shifts",
    tag: "Finance",
    date: "11/11/2024",
  },
  {
    src: "https://cdn.technologyreview.com/apple-2025-products.jpg",
    title: "Apple Teases Exciting New Products for 2025",
    tag: "Tech",
    date: "11/10/2024",
  },
  {
    src: "https://cdn.healthwatch.com/covid-vaccine-boosters.jpg",
    title: "COVID-19 Vaccine Boosters Show Effectiveness Against New Strains",
    tag: "Health",
    date: "11/09/2024",
  },
  {
    src: "https://cdn.travelscene.com/new-york-tourism-2024.jpg",
    title: "New York Sees Record Tourism Numbers as Travel Industry Recovers",
    tag: "Travel",
    date: "11/08/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.techreview.com/new-google-search-features.jpg",
    title: "New Google Search Features Aim to Improve User Experience",
    tag: "Tech",
    date: "11/07/2024",
  },
  {
    src: "https://cdn.spacefuturists.com/space-exploration-moon.jpg",
    title: "NASA's Next Moon Exploration Mission Set for 2024",
    tag: "Science",
    date: "11/06/2024",
  },
  {
    src: "https://cdn.weatherupdates.com/extreme-weather-2024.jpg",
    title: "Global Extreme Weather Events on the Rise in 2024",
    tag: "Weather",
    date: "11/05/2024",
  },
  {
    src: "https://cdn.foodscene.com/new-plant-based-foods.jpg",
    title: "New Plant-Based Foods Gaining Popularity in Global Markets",
    tag: "Food",
    date: "11/04/2024",
  },
  {
    src: "https://cdn.healthupdates.com/mental-health-awareness.jpg",
    title: "Mental Health Awareness Campaign Sees Growing Support",
    tag: "Health",
    date: "11/03/2024",
  },
  {
    src: "https://cdn.travelhub.com/asia-travel-2024.jpg",
    title: "Asia Travel Industry Expects Growth with New Flight Routes",
    tag: "Travel",
    date: "11/02/2024",
  },
];

const newspost = document.getElementById("newspost");

// Slice the newsData for different sections
const firstThreeNews = newsData.slice(0, 50);

// Function to create and append news items
function createNewsSection(newsArray, sectionElement) {
  newsArray.forEach(newsItem => {
    const primaryDiv = document.createElement("div");
    primaryDiv.classList.add("newsprimary");

    const newspDiv = document.createElement("div");
    newspDiv.classList.add("newsp");

    const title = document.createElement("h1");
    title.textContent = newsItem.title;

    const tagDateDiv = document.createElement("div");
    tagDateDiv.classList.add("tag-date");

    const tag = document.createElement("h4");
    tag.textContent = newsItem.tag;

    const date = document.createElement("h4");
    date.textContent = newsItem.date;

    tagDateDiv.appendChild(tag);
    tagDateDiv.appendChild(date);

    const imageHandlerDiv = document.createElement("div");
    imageHandlerDiv.classList.add("image-handler");

    const image = document.createElement("img");
    image.src = newsItem.src;

    imageHandlerDiv.appendChild(image);

    newspDiv.appendChild(title);
    newspDiv.appendChild(tagDateDiv);
    newspDiv.appendChild(imageHandlerDiv);
    primaryDiv.appendChild(newspDiv);
    sectionElement.appendChild(newspDiv);
  });
}

// Create the sections
createNewsSection(firstThreeNews, newspost);

// Select all elements with the class 'newsp'
const newspElements = document.querySelectorAll('.newsp');

// Grouping 0-algorithm cards into groups of 6 (cards with 25% width)
const groupSize = 9;  // Each group contains 9 cards
const zeroAlgoGroups = [];

// Loop through each element and apply styles based on the repeating pattern groups
newspElements.forEach((element, index) => {
  const groupOfNine = Math.floor(index / groupSize);
  const positionInGroup = index % groupSize;

  // Apply the pattern based on the group number
  if (groupOfNine % 4 === 0) {
    // Pattern 1-0-0
    if (positionInGroup === 0 || positionInGroup === 3 || positionInGroup === 6) {
      element.style.width = '48%';
      element.classList.add("newsp-48");  // Add class for 48% width elements
    } else {
      element.style.width = '25%';
      element.querySelector("h1").style.fontSize = '1.5em';
      element.classList.add("scroll-animation");  // Add animation class to 25% width divs
      element.style.position = 'relative';  // Add relative position to 25% width elements

      // Group the 25% width elements (0-algorithm cards) into groups of 6
      const groupIndex = Math.floor(index / groupSize);
      if (!zeroAlgoGroups[groupIndex]) zeroAlgoGroups[groupIndex] = [];
      zeroAlgoGroups[groupIndex].push(element);
    }
  } else if (groupOfNine % 4 === 1) {
    // Pattern 0-1-0
    if (positionInGroup === 1 || positionInGroup === 4 || positionInGroup === 7) {
      element.style.width = '48%';
      element.classList.add("newsp-48");  // Add class for 48% width elements
    } else {
      element.style.width = '25%';
      element.querySelector("h1").style.fontSize = '1.5em';
      element.classList.add("scroll-animation");  // Add animation class to 25% width divs
      element.style.position = 'relative';  // Add relative position to 25% width elements

      // Group the 25% width elements (0-algorithm cards) into groups of 6
      const groupIndex = Math.floor(index / groupSize);
      if (!zeroAlgoGroups[groupIndex]) zeroAlgoGroups[groupIndex] = [];
      zeroAlgoGroups[groupIndex].push(element);
    }
  } else if (groupOfNine % 4 === 2) {
    // Pattern 0-0-1
    if (positionInGroup === 2 || positionInGroup === 5 || positionInGroup === 8) {
      element.style.width = '48%';
      element.classList.add("newsp-48");  // Add class for 48% width elements
    } else {
      element.style.width = '25%';
      element.querySelector("h1").style.fontSize = '1.5em';
      element.classList.add("scroll-animation");  // Add animation class to 25% width divs
      element.style.position = 'relative';  // Add relative position to 25% width elements

      // Group the 25% width elements (0-algorithm cards) into groups of 6
      const groupIndex = Math.floor(index / groupSize);
      if (!zeroAlgoGroups[groupIndex]) zeroAlgoGroups[groupIndex] = [];
      zeroAlgoGroups[groupIndex].push(element);
    }
  } else if (groupOfNine % 4 === 3) {
    // Repeating the pattern 0-1-0 again
    if (positionInGroup === 1 || positionInGroup === 4 || positionInGroup === 7) {
      element.style.width = '48%';
      element.classList.add("newsp-48");  // Add class for 48% width elements
    } else {
      element.style.width = '25%';
      element.querySelector("h1").style.fontSize = '1.5em';
      element.classList.add("scroll-animation");  // Add animation class to 25% width divs
      element.style.position = 'relative';  // Add relative position to 25% width elements

      // Group the 25% width elements (0-algorithm cards) into groups of 6
      const groupIndex = Math.floor(index / groupSize);
      if (!zeroAlgoGroups[groupIndex]) zeroAlgoGroups[groupIndex] = [];
      zeroAlgoGroups[groupIndex].push(element);
    }
  }
});

// Scroll event listener for vertical scroll effect
let scrollPosition = 0;
let groupIndex = 0;  // Start with the first group of 9 cards
const scrollAmount = 100;  // Adjust the amount of scroll movement for the group
const maxGroups = zeroAlgoGroups.length; // Number of 9-card groups

window.addEventListener("wheel", function (event) {
  // If the user scrolls down, increase scroll position, else decrease
  if (event.deltaY > 0) {
    // Scrolling down
    if (scrollPosition >= zeroAlgoGroups[groupIndex].length * 150) {
      // If we've scrolled to the bottom of the current group
      if (groupIndex < maxGroups - 1) {
        groupIndex++;
        scrollPosition = 0;  // Reset scroll position for the next group
      }
    } else {
      scrollPosition += scrollAmount;
    }
  } else {
    // Scrolling up
    if (scrollPosition <= 0 && groupIndex > 0) {
      groupIndex--;
      scrollPosition = zeroAlgoGroups[groupIndex].length * 150;  // Start at the bottom of the previous group
    } else {
      scrollPosition -= scrollAmount;
    }
  }

  // Loop through all groups of 0-algorithm (25% width) cards and apply scroll
  zeroAlgoGroups[groupIndex].forEach((element) => {
    element.style.transform = `translateY(${scrollPosition}px)`;  // Move down or up based on scroll position
  });
});
