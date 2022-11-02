const square = function (x) {
    return x*x;
}

const square_arr = (x) => {
    return x*x;
}

const square_arr2 = (x) => x*x;

const event = {
    name: 'Birthday Party',
    guestList: ['Dilek', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        }) 
    }
}
event.printGuestList()