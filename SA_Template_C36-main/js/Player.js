class Player{
    constructor(){
        this.name = null;
        this.positionX = 0;
        this.positionY = 0;
        this.score = 0;
        this.rank = 0;
        this.life = 135;
        this.fuel = 100;
    }
    addPlayer(){
        var playerIndex = "players/player"+this.index;

        if(this.index == 1){
            this.positionX = width/2-100;
        }else{
            this.positionX = width/2+100;
        }
        database.ref(playerIndex).set({
            name:this.name,
            positionX:this.positionX,
            positionY:this.positionY,
            score:this.score,
            rank:this.rank,
        });
    }

    //ler do BD a posição dos carros
    getDistance(){
        var playerDistanceRef = database.ref("players/player" + this.index);
        playerDistanceRef.on("value",(data)=>{
            var data = data.val();
            this.positionX = data.positionX;
            this.positionY = data.positionY;
        });
    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).update({
            name:this.name,
            positionX:this.positionX,
            positionY:this.positionY,
            score:this.score,
            rank:this.rank,
            life:this.life
        });
    }

    static getPlayersInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }

    getCarsAtEnd(){
        database.ref('carsAtEnd').on("value",(data)=>
        {
            this.rank = data.val();
        }
        );

    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd:rank
        });
    }
}