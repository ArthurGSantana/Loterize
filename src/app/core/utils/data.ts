import { ICardConfig } from "../models/CardConfig.interface";
import { ContestsToRoute } from "../models/LotteryContest.interface";
import { ISidebarOptions } from "../models/SidebarOptions.interface";

export const CardConfig: ICardConfig = {
  textDescription: "Simule a sua aposta!",
  textButton: "Simular"
};

export const AllowedContests: string[] = ["megasena", "quina", "lotofacil"];

export const SidebarOptionsContest: ISidebarOptions[] = [
  {
    id: ContestsToRoute.Mega,
    description: "Mega-Sena"
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
