const user = {
    username: 'batman',
    password: 'Alfred1960KPO',
    shouldOpenBatCave: function () {
        if (this.username === 'batman' && this.password === "Alfred1960KPO")
         {            console.log('The batcave is open');
        } else {
            console.log('Im sorry, the batcave is still closed')
        }
    }
};

user.shouldOpenBatCave();


