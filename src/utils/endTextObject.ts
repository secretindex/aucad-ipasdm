// Type for valid and types for missing docs
type IDValid = "id/v"
type IDInvalid = "id/10" | "id/n"

// Residence
type ResidenceValid = "cr/v" | "dr/s"
type ResidenceInvalid = "cr/60" | "dr/n" | "cr/n"

// Civil State
type CivilStatusInvalid = "cns/n" | "cerc/n" | "cav/n" | "un/n" | "dsvu/n"
type CivilStatusValid = "cns/s" | "cerc/s" | "cav/s" | "un/s" | "dsvu/s" | "cns/nr"
type CNHMotoristas = "cnh/r" | "cnh/n" | "cnh/r/s" | "cnh/r/a"

// Dependent
type DependentTypeInvalid = "deco/n" | "dp/n" | "tgc/n" | "dp/21" | "dep/id/n" | "dep/id/10" | "cnd/n"
type DependentTypeValid = "deco/s" | "dp/s" | "tgc/s" | "cnd/s" | "dep/n"

type ComprovanteRegistroProfissional = "crp/r" | "crp/n" | "crp/r/s" | "crp/r/a"
type LaudoMedico = "lm/r" | "lm/n" | "lm/r/s" | "lm/r/a"

type CertidaoDeObitoExServidor = "co/r" | "co/n" | "co/r/s" | "co/r/a" 
type atoNomeacaoExServidor = "ato/r" | "ato/n" | "ato/r/s" | "ato/r/a"
type identidadeExServidor = "ide/v" | "ide/n" | "ide/v/s" | "ide/v/a"

// type CtcType = "ctc/s" | "ctc/r" | "ctc/cnis" | "ctc/ctps" | "ctc/pne" | "ctc/np"

// type TitleInvalid = "titel/n" | "titel/m"

// type ReservistaValid = "res/s" | "res/n" | "res/nr"

// type RegistroProfValid = "reg/s" | "reg/nr" | "reg/n"

interface ActivesDocuments {
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
  pis: boolean
  cnis: boolean
  portariaPosse: boolean
  tituloEleitor: boolean
  beneficioPrevidenciario: boolean
  comprovanteEstado: boolean
  comprovanteRegistroProfissional: ComprovanteRegistroProfissional
  cnhParaMotoristas: CNHMotoristas
  depId: DependentTypeInvalid | DependentTypeValid
}

export interface InactivesDocuments {
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
  pis: boolean
  tituloEleitor: boolean
  atoDeNomeacao: boolean
  atoDeConcessao: boolean
  beneficioPrevidenciario: boolean
  laudoMedico: LaudoMedico
  depId: DependentTypeInvalid | DependentTypeValid
}

export interface PensionerDocuments {
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  certidaoDeObitoExServidor: CertidaoDeObitoExServidor
  atoNomeacaoExServidor: atoNomeacaoExServidor
  identidadeExServidor: identidadeExServidor
  atoConcessaoPensao: boolean
  declaracaoBeneficioPrevidenciario: boolean
  pis: boolean
  estadoCivil: CivilStatusInvalid | CivilStatusValid
}

export default ActivesDocuments
