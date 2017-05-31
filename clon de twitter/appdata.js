  var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
  var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
  var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
  var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
  var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

  var users=[{
      name: "Toni Tralice",
      username: "@tonitralice",
      profile_pic:"https://avatars.slack-edge.com/2015-09-18/10977235269_2c26a93ae0105d154546_192.jpg"
  },{
    name: "Santi Scanlan",
    username:"@santiscanlan",
    profile_pic:"https://avatars.slack-edge.com/2015-12-28/17476816208_ae04c94897c6d65dc268_512.jpg",
  },{
    name: "Guille Aszyn",
    username: "@guilleasz",
    profile_pic:"https://avatars.slack-edge.com/2015-12-24/17359671927_16a0318a3ef5655ae10d_512.jpg",
  },{
    name: "Doge",
    username:"@dogethedog_ok",
    profile_pic:"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
  } ];

   var palabra=""

var elementorandon= function(arreglo){
  var numero1=arreglo.length
  var numero=Math.floor(Math.random()*numero1)
  return arreglo[numero]
}

var strings = function(){
 return elementorandon(opening)+" "+elementorandon(verbs)+" "+elementorandon(objects)+" "+elementorandon(nouns)+" "+elementorandon(tags);
}


var newTweet = function(){
  var tweet= {
    user: elementorandon(users),
    text: strings(),
    date: new Date(),
  }
  return tweet
}

var textoHtml = function(tweet) {
   var contenedor = $("<div>").attr("id","cont")
   var img = $("<img>").attr("src",tweet.user.profile_pic );
   var texto = $("<p>").text(tweet.text);
   var usuario = $("<p>").text(tweet.user.name+" "+tweet.user.username)
   var date = $("<p>").text(tweet.date)

   contenedor.append(img).append(usuario).append(texto).append(date)
   console.log(contenedor)
   return contenedor
   //$("#feed").prepend(contenedor)
 }


 var dieznuevostweets= function(){
  var i=0
 while (i<=10){
   textoHtml(newTweet());
   i++
 }
 }
 
 $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("bottom!");
   }
})


  var e=0
  var arreglo=[]
  while(e<=10){
    arreglo.push(newTweet())
    e++
  }
