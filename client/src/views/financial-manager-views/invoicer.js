import { useState } from "react";
import NavBar from '../../components/financial-component/financial-nav-bar';
import ClientDetails from "../../components/financial-component/Invoicer-component/ClientDetails";
import Dates from "../../components/financial-component/Invoicer-component/Dates";
import Footer from "../../components/financial-component/Invoicer-component/Footer";
import Header from "../../components/financial-component/Invoicer-component/Header";
import MainDetails from "../../components/financial-component/Invoicer-component/MainDetails";
import Notes from "../../components/financial-component/Invoicer-component/Notes";
import Table from "../../components/financial-component/Invoicer-component/Table";
import TableForm from "../../components/financial-component/Invoicer-component/TableForm";


function Invoicer() {
    const [showInvoice, setShowInvoice] = useState(false)

    const [name, setName] = useState("Serene Health")
    const [address, setAddress] = useState("Malabe, Sri Lanka")
    const [email, setEmail] = useState("Serene@gmail.com")
    const [phone, setPhone] = useState("091 2003 322")
    const [bankName, setBankName] = useState("Sampath Bank")
    const [bankAccount, setBankAccount] = useState("3212 321312 131")
    const [website, setWebsite] = useState("serenehealthcare.lk")
    const [clientName, setClientName] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [notes, setNotes] = useState(" Please pay the invoice within 14 days")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)




    const handlePrint = () => {
        window.print()
    }
    return (
        <>
            <main className="m-5 p-10 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow" >
                {showInvoice ? <div>
                    <Header handlePrint={handlePrint} />

                    <MainDetails name={name} address={address} />

                    <ClientDetails clientName={clientName} clientAddress={clientAddress} />


                    <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

                    <Table description={description} quantity={quantity} amount={amount} price={price} list={list} setList={setList} total={total} setTotal={setTotal} />

                    <Notes notes={notes} />

                    <Footer
                        name={name}
                        address={address}
                        website={website}
                        email={email}
                        phone={phone}
                        bankAccount={bankAccount}
                        bankName={bankName}

                    />

                    <button onClick={() => setShowInvoice(false)}
                        className="mt-5 bg-blue-500 text-white
       font-bold py-2 px-8 rounded shadow border-2 border-blue-500 
       hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Infomation</button>

                </div> : (
                    <>
                        {/* name,address,email, phone number,bank name ,bank acc, client name, client address, 
      invoice number, invoice date,due date,notes */}
                        <div className="flex flex-col justify-center">
                            <article className="md:grid grid-cols-2 gap-10">
                                <div className="flex flex-col">
                                    <label htmlFor="name">Company Name</label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        autoComplete="off"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name">Company Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Enter your address"
                                        autoComplete="off"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                            </article>

                            <article className="md:grid grid-cols-3 gap-10">
                                <div className="flex flex-col" >
                                    <label htmlFor="email">Company Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col" >
                                    <label htmlFor="website">Company Website</label>
                                    <input
                                        type="url"
                                        name="website"
                                        id="website"
                                        placeholder="Enter your Website"
                                        autoComplete="off"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col" >
                                    <label htmlFor="phone">Company Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        autoComplete="off"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>




                            </article>

                            <article className="md:grid grid-cols-2 gap-10">
                                <div className="flex flex-col">
                                    <label htmlFor="bankName">Bank Name</label>
                                    <input
                                        type="text"
                                        name="bankName"
                                        id="bankName"
                                        placeholder="Enter your Bank Name"
                                        autoComplete="off"
                                        value={bankName}
                                        onChange={(e) => setBankName(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="bankAccount">Bank Account Number</label>
                                    <input
                                        type="text"
                                        name="bankAccount"
                                        id="bankAccount"
                                        placeholder="Enter your Bank Account Number"
                                        autoComplete="off"
                                        value={bankAccount}
                                        onChange={(e) => setBankAccount(e.target.value)}
                                    />
                                </div>

                            </article>

                            <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                                <div className="flex flex-col">
                                    <label htmlFor="clientName">Enter your Patient's name</label>
                                    <input
                                        type="text"
                                        name="clientName"
                                        id="clientName"
                                        placeholder="Enter your Patient's name "
                                        autoComplete="off"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="clientAddress">Enter your Patient's address </label>
                                    <input
                                        type="text"
                                        name="clientAddress"
                                        id="clientAddress"
                                        placeholder="Enter your Patient's address "
                                        autoComplete="off"
                                        value={clientAddress}
                                        onChange={(e) => setClientAddress(e.target.value)}
                                    />
                                </div>

                            </article>
                            <article className="md:grid grid-cols-3 gap-10">
                                <div className="flex flex-col">
                                    <label htmlFor="invoiceNumber">Invoice Number </label>
                                    <input
                                        type="text"
                                        name="invoiceNumber"
                                        id="invoiceNumber"
                                        placeholder="Invoice Number "
                                        autoComplete="off"
                                        value={invoiceNumber}
                                        onChange={(e) => setInvoiceNumber(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="invoiceDate">Invoice Date </label>
                                    <input
                                        type="date"
                                        name="invoiceDate"
                                        id="invoiceDate"
                                        placeholder="Invoice Date "
                                        autoComplete="off"
                                        value={invoiceDate}
                                        onChange={(e) => setInvoiceDate(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col" >

                                    <label htmlFor="dueDate">Due Date</label>
                                    <input
                                        type="date"
                                        name="dueDate"
                                        id="dueDate"
                                        placeholder="Invoice Date"
                                        autoComplete="off"
                                        value={dueDate}
                                        onChange={(e) => setDueDate(e.target.value)}
                                    />
                                </div>

                            </article>

                            {/* this is table */}
                            <article>
                                <TableForm
                                    description={description}
                                    setDescription={setDescription}
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                    price={price}
                                    setPrice={setPrice}
                                    amount={amount}
                                    setAmount={setAmount}
                                    list={list}
                                    setList={setList}
                                    total={total}
                                    setTotal={setTotal}


                                />
                            </article>




                            <label htmlFor="notes">Additional Notes</label>
                            <textarea name="notes" cols="30" rows="10" placeholder="Additional Notes to client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>


                            <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white 
      font-bold py-2 px-8 rounded shadow border-2 border-blue-500 
      hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>



                        </div>

                    </>

                )}
            </main>

        </>
    );
}

export default Invoicer;


