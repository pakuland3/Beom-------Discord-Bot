const Schema = require("../models/도박");

module.exports={
    name:"야바위",
    async execute(message, args){
        const userInfo = await Schema.findOne({
            userid: message.author.id
        })
        if(!userInfo) return message.reply("**\"범이야 돈줘\"로 먼저 돈을 받아**");
        else{
            if (isNaN(args[0])) return message.reply("**베팅 하실 금액을 입력해**");
            if (args.join(" ").includes("-")) return message.reply("**금액엔 -가 포함되면 안돼 !**");
            const money = parseInt(args[0]);
            if (money < 500) return message.reply("**최소 베팅금액은 500원이야**");
            if (money > ehqkrduqn.money) return message.reply("**소유하고 있는 돈 보다 많은 금액을 베팅할 순 없어**");
            
        }
    }
}