#Tema2
__*Förvandling med RPi*__

En simpel chat sida. 

Main.js körs av node.js och lyssnar på port 1234. När en client ansluter sparas en pekare till den klienten in en array, *clients*. En array, *storedMessages*, som innehåller de senaste meddelandena loopas igenom och varje meddelande sänds till den nya klienten.

När ett meddelande tas emot läggs det till i *storedMessages*. Arrayen *clients* loopas igenom och det nya meddelandet sänds ut till varje klient.

Index.html innehåller tre funktioner och en eventlyssnare. En funktion, *saveUser* sparar ett användaralias. 
Den andra funktionen, *sendMessage*, sänder ut det som har skrivits när enterknappen trycks ner. 
Om meddelandet som ska sändas är strängen "förvandling" sänds den inte utan en slumpfärg i rbg format sänds istället.

När ett meddelande tas emot anropar eventlyssnaren en annonym funktion som lägger meddelandet till chatloggen. 
Om meddelandet är en färg ändras sidans bakgrundsfärg till den färgen. 

Denna sida var till stor hjälp: http://codular.com/node-web-sockets
