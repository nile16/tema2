#Tema2
__*Förvandling med RPi*__

En simpel chat sida. 

Main.js körs av node.js och lyssnar på port 1234. När en client ansluter sparas en pekare till den klienten in en array, *clients*. 
En array, *storedMessages*, som innehåller de senaste meddelandena loopas igenom och varje meddelande sends till den nya klienten.

När ett meddelande tas emot läggs det till i *storedMessages*. Arrayen *clients* loopas igenom och det nya meddelandet sends ut till varje klient.

 
