import { PensionerDocs } from "../../utils/docsInterface"

const pensionerObj: PensionerDocs = {
  id: {
    name: "Cadastro de Pessoa Física",
    optionList: [
      {
        label: "sim",
        value: "id/v",
      },
      {
        label: "não",
        value: "id/n",
      },
    ],
  },
  residencia: {
    name: "C. Residencia",
    required: true,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "sim",
        value: "cr/s",
        children: [
          {
            label: "valido",
            value: "cr/v",
          },
          {
            label: "desatualizado",
            value: "cr/60",
          },
          {
            label: "terceiros",
            value: "cr/t",
            children: [
              {
                label: "declaração de residência",
                value: "dr/u",
                children: [
                  {
                    value: "dr/s",
                    label: "sim",
                  },
                  {
                    value: "dr/n",
                    label: "nao",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "não",
        value: "cr/n",
      },
    ],
  },
  pis: {
    name: "PIS/PASEP ou NIT",
    required: true,
    present: false,
  },
  comprovacaoInvalidez: {
    name: "Declarado inválido",
    required: true,
    present: false,
    optionList: [
      {
        label: "sim",
        value: "inv/s",
        children: [
          {
            label: "presente",
            value: "inv/s/p",
          },
          {
            label: "ausente",
            value: "inv/nc",
          },
        ],
      },
      {
        label: "não",
        value: "inv/n",
      },
    ],
  },
  comprovanteEstadoCivil: {
    name: "Comprovante Estado Civil",
    required: true,
    present: false,
    optionList: [
      {
        label: "casado",
        value: "sc/c",
        children: [
          {
            label: "presente",
            value: "sc/c/s",
          },
          {
            label: "ausente",
            value: "sc/c/a",
          },
        ],
      },
      {
        label: "uniao",
        value: "sc/u",
        children: [
          {
            label: "presente",
            value: "sc/u/s",
          },
          {
            label: "ausente",
            value: "sc/u/a",
          },
        ],
      },
      {
        label: "não requerido",
        value: "sc/n",
      },
    ],
  },
  tituloEleitor: {
    name: "Titulo Eleitor",
    required: true,
    present: false,
    optionList: [
      {
        label: "+18 anos",
        value: "+18",
        children: [
          {
            label: "presente",
            value: "+18/s",
          },
          {
            label: "ausente",
            value: "+18/a",
          },
        ],
      },
      {
        label: "menor de 18 anos",
        value: "menor",
      },
    ],
  },
  identidadeExServidor: {
    name: "Identidade Ex Servidor",
    required: true,
    present: false,
    optionList: [
      {
        label: "requerido",
        value: "ide/v",
        children: [
          {
            label: "presente",
            value: "ide/v/s",
          },
          {
            label: "ausente",
            value: "ide/v/a",
          },
        ],
      },
      {
        label: "nao requerido",
        value: "ide/n",
      },
    ],
  },
  certidaoObitoExServidor: {
    name: "Certidão de Óbito do Ex Servidor",
    required: true,
    present: false,
    optionList: [
      {
        label: "requerido",
        value: "co/r",
        children: [
          {
            label: "presente",
            value: "co/r/s",
          },
          {
            label: "ausente",
            value: "co/r/a",
          },
        ],
      },
      {
        label: "nao requerido",
        value: "co/n",
      },
    ],
  },
  atoNomeacaoExServidor: {
    name: "Ato de Nomeação Ex Servidor",
    required: true,
    present: false,
    optionList: [
      {
        label: "requerido",
        value: "ato/r",
        children: [
          {
            label: "presente",
            value: "ato/r/s",
          },
          {
            label: "ausente",
            value: "ato/r/a",
          },
        ],
      },
      {
        label: "nao requerido",
        value: "ato/n",
      },
    ],
  },
  atoConcessaoPensao: {
    name: "Portaria de Concessão da Pensão",
    required: true,
    present: false,
  },
  declaracaoBeneficioPrevidenciario: {
    name: "Declaração de Benefício Previdenciário",
    required: true,
    present: false,
  },
}

export default pensionerObj
