/*c'est le fichier où on définit le menu du site

Pour l'utiliser correctement, dans chaque page où apparait le menu, il faut ajouter le tag suivant:
<ul id="menu" active="Page" class="rd-navbar-nav"></ul>
où Page = la page active dans le menu

l'argument passé à la fonction append doit être dans une seule ligne.

.*/ 

$("#menu").append('<li ><a href="index.html"><span>Home</span></a> </li> <li ><a href="profil.html"><span>Profil</span></a> </li> <li><a><span>Services</span></a><ul class="rd-navbar-dropdown"> <li><a href="Genital-Surgery.html"><span class="text-middle">GENITAL SURGERY</span> </a> </li> <li><a href="face.html"><span class="text-middle">FACE</span></a></li> <li><a href="breast.html"><span class="text-middle">BREAST</span></a></li> <li><a href="body.html"><span class="text-middle">BODY</span></a></li> <li><a href="no-surgical.html"><span class="text-middle">NON-SURGICAL</span></a></li> <li><a href="regenerative-medecine.html"><span class="text-middle">REGENERATIVE MEDECINE</span></a></li> <li><a href="medspa.html"><span class="text-middle">MED SPA</span></a></li></ul> </li> <li><a href="gallery.html"><span>Gallery</span></a> </li> <li><a href="training.html"><span>Training</span></a> </li> <li><a href="contact.html"><span>Contact</span></a> </li>');
$("#menu li:contains('"+ $("#menu").attr("active") +"')").addClass("active");