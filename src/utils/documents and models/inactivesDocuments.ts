export type InactiveStandard = {
  pis: string
  beneficioPrevidenciario: string
  tituloEleitor: string
  atoDeNomeacao: string
  atoDeConcessao: string
}

const inactivesStandard: InactiveStandard = {
  pis: "NIT/PIS/PASEP/NIS ou documento oficial que contenha a informação",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meu.inss.gov.br",
  tituloEleitor: "Titulo Eleitor",
  atoDeNomeacao: "Portaria de Posse no cargo efetivo ou Carteira Funcionalr",
  atoDeConcessao: "Portaria de Concessão do Benefício de Aposentadoria",
}

export { inactivesStandard }
