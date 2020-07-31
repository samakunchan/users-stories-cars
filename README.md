# UsersStoriesCars Application test

Ceci est un application destiné au test.

### Installation

Ouvrez l'invite de commande dans le dossier que vous désirez, puis exécutez les commandes ci dessous.

    git clone https://github.com/samakunchan/users-stories-cars.git
    
Toujours dans l'invite de commande entrez dans votre dossier avec ``cd ./mon-dossier`` puis `npm install`

Pour terminer, tapez:

    ng serve

Exécutez cette url pour voir le résultat: ``http://localhost:4200``
### Docker

Vous pouvez exécutez le projet sous Docker.

- Etape 1:
<br> 
NB: Le point final à la fin de cette commande est important, il ne faut pas l'oublier
      
      docker build -t users-stories-cars .

- Etape 2:

      docker run -p 3000:80 users-stories-cars
    
Exécutez cette url pour voir le résultat: ``http://localhost:3000``

### Tests

Bien que les fichiers soient présent, les tests n'ont pas été configuré pour ce projet. La commande reste fonctionnel.

    ng test

## Principes

### CRUD: Create Read Update Delete
Le CRUD est gérer par les sides effects, et donc a fortiori les services.

Le but c'est qu'a chaque action de l'utilisateur, celui-ci est détecter par les sides effects, qui exécute le service approprié. Si l'action ne renvoie pas d'érreur, on exécute la LoadSuccess qui va contenir les données pour le store.

C'est uniquement à cette condition que le store est mis à jours.
