import { ICardOption } from "../models/CardOption.interface";

export const CardOptions: ICardOption[] = [
  { textTitle: "MEGA SENA", textNumber: '6', textDescription: "Simule a sua aposta!", textButton: "Simular" },
  { textTitle: "QUINA", textNumber: '5', textDescription: "Simule a sua aposta!", textButton: "Simular" },
  { textTitle: "Lotofacil", textNumber: '-', textDescription: "Simule a sua aposta!", textButton: "Simular" },
];

export const AllowedGames: string[] = ['megasena', 'quina', 'lotofacil'];
