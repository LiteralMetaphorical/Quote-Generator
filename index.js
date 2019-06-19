var array = ["Success is most often achieved by those who don't know that failure is inevitable.", "Coco Chanel", "Things work out best for those who make the best of how things work out.", "John Wooden", "Courage is grace under pressure.", "Ernest Hemingway", "If you are not willing to risk the usual, you will have to settle for the ordinary.", "Jim Rohn", "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", "Albert Einstein", "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.", "Ellen DeGeneres", "All our dreams can come true if we have the courage to pursue them.", "Walt Disney", "It does not matter how slowly you go, so long as you do not stop.", "Confucius", "Don't cry because it's over, smile because it happened.", "Dr. Seuss", "Be yourself - everyone else is already taken.", "Oscar Wilde", "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.", "Albert Einstein", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch", "So many books, so little time.", "Frank Zappa", "A room without books is like a body without a soul.", "Marcus Tullius Cicero", "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr. Seuss", "You only live once, but if you do it right, once is enough.", "Mae West", "YOLO", "Drake", "In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost", "We accept the love we think we deserve.", "Stephen Chbosky", "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson", "Without music, life would be a mistake.", "Fredrich Nietzsche", "I am so clever that sometimes I don't understand a single word of what I am saying.", "Oscar Wilde", "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou", "A friend is someone who knows all about you and still loves you.", "Elbert Hubbard", "If you tell the truth, you don't have to remember anything.", "Mark Twain", "No one can make you feel inferior without your consent.", "Elanor Roosevelt", "Dobar ručak mužu daj da u kući bude raj", "Kuhinjska Zidnjača", "Kuharice manje zbori, da ti ručak ne zagori", "Kuhinjska Zidnjača", "Draga ženo, laku noć, ja ću kući skoro doć'", "Kuhinjska Zidnjača"];

document.onload = centar();
window.onresize = centar;

function centar() {
  var height = window.innerHeight/2 -100;
  $("body").css("padding-top", height);
}

var tracker = null;

function quotefunction() {
  $(".quotebox").slideUp(300);
  setTimeout(function() {
    var box = document.getElementById("quotebox");
    var quote = document.getElementById("quotetext");
    var author = document.getElementById("authortext");
    var rannum = Math.floor(Math.random()*array.length)
    if (rannum%2 != 0) {
      rannum -= 1;
    }
    if (rannum == tracker) {
      var rannum = Math.floor(Math.random()*array.length)
      if (rannum % 2 != 0) {
        rannum -= 1;
      }
    }
    quote.innerHTML = '"' + array[rannum] + '"';
    author.innerHTML = "-" + array[rannum + 1];
    quotetxt = document.getElementById("quotetext").innerHTML;
    quoteathr = document.getElementById("authortext").innerHTML;
    document.getElementById("tweet").setAttribute("href", "https://twitter.com/intent/tweet?text=" + quotetxt + " " + quoteathr);
    tracker = rannum;
    $(".quotebox").slideDown(900);
  }, 300);
}