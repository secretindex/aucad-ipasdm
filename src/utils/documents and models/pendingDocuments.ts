export type InvalidDocuments = {
  "cr/60": string
  "cr/n": string
  "cr/dsc": string
  "dr/n": string
  "id/n": string
  "cns/n": string
  "estc/nd": string
  "cerc/n": string
  "cav/n": string
  "un/n": string
  "ctc/np": string
  "inv/nc": string
  "dsvu/n": string
  "lm/r/a": string
  "crp/r/a": string
  "cnh/r/a": string
  "dp/21": string
  "dep/id/n": string
  "cnd/n": string
}

const invalidStandard: InvalidDocuments = {
  "cr/60": `Comprovante de residência emitido a partir de Agosto de 2026;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante dentro do prazo acima`,
  "cr/n": "Comprovante de Residência atualizado (emitido a partir de Agosto/2026)",
  "cr/dsc": "Comprovante de residência atualizado;\nObs: Envie uma conta emitida a partir de Agosto de 2026",
  "dr/n": `Preencha e assine a Declaração de Residência conforme o modelo disponibilizado pelo IPASDM.`,
  "id/n": "Qualquer documento de identidade com CPF (RH, CNH ou Carteira de Conselhos de Classe)",
  "cns/n": "Certidão de Nascimento",
  "estc/nd": `Certidão de acordo com o estado civil:
Casada, Divorciada ou Viúva - Certidão de Casamento (com averbação nos dois últimos casos);
União Estável - Declaração de União Estável ou Declaração de Convivência Marital (com firma reconhecida em cartório);
Solteira - Certidão de nascimento`,
  "ctc/np": `Extrato do CNIS de período anterior ao ingresso no Município, ou pelas páginas da Carteira de Trabalho que contenham os registros de contrato de trabalho (data de início e data fim), ou pelas portarias de nomeação e exoneração para servidores públicos cuja Carteira de Trabalho não registre os vínculos, fica ressalvado que, para a averbação formal e utilização desse tempo na concessão de benefício no INPREV, será indispensável a apresentação da CTC original, nos termos da legislação federal aplicável à contagem recíproca`,
  "cerc/n": "Certidão de Casamento",
  "inv/nc": "Enviar qualquer documento que comprove invalidez do dependente DEP",
  "cav/n": "Certidão de casamento averbada",
  "un/n": "Declaração de União Estável/Convivência Marital com firma reconhecida em cartório",
  "lm/r/a":
    "Laudo/Atestado médico em caso de invalidez (emitido a partir de agosto de 2026), o qual será retido no momento do censo pelo IPASDM, para fins de instrução e atualização cadastral",
  "crp/r/a":
    "Comprovante de Registro Profissional para os servidores que ocupem os cargos de Nutricionista, Odontólogo, Engenheiro Agrônomo, Administrador, Farmacêutico, Engenheiro Civil, Contador, Enfermeiro, Educador",
  "cnh/r/a": "CNH para ocupantes do cargo de Motorista",
  "dsvu/n": "Declaração de união estável + Certidão de Casamento averbada",
  "dp/21":
    "Em caso de dependente filho(a) com mais de 18 anos, é necessário enviar laudo/atestado médico caso declarado inválido. Caso não, remover como dependente previdenciário",
  "dep/id/n": "Enviar documento de identificação dos dependentes DEPS",
  "cnd/n": "Enviar certidão de nascimento do dependente DEP",
}

export type InactiveStandard = {
  pis: string
}

export type ActivesStandardType = {
  cpf: string
  pis: string
  beneficioPrevidenciario: string
  tituloEleitor: string
  portariaPosse: string
  cnis: string
  uniao: string
}

const activesStandard: ActivesStandardType = {
  cpf: "Qualquer documento contendo número do CPF",
  pis: "NIT/PIS/PASEP ou documento oficial que contenha a informação",
  cnis: "CNIS de Período Anterior ao seu ingresso no Município",
  tituloEleitor: "Título de Eleitor",
  portariaPosse: "Portaria de Posse ou Carteira Funcional",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meu.inss.gov.br",
  uniao: "Certidão de União Estável",
}

export { invalidStandard, activesStandard }
