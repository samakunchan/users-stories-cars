import { User } from './user.model';

export class Car {
  id: number;
  nom: string;
  marque: string;
  immatriculation: string;
  dateAchat: string;
  couleur: string;
  etat: string;
  createdBy: User;
}
