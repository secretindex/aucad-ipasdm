import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react"

import FinalTextDocuments from "../utils/endTextObject"

export const documentsContext: FinalTextDocuments = {
  id: "id/n",
  residencia: "cr/n",
  estadoCivil: "cns/n",
  pis: false,
  cnis: false,
  portariaPosse:false,
  comprovanteRegistroProfissional: "crp/n",
  tituloEleitor:false,
  beneficioPrevidenciario: false,
  comprovanteEstado: false,
  cnhParaMotoristas: "cnh/n",
  depId: "dep/n",
}

export interface ActivesContextType {
  docs: FinalTextDocuments
  setDocs: Dispatch<SetStateAction<FinalTextDocuments>>
}

const ActivesContext = createContext<ActivesContextType | undefined>(undefined)

interface ContextProps {
  children: ReactNode
}

const ActivesContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [docs, setDocs] = useState<FinalTextDocuments>(documentsContext)

  return <ActivesContext.Provider value={{ docs, setDocs }}>{children}</ActivesContext.Provider>
}

export { ActivesContextProvider, ActivesContext }
