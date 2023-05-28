const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  type: {
    type: AnimalBreeds,
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Date,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum:["Masculino", "Femenino"]
  },
  creationdate:{
    type: Date,
    required: true,
    trim: true,
},
  lastupdatedate:{
      type: Date,
      required: true,
      trim: true,
  },
  description: {
      type: String,
      required: true
    },
  images: {
      type: String,
      required: true
  },
});

const AnimalBreeds = {
    PERRO: {
      LABRADOR_RETRIEVER: 'Labrador Retriever',
      GERMAN_SHEPHERD: 'Pastor Alemán',
      GOLDEN_RETRIEVER: 'Golden Retriever',
      FRENCH_BULLDOG: 'Bulldog Francés',
      BULLDOG: 'Bulldog',
      POODLE: 'Caniche',
      BEAGLE: 'Beagle',
      ROTTWEILER: 'Rottweiler',
      YORKSHIRE_TERRIER: 'Yorkshire Terrier',
      BOXER: 'Boxer',
      DACHSHUND: 'Dachshund',
      CHIHUAHUA: 'Chihuahua',
      SIBERIAN_HUSKY: 'Husky Siberiano',
      GREAT_DANE: 'Gran Danés',
      PUG: 'Carlino',
      SHIH_TZU: 'Shih Tzu',
      BOSTON_TERRIER: 'Boston Terrier',
      AUSTRALIAN_SHEPHERD: 'Pastor Australiano',
      BULL_TERRIER: 'Bull Terrier',
      BORDER_COLLIE: 'Border Collie'
    },
    GATO: {
      PERSIAN: 'Persa',
      SIAMESE: 'Siamés',
      MAINE_COON: 'Maine Coon',
      BENGAL: 'Bengala',
      RAGDOLL: 'Ragdoll',
      BRITISH_SHORTHAIR: 'British Shorthair',
      SCOTTISH_FOLD: 'Scottish Fold',
      SPHYNX: 'Sphynx',
      ABYSSINIAN: 'Abisinio',
      BIRMAN: 'Birmano',
      RUSSIAN_BLUE: 'Azul Ruso',
      DEVON_REX: 'Devon Rex',
      NORWEGIAN_FOREST: 'Bosque de Noruega',
      EXOTIC_SHORTHAIR: 'Exótico de Pelo Corto',
      PERSIAN_HIMALAYAN: 'Persa Himalayo',
      CHARTREUX: 'Chartreux',
      ORIENTAL_SHORTHAIR: 'Oriental de Pelo Corto',
      SOMALI: 'Somalí',
      SELKIRK_REX: 'Selkirk Rex',
      CORNISH_REX: 'Cornish Rex'
    },
    TORTUGA: {
      RED_EARED_SLIDER: 'Tortuga de Orejas Rojas',
      PAINTED_TURTLE: 'Tortuga Pintada',
      BOX_TURTLE: 'Tortuga de Caja',
      SULCATA_TORTOISE: 'Tortuga Sulcata',
      SNAPPING_TURTLE: 'Tortuga Mordedora',
      MAP_TURTLE: 'Tortuga Mapa',
      SOFTSHELL_TURTLE: 'Tortuga de Caparazón Blando',
      MUD_TURTLE: 'Tortuga de Barro',
      DIAMOND_BACK_TERRAPIN: 'Terrapín de Espalda de Diamante',
      SPINY_SOFTSHELL_TURTLE: 'Tortuga de Caparazón Blando con Espinas',
      WESTERN_POND_TURTLE: 'Tortuga de Estanque Occidental',
      WOOD_TURTLE: 'Tortuga de Madera',
      ALDERNEY_TESTUDO: 'Testudo de Alderney',
      ALIGATOR_SNAPPING_TURTLE: 'Tortuga Mordedora Aligátor',
      BELIZE_SLIDER: 'Tortuga de Belice',
      BERMUDA_TURTLE: 'Tortuga de Bermudas',
      BOG_TURTLE: 'Tortuga de Pantano',
      JAPANESE_POND_TURTLE: 'Tortuga de Estanque Japonesa',
      WESTERN_HERMANN_TORTOISE: 'Tortuga Hermann Occidental',
      HINGED_BACK_TERRAPIN: 'Terrapín de Espalda Articulada'
    },
    CABALLO: {
      CABALLO_CUARTO_DE_MILLA: 'Cuarto de Milla',
      PURA_SANGRE_INGLES: 'Pura Sangre Inglés',
      CABALLO_ARABE: 'Árabe',
      APPALOOSA: 'Appaloosa',
      CABALLO_PINTO: 'Pinto',
      CABALLO_FRÍSEO: 'Fríseo',
      CABALLO_ANDALUZ: 'Andaluz',
      MORGAN: 'Morgan',
      TENNESSEE_WALKER: 'Tennessee Walker',
      GYPSY_VANNER: 'Gypsy Vanner',
      HAFLINGER: 'Haflinger',
      PERCHERÓN: 'Percherón',
      SILLA_AMERICANO: 'Silla Americano',
      BELGA: 'Belga',
      MUSTANG: 'Mustang',
      SHETLAND: 'Shetland',
      WELSH: 'Welsh',
      CLYDESDALE: 'Clydesdale',
      DRAUGHT_IRLANDÉS: 'Draught Irlandés',
      MONTURA_GAITED: 'Montura Gaited'
    }
};


let Pet = mongoose.model('Pet',petSchema);

module.exports = Pet;