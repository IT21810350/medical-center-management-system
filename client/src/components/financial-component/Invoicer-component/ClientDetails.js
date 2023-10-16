import React from 'react'
import '../FMindex.css';

export default function ClientDetails({clientName, clientAddress}) {
  return (
    <>
        <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold">{clientName}</h2>
        <p>{clientAddress}</p>
        </section>

    </>
  )
}
