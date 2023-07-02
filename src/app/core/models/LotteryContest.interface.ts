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

export enum ContestsToRoute {
  Mega = 0,
  Quina,
  Lotofacil
}
