# projet-site-podcasts

Ce projet est dédié à la 
réalisation d'une application 
web permettant aux professeurs 
du département Télécommunications 
de l'INSA Lyon de déposer des 
fichiers audio éducatifs, 
permettant aux étudiants 
une continuité dans leurs études à distance.

Ce projet fonctionne avec Node.js/Angular, 
ainsi ces modules doivent être 
installés (les commandes node, 
npm et ng doivent fonctionner).

De même la base de données fonctionne
sur mongodb, les commandes mongo 
et mongoimport seront donc nécessaires.

Pour installer ce projet, entrez la
ligne de commande suivante : 

`git clone https://github.com/gkabbadj/projet-site-podcasts.git` 

Cela va mettre tous les fichiers dans
un répertoire nommé 'projet-site-podcasts'. Il 
vous faut désormais installer les dépendances, pour cela
rien de plus simple. 

Dans un premier temps, en 
partant de 'projet-site-podcasts' : 

`cd backend`

`npm install` 

Dans un second temps, toujours en
partant de 'projet-site-podcasts' : 

`cd frontend` 

`npm install`

Ensuite, pour que le code fonctionne, 
il faudra modifier les instances de 
xxx.insa-lyon.fr, en remplaçant xxx par 
le nom de votre machine. Celles-ci se 
trouvent dans les fichiers suivants : 
- frontend/src/app/services/ajout.service.ts
- frontend/src/app/ajout-podcast/ajout-podcast.component.ts
- backend/app.js

Pour que ces changements puissent être pris en compte, il faudra compiler. 
Ainsi, dépendamment du côté où l'on compile, la façon diffère : 
- Coté frontend, lancez `ng build`
- Côté backend, à chaque changement dans un fichier x.js il vous 
suffira de sauvegarder puis relancer `node x`

Enfin, pour lancer l'application, lancez `node server`


Une dernière remarque supplémentaires pour vous aider à modifier en profondeur votre
base de données (ajouter/supprimer des niveaux/matières par exemple). Pour ce faire,
il vous faudra exécuter la commande suivante,
sachant que votre fichier se nomme x.json
et se trouve dans le fichier de chemin
d'accès YOURPATH :

`mongoimport --username user --password 
user --uri 'mongodb://cluster0.q4qa7.mongodb.net' 
--collection matieres --file 
'C:/matierePodcast.json' --jsonArray`

Notez bien qu'ici j'ai mis mon lien de base de données 
(avec un autre nom d'utilisateur et mot de passe évidemment !),
il vous faudra donc mettre votre propre lien 
de base données ainsi que votre nom d'utilisateur et 
mot de passe pour accéder à la collection.


