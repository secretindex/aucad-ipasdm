export type InvalidPensioner = {
  "cr/60": string
  "cr/n": string
  "cr/dsc": string
  "dr/n": string
  "pis/18/n": string
  "dips/n": string
  "id/n": string
  "cerc/n": string
  "sc/c/a": string
  "sc/u/a": string
  "co/r/a": string
  "inv/nc": string
  "cav/n": string
  "un/n": string
  "dsvu/n": string
  "an/v/a": string
  "ato/r/a": string
  "ide/v/a": string
  "idsf/n": string
  "+18/a": string
}

const invalidPensioner: InvalidPensioner = {
  "cr/60": `Comprovante de residência emitido a partir de agosto/2026;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante emitido dentro do prazo acima`,
  "cr/n": "Comprovante de Residência atualizado (emitido a partir de agosto/2026)",
  "cr/dsc":
    "Comprovante de residência emitido nos últimos 60 dias;\nObs: Envie uma conta emitida a partir de agosto de 2026",
  "dr/n": `Preencha e assine a Declaração de Residência, requerida quando o comprovante possui nome de terceiro.`,
  "pis/18/n": "Enviar comprovante de cadastro no PIS/PASEP ou NIT",
  "dips/n": "Enviar declaração de Inacumulabilidade de Pensão",
  "idsf/n": "Documento de Identidade e CPF do ex-servidor (a) falecido(a)",
  "id/n": "Qualquer documento de identidade com CPF (RH, CNH ou Carteira de Conselhos de Classe)",
  "cerc/n": "Certidão de Casamento",
  "sc/c/a": "Certidão de casamento",
  "sc/u/a": "Declaração de união estável ou Sentença declaratória de união estável",
  "inv/nc": "Enviar qualquer documento que comprove a condição de invalidez declarada",
  "co/r/a": "Certidão de Óbito do ex-servidor(a) falecido(a)",
  "an/v/a": "Ato de nomeação no cargo efetivo do ex-servidor(a) falecido(a)",
  "ato/r/a": "Portaria de posse do ex-servidor (a) falecido(a) ou Carteira Funcional",
  "+18/a": "Título de Eleitor para os maiores de 18 anos",
  "ide/v/a": "Documento de Identidade e CPF do ex-servidor (a) falecido(a)",
  "cav/n": "Certidão de casamento averbada",
  "un/n": "Declaração de união estável + Certidão de Nascimento",
  "dsvu/n": "Escritura Pública ou Sentença Declaratória de União Estável",
}

export type PensionerCheck = {
  pis: boolean
}

export type StandardPensioner = {
  pis: string
  atoConcessaoPensao: string
  declaracaoBeneficioPrevidenciario: string
}

const standardPensioner: StandardPensioner = {
  pis: "NIT/PIS/PASEP ou documento oficial que contenha a informação",
  atoConcessaoPensao: "Portaria de Concessão do Benefício de Pensão",
  declaracaoBeneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meu.inss.gov.br",
}

export { invalidPensioner, standardPensioner }
