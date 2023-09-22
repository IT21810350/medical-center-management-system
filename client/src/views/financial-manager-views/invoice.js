// //Import the library into your project
// import easyinvoice from 'easyinvoice';

// const = ()=>{
//     // let fs = require('fs')
// var data = {
//     //"documentTitle": "RECEIPT", //Defaults to INVOICE
//     "currency": "LKR",
//     "taxNotation": "vat", //or gst
//     "marginTop": 25,
//     "marginRight": 25,
//     "marginLeft": 25,
//     "marginBottom": 25,
//     "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
//     //"logoExtension": "png", //only when logo is base64
//     "sender": {
//         "company": "Serene Health",
//         "address": "Serene Health Medical Center",
//         "zip": "1234 AB",
//         "city": "SampGalleletown",
//         "country": "Sri Lanka"
//         //"custom1": "custom value 1",
//         //"custom2": "custom value 2",
//         //"custom3": "custom value 3"
//     },
//     "client": {
//         "company": "Client Corp",
//         "address": "Clientstreet 456",
//         "zip": "4567 CD",
//         "city": "Clientcity",
//         "country": "Clientcountry"
//         //"custom1": "custom value 1",
//         //"custom2": "custom value 2",
//         //"custom3": "custom value 3"
//     },
//     "invoiceNumber": "2020.0001",
//     "invoiceDate": "05-01-2020",
//     "products": [
//         {
//             "quantity": "2",
//             "description": "Test1",
//             "tax": 6,
//             "price": 33.87
//         },
//         {
//             "quantity": "4",
//             "description": "Test2",
//             "tax": 21,
//             "price": 10.45
//         }
//     ],
//     "bottomNotice": "Kindly pay your invoice within 15 days."

    
// };
// //Create your invoice! Easy!
// easyinvoice.createInvoice(data, async function (result) {
//     //The response will contain a base64 encoded PDF file
//     console.log(result.pdf);
//     // await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
// });
// }