import './style.scss'
const $ = require('jquery')

var clicks = 0;
var winner = 1;
var number_of_players = 6;
var degree = 360 * number_of_players;
var section_angle = 360 / number_of_players;
var currentPlayers = [];
var players = ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"];
var colors = ['#16a085', '#2980b9', '#34495e', '#f39c12', '#d35400', '#c0392b'];

var setCss = function() {
  var angle, curr_color, i, j, prev_color, ref, skew_angle, fir_color;
  
  fir_color = prev_color = curr_color = colors[0];
  section_angle = 360 / number_of_players;
  
  for (i = 1; i <= number_of_players; ++i) {
    prev_color = curr_color;
    // Make sure previous and current color are not the same
    while (curr_color === prev_color) {
      curr_color = colors[Math.floor(Math.random(colors.length) * 5)];
    }
    if(i == 1) {
      fir_color = curr_color;
    }
    angle = Math.floor(section_angle * (i - 1));
    skew_angle = 90 - section_angle;
    ($(".text")).css({
      "transform": ` skewY(${skew_angle}deg) rotate(${section_angle / 2}deg)`
    });
    ($(`.wheel li:nth-child(${i})`)).css({
      "-webkit-transform": `rotate(${angle}deg) skewY(-${skew_angle}deg)`,
      "-ms-transform": `rotate(${angle}deg) skewY(-${skew_angle}deg)`,
      "transform": `rotate(${angle}deg) skewY(-${skew_angle}deg)`
    });
    ($(`.wheel li:nth-child(${i}) .text`)).css({
      "background-color": `${curr_color}`
    });
  }
  
  // Make sure previous, first and current color are not the same
  while (curr_color === prev_color || curr_color === fir_color) {
    curr_color = colors[Math.floor(Math.random(colors.length) * 5)];
  }
  ($(".wheel li:last-child .text")).css({
    "background-color": `${curr_color}`
  });
};

var spinEvent = function() {
  var extraDegree, newDegree, totalDegree;
  clicks++;
  newDegree = degree * clicks;
  extraDegree = 1 + Math.floor(Math.random() * 360);
  totalDegree = newDegree + extraDegree;
  // Calculate the winner
  winner = number_of_players - [Math.floor(totalDegree % 360 / section_angle)];
  // Display the winner after the wheel stops, rotation duration is defined in scss
  setTimeout(function() {
    $('.winner').html(currentPlayers[winner - 1]);
  }, 6000);
  $('.wheel').css({
    'transform': `rotate(${totalDegree}deg)`
  });
};

var setPlayers = function(){
  currentPlayers = [];
  var selectedPlayers = $("input:checked");
  for(var j=0; j < selectedPlayers.length; ++j) {
    currentPlayers.push($(selectedPlayers[j]).val());
  }
  // Wheel does not work when number of players is less then 4 :(
  // So as a hack double the number of players when less then 4
  if (currentPlayers.length > 1 && currentPlayers.length < 4) {
    currentPlayers = currentPlayers.concat(currentPlayers);
  }
  createList();
};

var fillOptions = function() {
  
  // Create checkbox for selecting players
  var content = "<ul class='player-list'>";
  for(var i=0; i < players.length; i++) {
    content += `<li><input type='checkbox' value='${players[i]}' checked=true/><label>${players[i]}</label><span class="close">X</span></li>`;
  }
  content += "</ul>";
  $(".player-list").replaceWith(content);
  
  $(".close").click(function(event){
    console.log("Here", event);
    var player = $(this).parent().children("label").html();
    var playerIdx = players.indexOf(player);
    if(playerIdx !== -1) {
      players.splice(playerIdx,1);
    }
    $(this).parent().remove();
    init();
  });
  
  setPlayers();
  
  // Add spin event to the spin button
  $(".spin-button").click(spinEvent);
  
  // Make currentPlayers list change according to selected checkbox
  $("input:checkbox").on("click", setPlayers);
};

var createList = function() {
  
  // Create the new wheel
  var content = "<ul class='wheel'>";
  for(var i=0; i < currentPlayers.length; i++) {
    content += `<li><div class='text'>${currentPlayers[i]}</div></li>`;
  }
  content += "</ul>"
  $(".wheel").replaceWith(content);
  
  // Reset css according to new number of players
  number_of_players = currentPlayers.length;
  setCss();
};

var init = function() {
  fillOptions();
  createList();
}

var createPlayer = function() {
  var playerName = $('.player-add').val();
  if(players.indexOf(playerName) === -1) {
    players.push(playerName);
    $('.player-add').val('');
  }
  else {
    $('.message-box').show();
    $('.message-box').html("Player already exists");
    setTimeout(function() {
      $('.message-box').hide();
    }, 500);
  }
  init();
};

var initEvents = function() {
  $('.player-add').on("enterKey", createPlayer);
  $('.player-add').keyup(function(e){
    if(e.keyCode == 13)
    {
      $(this).trigger("enterKey");
    }
  });
};

currentPlayers = players;
$("document").ready(function() {
  $('.message-box').hide();
  initEvents();
  init();
});
