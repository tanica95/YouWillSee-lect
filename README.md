# **YouWillSee-lect: versione 2**

#### **Struttura semplificata:**

- 3 file php per home, categorie delle notizie e notizie vere e proprie
- le news vengono gestiste dinamicamente (i parametri di ricerca e del titolo sono impostati in un array associativo in news.php, questi dati vengono passati alla pagina delle notizie sotto forma di parametri GET, cioè nell'URL, poi vengono usati per recupeare i dati delle news tramite le API di newsapi.org)
- Header e footer spostati nella cartella includes e richiamati quando servono
- File statici (css, js e immagini) spostati nella cartella assets
- jQuery rimosso



#### **Da fare**

- Controllarre il css, mi sembra a posto, ma non vorrei aver rotto qualcosa
- Implementare p5.js. Non so come funziona e non me ne sono occupato. Cercate di non usare il JavaScript dentro dei tag script, ma create dei file appositi in assets/js e poi linkateli alle pagine in cui vi servono in modo che sia è tutto ordinato




