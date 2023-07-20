export interface ILotteryContest {
  loteria: string;
  nome: string;
  concurso: number;
  data: string;
  local: string;
  dezenas: string[];
  premiacoes: [
    {
      acertos: string;
      vencedores: number;
      premio: string;
    }
  ];
  acumulou: boolean;
  acumuladaProxConcurso: string;
  dataProxConcurso: string;
}

export type ContestType = "megasena" | "quina" | "lotofacil";

export type ContestBody = {
  minNumber: number;
  maxNumber: number;
  sizeTotal: number;
};
export type ContestDataType = Record<ContestType, ContestBody>;

export enum ContestsToRoute {
  Mega = 0,
  Quina,
  Lotofacil
}
