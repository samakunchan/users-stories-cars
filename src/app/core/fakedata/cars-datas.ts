import { Car } from '../models/car.model';
import { UserBuilder } from '../utils/builders/userBuilder';

export const carsDatas: Car[] = [
  {
    id: Date.now(),
    nom: 'Peugeot 206',
    couleur: 'bleu',
    dateAchat: '01/01/2020',
    etat: 'neuf',
    immatriculation: 'XYZ 123 XYZ',
    marque: 'Peugeot',
    createdBy: new UserBuilder().withUid('123').build(),
  },
  {
    id: Date.now() + 1,
    nom: 'Renault Twingo',
    couleur: 'bleu',
    dateAchat: '10/01/2019',
    etat: 'neuf',
    immatriculation: 'ABC 123 XYZ',
    marque: 'Renault',
    createdBy: new UserBuilder().withUid('456').build(),
  },
  {
    id: Date.now() + 2,
    nom: 'Citroen DS',
    couleur: 'bleu',
    dateAchat: '20/01/2020',
    etat: 'neuf',
    immatriculation: 'ERF 123 XYZ',
    marque: 'Citroen',
    createdBy: new UserBuilder().withUid('798').build(),
  },
];
