import React from "react"

import { UIStateProvider } from "./src/context/uiContext"

export const wrapRootElement = ({ element }) => (
  <UIStateProvider>{element}</UIStateProvider>
)
