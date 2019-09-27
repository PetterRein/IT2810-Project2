# Project 2 Frontend

Frontend repo for Project 2 in IT2810

This is a project developed in React.js  for the course IT2810.

## Getting started
- [Prerequisites](#prerequisites)
- [Setup](#setup)

### Prerequisites
- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/)

### Setup
- Install [Prerequisites](#prerequisites)
- Navigate to desired location and clone repo
- Enter `cd project-2-frontend` to enter repo folder
- Enter `npm install` to install required packages
- Enter `npm start` to run the application
- web should start at `localhost:3000`
 
 
# Prosjektdokumentasjon for innlevering


For å kunne generere kombinasjoner av bilder, tekst og lyd, har vi laget et MediaChooser-kombonent som består av tre valg per kategori. Når disse velges av brukeren benyttes en fetch() funksjon som henter de aktuelle ressursene fra nettsidens assets, og videre vil Display-komponentet oppdatere en kombinasjon basert på mediavalgene. 
Vi valgte i utgangspunktet Serviceworker-logikk for å immøtekomme kravet om at bilder skal caches etter første innlastning, fordi dette er relativt enkelt å implementere, og fordi Serviceworker er en del av Create-React-App og ansett som standard for react-caching logikk. Serviceworker sørger for at bilder kun lastes en gang, og husker filer uavhengig av om browseren lukkes. Noen utfordringer er at dette krever HTTPS (selv om gruppen mener dette er noe å forvente av moderne websider), og at vi fikk informasjon senere fra faglærer om at dette ikke var lov å bruke. Vi har forsøkt å implementere en cachedFetch-funksjon for bilder og mp3-filer som husker hvilke bilder som er lastet inn fra før av når man fetcher mp3 og bilde-filer, og sjekker dette opp med bildene som genereres. Dette var utfordrende, så vi har forsøkt å benytte nettleserens caching.
For å lagre brukerens valg benytter vi nettelserenes LocalStorage. Et Json-objekt av både brukerens medievalg og display-komponentets bilde, lyd og tekst lagres med en SsaveToSession funksjon i Store.jsx (StoreDB-komponentet), som står for lagringslogikken. Disse blir lagret og hentet opp igjen med getItem og setItem i session når en bruker trykker på «Save» eller «Load» knappene på nettsiden. Det å velge displays som er vist i session er vanskelig, men de lagres korrekt, men vi fant ikke ut av hvordan man henter dem tilbake. 
Vi har valgt å bruke litt ekstra tid på å designe en grunnmur for et CSS-rammeverk, for å ha enkel gjenbrukbar som også kan benyttes i fremtidige prosjekter. Dette er grid-basert på 6 kolonner og lar oss ha universal utforming og design i nettsiden ved å kunne bruke standarddesign for bokser og layout. I tillegg gjør et grid-system det enkelt å justere nettsiden etter endringer i skjermstørrelse og oppløsning. Vi benytter media-tags for å poppe to kollonner inn i bredde på 100% når nettsiden når maks-størrelse på 768px. Med en universal-selektor for alle kollonnene kan vi enkelt aligne alle kollonenne vertikalt istedenfor horisontalt. 
Bruk av Git har fungert fint ettersom alle på gruppen er kjent med og har lang erfaring med git-bruk. Branching og issues benyttes for å holde oversikt over hvem som jobber på hva, og for å diskutere eventuelle endringer.
Generelt sett har utfordringer med dette prosjektet vært å sette seg inn i React. Edvard har mye erfaring i arbeidsliv med både Vue og Angular(JS/2), som ikke oversetter like godt som han tenkte originalt. React har mange måter å implementere samme logikk på, og det har vært utfordrende å finne pålitelige og «best practice»-kilder og å unngå ressurser som stackoverflow. 


 
