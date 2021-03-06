const fs = require('fs');

// Membuat folder data jika belom ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belom ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf8');
    
}
// Ambil semua data di contact.json
const loadContact = ()=> {

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

// Cari contact berdasarkan nama
const findContact =(nama)=> {
    const contacts = loadContact();

    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    );
    return contact;
}

//Menuliskan/ menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts)=> {
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

};


// menambahkan data contact baru
const addContact = (contact)=> {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);

};

// cek nama yang duplikat 
const cekDuplikat =(nama)=> {
    const contacts = loadContact();
    return contacts.find((contact)=> contact.nama.toLowerCase() === nama.toLowerCase())


};

module.exports = {loadContact, findContact, addContact, cekDuplikat};