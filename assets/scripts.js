$(document).ready(init());

function init() {
  var limit = 12;
  getDogs(limit);
}

function getDogs(limit) {
  $.ajax({
    url: 'https://dog.ceo/api/breeds/image/random/' + limit,
    success: function(result) {
      if (result.status == 'success') {
        var images = result.message;
        buildProfiles(images);
      }
    }
  });
}

function buildProfiles(images) {
  var cardTemplate = $('.dog-profile');
  
  images.forEach(function(image, index){
    let card = cardTemplate.clone();
    let rating = getRating();
    
    $(card).find('.dog-profile__image img').attr('src', image);
    $(card).find('.dog-profile__content').text(getContent());
    $(card).find('.dog-profile__name').text(getName());

    for (var i = 0; i < rating; i++) {
      $(card).find('.dog-profile__rating').text( $(card).find('.dog-profile__rating').text() + '* ');
    }

    $(card).appendTo('.dogs .flex');
  });

  cleanUp();
}

function cleanUp() {
  $('.dog-profile:first()').remove();
  $('.dog-profile').show();
}

function getRating() {
  return Math.floor(Math.random() * 5) + 1;
}

function getContent() {
  var content = [
    'Doggo ipsum noodle horse dat tungg tho I am bekom fat aqua doggo boof doge, big ol pupper pupper borkdrive puggorino. Borkf wow such tempt many pats, shoober. Yapper very taste wow corgo blop, long bois yapper boofers, long doggo very hand that feed shibe. Lotsa pats ruff puggo long bois blep, puggo floofs.  Blep long doggo puggorino very good spot puggorino, mlem many pats fat boi.',
    'Doggo ipsum noodle horse pupper long woofer smol heckin, floofs blep most angery pupper I have ever seen maximum borkdrive adorable doggo, borking doggo floofs puggorino. floofs borkf. Floofs long doggo shibe fat boi what a nice floof long woofer, borking doggo you are doin me a concern tungg shooberino. Many pats blep lotsa pats puggo maximum borkdrive, shoob very taste wow.',
    'Ruff what a nice floof smol borking doggo with a long snoot for pats very hand that feed shibe dat tungg tho puggorino, what a nice floof long doggo aqua doggo bork wow very biscit, heckin good boys floofs shibe blop. Long bois blep very taste wow h*ck pupperino heckin angery woofer blop, boof pupper length boy heckin. Very good spot doge long water shoob many pats blep, mlem sub woofer borkdrive. ',
    'Doggo ipsum  Puggo shibe very good spot, bork. Puggorino super chub blep borkf waggy wags borkdrive many pats, corgo doggorino maximum borkdrive what a nice floof shooberino adorable doggo, he made many woofs super chub woofer big ol pupper heckin. Dat tungg tho many pats shoob smol wrinkler, long bois you are doin me a concern smol, shoober puggorino snoot. ',
    'Wow very biscit doggo woofer boof he made many woofs big ol yapper aqua doggo much ruin diet super chub, boof woofer waggy wags thicc length boy heckin angery woofer maximum borkdrive. Heck heckin good boys and girls doge shooberino sub woofer porgo clouds shooberino boofers, shoober doing me a frighten smol borking doggo with a long snoot for pats shibe much ruin diet blep.',
    'Blop shoober the neighborhood pupper shibe, ruff. Blop you are doing me the shock doggorino woofer yapper smol, ur givin me a spook long bois smol borking doggo with a long snoot for pats. Porgo dat tungg tho porgo thicc what a nice floof fluffer pats, puggo wow such tempt snoot fluffer. Woofer h*ck sub woofer puggo stop it fren, shoober snoot.  Mlem such treat thicc very hand that feed shibe, heckin length boy.',
    'Shoob pupper long woofer porgo long woofer, heckin good boys and girls big ol. Smol borking doggo with a long snoot for pats blep pats many pats you are doing me the shock wow very biscit, smol borking doggo with a long snoot for pats h*ck wow such tempt stop it fren, boof long water shoob puggorino fluffer.',
    'good spot ruff h*ck heckin good boys and girls, big ol shooberino. You are doing me a frighten heckin long doggo, big ol pupper. Wow very biscit he made many woofs clouds wrinkler porgo very hand that feed shibe, dat tungg tho boofers waggy wags. Many pats you are doing me a frighten very good spot adorable doggo you are doing me a frighten, doge corgo.'
  ];

  return content[Math.floor(Math.random() * content.length)];
}

function getName() {
  var names = [
    'Bob Barker',
    'Woofy',
    'Jack',
    'Apex',
    'Ajax',
    'Magnus',
    'Merle',
    'Duck',
    'Wayne',
    'Burly',
    'Godiva',
    'Princess',
    'Rex',
    'Puddles',
    'Bucket',
    'Peapod',
    'Chopsticks',
    'Spot',
    'Fido',
    'Missy',
    'Mr. Dog',
    'Mrs. Dog',
    'Cat',
    'Aubrey',
    'Lily',
    'Penny',
    'Tasha',
    'Rey',
    'Vivianna',
    'Soma',
    'Dot'
  ];

  return names[Math.floor(Math.random() * names.length)];
}