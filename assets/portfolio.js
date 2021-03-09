$(document).ready(function () {
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
      name: "Burgatory",
      github: "https://github.com/puentebravo/Burgatory",
      img: "./assets/images/Burgatory.gif",
      deployed: "https://mysterious-fjord-09180.herokuapp.com/",
      description: "Burgatory is your one stop digital ordering interface. Hand crafted for Burgatory, a proudly rustic dining establishment, the app allows a customer to create an order, mark it devoured, then trash it. Responses and information are logged to a SQL database, making it easier than ever to keep track of what is being eaten. Powered by Javascript, node, handlebars, and SQL, Burgatory is clean, powerful, delicious fun.",
      code: "HTML/CSS/Handlebars/SQL/JavaScript/JSON/Bootstrap/Node.js"
    },
    {
      name: "From Dad To Bad",
      github: "https://github.com/puentebravo/project2",
      img: "./assets/images/Dadabase.gif",
      deployed: "https://aqueous-meadow-09339.herokuapp.com/",
      description: "From Dad to Bad is your one stop shop for all things dad jokes, puns, and movie one liners. Whether it elicits laughter, tears, groaning, or a mixture of all three, From Dad to Bad has it all!",
      code: "HTML/CSS/Handlebars/SQL/Sequelize/JavaScript/JSON/Bootstrap/Node.js"
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
    gitBtn.addClass("col-lg-12 cardBtn");
    gitBtn.text("Github");
    gitBtn.append(gitIcon);
    subRow.append(blankSubCol);
    subRow.append(webBtn);
    webBtn.addClass("col-lg-12 cardBtn");
    webBtn.attr("href", portArray[i].deployed);
    webBtn.text("Deployed Page");
    webBtn.append(globeIcon);
  }
});
