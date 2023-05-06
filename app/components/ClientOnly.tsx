import React from 'react'

type Props = {
  children: React.ReactNode;
}

function ClientOnly({ children }: Props) {
  return (
    <div>{children}</div>
  )
}

export default ClientOnly