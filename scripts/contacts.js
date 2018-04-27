const addContacts = (name, number, address) => Object.create(null, {
    name: {
        value: name,
        enumerable: true
    },
    phoneNumber: {
        value: number,
        enumerable: true,
        writable: true
    },
    address: {
        value: address,
        enumerable: true,
        writable: true
    }
})

module.exports = addContacts