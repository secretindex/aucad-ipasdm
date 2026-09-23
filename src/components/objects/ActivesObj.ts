import { ActivesDocs } from "../../utils/docsInterface"

const activesDocument: ActivesDocs = {
  id: {
    name: "Não há ativos neste censo",
    optionList: [
      {
        label: "Ok",
        value: "id/v",
      },
      {
        label: "sim",
        value: "id/n",
      },
    ],
  },
}

export default activesDocument
