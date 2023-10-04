export interface IPoliceAuthorities {
  _id: string;
  nome: string;
  birthDate?: Date;
  deathDate?: Date;
  startActing: Date;
  endActing: Date;
  role: string;
  informations: string;
  observations?: string;
  picture?: string;
  state: string;
  local: string;
}
