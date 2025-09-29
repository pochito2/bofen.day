const opcions = [
  { text: "Every Breath You Take - The Police", img: "images/1.jpg" },
  { text: "Thinkin Bout You - Frank Ocean", img: "images/2.jpeg" },
  { text: "Isn't She Lovely - Stevie Wonder", img: "images/3.jpeg" },
  { text: "Cupid's Chokehold / Breakfast in America - Gym Class Heroes", img: "images/4.jpeg" },
  { text: "Congratulations (feat. Bilal) - Mac Miller, Bilal", img: "images/5.jpeg" },
  { text: "About you - The 1975", img: "images/6.jpg" },
  { text: "Self Control - Frank Ocean", img: "images/7.jpeg" },
  { text: "Lovesong - The Cure", img: "images/8.jpeg" },
  { text: "Here, There And Everywhere - The Beatles", img: "images/9.JPG" },
  { text: "Por Ti - Sidonie", img: "images/10.jpeg" },
  { text: "Sunday Morning - Maroon 5", img: "images/11.jpg" },
  { text: "Wicked Game - Chrisk Isaak", img: "images/12.JPG" },
  { text: "Omega (feat. Ralphie Choo) - ROSALÍA, Ralphie Choo", img: "images/13.jpeg" },
  { text: "Ivy - Frank Ocean", img: "images/14.jpeg" },
  { text: "And I Love Her - The Beatles", img: "images:15.jpeg" },
  { text: "Lover, You Should've Come Over - Jeff Buckley", img: "images/16.jpeg" },
  { text: "No. 1 Party Anthem - Arctic Monkeys", img: "images/17.jpeg" },
  { text: "Beautiful Boy (Darling Boy) - John Lennon", img: "images/18.jpeg" },
  { text: "My Kind of Woman - Mac DeMarco", img: "images/19.jpg" },
  { text: "Somethin' Stupid - Frank Sinatra, Nancy Sinatra", img: "images/20.jpeg" },


];

function mostraAleatori() {
  const random = Math.floor(Math.random() * opcions.length);
  const seleccio = opcions[random];
  document.getElementById("text").textContent = seleccio.text;
  document.getElementById("imatge").src = seleccio.img;
}

mostraAleatori();
