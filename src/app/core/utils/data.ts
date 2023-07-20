import { ICardConfig } from "../models/CardConfig.interface";
import {
  ContestDataType,
  ContestType,
  ContestsToRoute
} from "../models/LotteryContest.interface";
import { ISidebarOptions } from "../models/SidebarOptions.interface";

export const CardConfig: ICardConfig = {
  textDescription: "Simule a sua aposta!",
  textButton: "Simular"
};

export const AllowedContests: ContestType[] = [
  "megasena",
  "quina",
  "lotofacil"
];

export const ContestData: ContestDataType = {
  megasena: { minNumber: 6, maxNumber: 15, sizeTotal: 60 },
  quina: { minNumber: 5, maxNumber: 15, sizeTotal: 80 },
  lotofacil: { minNumber: 15, maxNumber: 20, sizeTotal: 25 }
} as const;

export const SidebarOptionsContest: ISidebarOptions[] = [
  {
    id: ContestsToRoute.Mega,
    description: "Mega Sena"
  },
  {
    id: ContestsToRoute.Quina,
    description: "Quina"
  },
  {
    id: ContestsToRoute.Lotofacil,
    description: "Lotofácil"
  }
];
