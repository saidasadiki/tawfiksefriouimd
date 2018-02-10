/*c'est le fichier où on définit le menu du site

Pour l'utiliser correctement, dans chaque page où apparait le menu, il faut ajouter le tag suivant:
<ul id="menu" active="Page" class="rd-navbar-nav"></ul>
où Page = la page active dans le menu

l'argument passé à la fonction append doit être dans une seule ligne.

.*/ 

jQuery("#menu").append('<li ><a href="index.html"><span>Home</span></a> </li> <li ><a href="profil.html"><span>Profil</span></a> </li> <li><a><span>Services</span></a><ul class="rd-navbar-dropdown"> <li><a href="women.html"><span class="text-middle">Cosmetic surgery for women</span></a> </li>  <li><a href="medspa.html"><span class="text-middle">Non-surgical procedure / med Spa</span></a> </li>   <li><a href="men.html"><span class="text-middle">Cosmetic surgery For Men</span></a> </li>  <li><a href="Genital surgery.html"><span class="text-middle">Genital surgery</span></a> </li> <li><a href="Regenerativemedicine.html"><span class="text-middle">Regenerative medicine</span></a> </li> </ul><li><a href="gallery.html"><span>Gallery</span></a> </li> <li><a href="training.html"><span>Training</span></a> </li> <li><a href="contact.html"><span>Contact</span></a> </li>');
jQuery("#menu li:contains('"+ jQuery("#menu").attr("active") +"')").addClass("active");
