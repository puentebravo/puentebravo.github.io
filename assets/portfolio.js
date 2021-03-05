$(document).ready(function () {
  console.log("linked!");
  const portArray = [
    {
      name: "Squall",
      github: "https://github.com/puentebravo/Squall",
      img: "./assets/images/Squall.gif",
      deployed: "https://puentebravo.github.io/Squall/",
      description:
        "Travel is complex, stressful, and unpredictable, and that's before taking into account what the weather will be once you reach your destination. Squall was designed to take some of the guesswork out of that equation, enabling a traveler on the go to easily see detailed current conditions in any city of their choosing, as well as a five day forecast detailing temperature, humidity, and real feel. Utilizing the openweathermap API and built using dynamically rendered HTML, JQUERY, and Bootstrap, Squall is built to have a low data footprint, and to be as responsive as possible to different devices.",
      code: "HTML/CSS/Javascript/Bootstrap/JQUERY/JSON",
    },
    {
      name: "codeQuiz",
      github: "https://github.com/puentebravo/codeQuiz",
      img: "./assets/images/demo.gif",
      deployed: "https://puentebravo.github.io/codeQuiz/index.html",
      description:
        "An interactive, dynamic, fun way for programming students to test their knowledge of basic coding principals in a timed, multiple choice format. With a clean, easy to navigate interface, Code Quiz gives clear, live feedback to students as they progress, allowing them to compare their score to that of their peers once the game is done. Code Quiz is made using dynamic javascript and styled using Bootstrap, making it responsive across multiple devices.",
      code: "HTML/CSS/Javascript/Bootstrap/JSON",
    },
    {
      name: "From Dad To Bad",
      github: "https://github.com/puentebravo/project2",
      img: "",
      deployed: "https://aqueous-meadow-09339.herokuapp.com/",
      description: "From Dad to Bad is your one stop shop for all things dad jokes, puns, and movie one liners. Whether it elicits laughter, tears, groaning, or a mixture of all three, From Dad to Bad has it all!",
      code: "HTML/CSS/Handlebars/SQL/Sequelize/JavaScript/JSON/Bootstrap"
    },
    {
      name: "Farmwise Fresh Eats",
      github: "https://github.com/ericfreyer/Farmwise_FreshEats",
      img: "./assets/images/pageDemo.gif",
      deployed: "https://ericfreyer.github.io/Farmwise_FreshEats/",
      description:
        "The truth is out there; maintaining a healthy, fresh, balanced diet is vital to your overall health and wellbeing, and the fresher the ingredients in your food, the better. Buying from a Farmer's market delivers the one-two punch of not only being good for yourself, but for your community and the environment along with it. But finding a farmer's market isn't always easy. Enter Farmwise Fresh Eats. Asking only for your zip code, our easy to use and intuitive interface shows you markets in your area at a glance. Simply click on a market to plot its location on a map, see details on goods sold, and how early (and late!) they're open. Farmwise Fresh Eats draws directly from the USDA's database of registered markets, ensuring that the data you see is as up to date and accurate as can be.",
      code: "HTML/CSS/Javascript/Materialize/JQUERY/JSON",
    },
  ];

  for (let i = 0; i < portArray.length; i++) {
    let row = $("<div>").addClass("row");
    let blankCol = $("<div>").addClass("col-lg-2");
    let cardEl = $("<div>").addClass("card col-lg-8");
    let imageEl = $("<img>").addClass("card-img");
    let bodyEl = $("<div>").addClass("card-body");
    let titleEl = $("<h5>").addClass("card-title text-center");
    let contentEl = $("<p>").addClass("card-text");
    let codeEl = $("<p>").addClass("card-text text-muted text-center");
    let subRow = $("<div>").addClass("row");
    let blankSubCol = $("<div>").addClass("col-lg-6");
    let gitIcon = $("<i>").addClass("fas fa-globe-asia cIcon");
    let globeIcon = $("<i>").addClass("fab fa-github cIcon");
    let gitBtn = $("<a>").addClass("btn btn-dark");
    let webBtn = $("<a>").addClass("btn btn-dark");

    $("#anchorEl").append(row);
    row.append(blankCol);
    row.append(cardEl);
    cardEl.append(imageEl);
    imageEl.attr("src", portArray[i].img);
    imageEl.attr("alt", "Site Demo");
    cardEl.append(bodyEl);
    cardEl.append(titleEl);
    titleEl.text(portArray[i].name);
    cardEl.append(contentEl);
    contentEl.text(portArray[i].description);
    cardEl.append(codeEl);
    codeEl.text(portArray[i].code);
    cardEl.append($("<hr>"));
    cardEl.append(subRow);
    subRow.append(gitBtn);
    gitBtn.attr("href", portArray[i].github);
    gitBtn.addClass("col-lg-3 cardBtn");
    gitBtn.text("Github");
    gitBtn.append(gitIcon);
    subRow.append(blankSubCol);
    subRow.append(webBtn);
    webBtn.addClass("col-lg-3 cardBtn");
    webBtn.attr("href", portArray[i].deployed);
    webBtn.text("Deployed Page");
    webBtn.append(globeIcon);
  }
});
