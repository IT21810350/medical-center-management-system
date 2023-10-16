import React from 'react'
import '../FMindex.css';

export default function Footer({name, email, website, phone, bankAccount, bankName}) {
  return (
    <>
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center">
        <li><span className="font-bold">Company name: </span> {name}</li>
        <li><span className="font-bold">Company email: </span> {email}</li>
        <li><span className="font-bold">Phone number: </span> {phone}</li>
        <li><span className="font-bold">Bank : </span>{bankName}</li>
        <li><span className="font-bold">Account Holder: </span> {name}</li>
        <li><span className="font-bold">Account Number: </span> {bankAccount}</li>
        <li><span className="font-bold">Website: </span><a href={website} target='_blank' rel='noopenner noreferrer'>{website}</a> </li>
      </ul>
    </footer>
    </>
  )
}
