import React, { useEffect, useState } from 'react'

export default function RaceTimer() {
  const [wa, setWa] = useState({})
  useEffect(() => {
    async function getWA() {
      let {instance, module} = await WebAssembly.instantiateStreaming(fetch("main.wasm"), window.go.importObject)
      await window.go.run(instance)
      setWa({
        mod: module,
        inst: instance
      })
    }
  }, [])
  console.log('wa', wa)
  return (
    <div>
      Hello from race timer
    </div>
  )
}
