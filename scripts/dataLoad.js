const dataLoad = Object.create(null, {
    loadData: {
        enumerable: true,
        writable: true,
        value: function(localStorageKey){
            const databaseString = localStorage.getItem(localStorageKey)
            return JSON.parse(databaseString)
        }
    },
    saveData: {
        enumerable: true,
        writable: true,
        value: function(databaseObject, localStorageKey){
            const stringData = JSON.stringify(databaseObject)
            localStorage.setItem(localStorageKey, stringData)
        }
    }

})

module.exports = dataLoad