import fallback from "./assets/images/parties/fallback.png";
import stiefelinacht from "./assets/images/parties/stiefelinacht.png";
import naebelgeisternacht from "./assets/images/parties/naebelgeisternacht.png";
// import gaengeliball from "./assets/images/parties/gaengeliball.png";
import vollgashoeckler from "./assets/images/parties/vollgashoeckler.png";
// import schraenzerball from "./assets/images/parties/schraenzerball.png";
import geisterball from "./assets/images/parties/geisterball.png";
//import heuroepfel from "./assets/images/parties/heuroepfel.png";
import fantasienball from "./assets/images/parties/fantasienball.png";
import jokerball from "./assets/images/parties/jokerball.png";
import schueuerball from "./assets/images/parties/schueuerball.png";
import maskenball from "./assets/images/parties/maskenball.png";
import urdorferfasnacht from "./assets/images/parties/urdorferfasnacht.png";
import hinterbaechliball from "./assets/images/parties/hinterbaechliball.jpg";

export default [
  {
    id: "1",
    title: "Füürball",
    location: {
      name: "Obfelden",
      lat: 47.26177,
      lng: 8.419706,
    },
    date: "15.01.2022",
    image: fallback,
    price: "5.- / 10.-",
    priceDescription: "",
    partyUrl: "https://www.fuurball.ch",
  },
  {
    id: "2",
    title: "Stiefelinacht",
    location: {
      name: "Muri",
      lat: 47.275661,
      lng: 8.337783,
    },
    date: "22.01.2022",
    image: stiefelinacht,
    price: "15.-",
    priceDescription: "",
    partyUrl: "https://stiefeliryter.ch/index.php/stiefelinacht.html",
  },
  {
    id: "3",
    title: "Näbelgeisternacht",
    location: {
      name: "Jonen",
      lat: 47.295974,
      lng: 8.395064,
    },
    date: "29.01.2022",
    image: naebelgeisternacht,
    price: "15.-",
    priceDescription: "",
    partyUrl: "https://www.naebelgeischter.ch/näbelgeischter-nacht/",
  },
  /*   {
    id: "4",
    title: "Gängeliball",
    location: {
      name: "Muri",
      lat: 47.275661,
      lng: 8.337783,
    },
    date: "20.02.2020",
    image: gaengeliball,
    price: "0.- / 14.-",
    priceDescription: "Bis 20:00 Uhr Gratiseintritt",
    partyUrl: "https://www.gängeli.ch/verein/gaengeliball/",
  }, */
  {
    id: "5",
    title: "Vollgashöckler",
    location: {
      name: "Hedingen",
      lat: 47.298441,
      lng: 8.448976,
    },
    date: "04.02.2023",
    image: vollgashoeckler,
    price: "",
    priceDescription: "",
    partyUrl: "https://www.vollgashoeckler.ch/Ball.html",
  },
  /*   {
    id: "6",
    title: "Schränzerball",
    location: {
      name: "Sins",
      lat: 47.191799,
      lng: 8.39531,
    },
    date: "22.02.2020",
    image: schraenzerball,
    price: "15.- / 17.-",
    priceDescription: "Maskiert / Unmaskiert",
    partyUrl: "https://schraenzer.ch/schraenzerball/",
  }, */
  {
    id: "7",
    title: "Geischterball",
    location: {
      name: "Buttwil",
      lat: 47.267594,
      lng: 8.311205,
    },
    date: "10.02.2023",
    image: geisterball,
    price: "",
    priceDescription: "",
    partyUrl: "http://lindenberggeischter.ch/geischterball/",
  },
  /*   {
    id: "8",
    title: "Heuröpfel-Party",
    location: {
      name: "Sarmenstorf",
      lat: 47.309921,
      lng: 8.24856,
    },
    date: "12.02.2022",
    image: heuroepfel,
    price: "",
    priceDescription: "",
    partyUrl: "https://www.heuroepfel.ch/gugge/index.php/anlaesse",
  }, */
  {
    id: "9",
    title: "Fantasienball",
    location: {
      name: "Muri",
      lat: 47.275661,
      lng: 8.337783,
    },
    date: "26.02.2022",
    image: fantasienball,
    price: "15.- / 30.-",
    priceDescription: "",
    partyUrl: "https://fantasienball.ch",
  },
  {
    id: "10",
    title: "Jokerball",
    location: {
      name: "Merenschwand",
      lat: 47.260704,
      lng: 8.373278,
    },
    date: "17.02.2023",
    image: jokerball,
    price: "5.- / 25.- / 15.-",
    priceDescription: "",
    partyUrl: "https://www.mery.ch/joker",
  },
  {
    id: "11",
    title: "Schüürball",
    location: {
      name: "Unterlunkhofen",
      lat: 47.322212,
      lng: 8.38051,
    },
    date: "25.02.2023",
    image: schueuerball,
    price: "15.-",
    priceDescription: "",
    partyUrl: "https://sumpfer-stilzli.ch/schuerball/",
  },
  {
    id: "12",
    title: "Maskenball",
    location: {
      name: "Zwillikon",
      lat: 47.288047,
      lng: 8.431084,
    },
    date: "12.03.2022",
    image: maskenball,
    price: "15.-",
    priceDescription: "",
    partyUrl: "https://maskenball-zwillikon.ch",
  },
  {
    id: "13",
    title: "Fasnacht urdorf",
    location: {
      name: "Urdorf",
      lat: 47.384708,
      lng: 8.4259,
    },
    date: "25.02.2023",
    image: urdorferfasnacht,
    price: "10.- / 20.-",
    priceDescription: "Maskiert / Unmaskiert",
    partyUrl: "http://fasnachturdorf.ch",
  },
  {
    id: "14",
    title: "Hinterbächliball",
    location: {
      name: "Oberrohrdorf",
      lat: 47.421817,
      lng: 8.316452,
    },
    date: "28.02.2023",
    image: hinterbaechliball,
    price: "",
    priceDescription: "",
    partyUrl: "https://www.baenkli-clique.ch/hinterbaechliball/",
  },
  {
    id: "15",
    title: "Drachenacht",
    location: {
      name: "Villmergen",
      lat: 47.348069,
      lng: 8.243969,
    },
    date: "28.01.2023",
    image: fallback,
    price: "",
    priceDescription: "",
    partyUrl: "https://www.tinitus5612.ch/drachenacht-2022/",
  },
  {
    id: "16",
    title: "Nordfäger",
    location: {
      name: "Wohlen",
      lat: 47.3519831,
      lng: 8.2792296,
    },
    date: "11.02.2023",
    image: fallback,
    price: "",
    priceDescription: "",
    partyUrl: "http://www.nordfaeger.ch/Nordfaegerparty/",
  },
  {
    id: "17",
    title: "Wörger",
    location: {
      name: "Sins",
      lat: 47.191799,
      lng: 8.39531,
    },
    date: "03.02.2023",
    image: fallback,
    price: "",
    priceDescription: "",
    partyUrl: "https://www.woerger.ch/",
  },
  {
    id: "18",
    title: "Mugumu-Ball",
    location: {
      name: "Oberrüti",
      lat: 47.16647282213088,
      lng: 8.395174425291518,
    },
    date: "11.02.2023",
    image: fallback,
    price: "",
    priceDescription: "",
    partyUrl: "http://mugumu.ch/",
  },
];
