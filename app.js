const http = require("http")
const fs = require("fs")
const url = require("url")
const { json } = require("stream/consumers")

let animeData= JSON.parse(fs.readFileSync("./Data/anime.json", "utf-8"))
let CharacterCard= fs.readFileSync("./Templates/CharacterCard.html","utf-8")
let SingleCharacterCard= fs.readFileSync("./Templates/SingleCharacterCard.html", "utf-8")

const server= http.createServer((req,res)=>{
    const parseUrl=url.parse(req.url, true);
    const { pathname, query }= parseUrl;

    if (pathname=== "/") {

        let result = animeData.data
        res.writeHead(200,{
            "content-type":"text/html"
        })

        if (query.id) {
            result = result.filter(anime => anime.mal_id==query.id)
            const html = result.map(anime=>{
                let item = SingleCharacterCard.replaceAll("{{%ID%}}", anime.mal_id)
                item = item.replaceAll("{{%IMAGE%}}", anime.images.jpg.image_url)
                item = item.replaceAll("{{%NAME%}}", anime.name)
                item = item.replaceAll("{{%NICKNAMES%}}", anime.name)
                item = item.replaceAll("{{%ABOUT%}}", anime.about.slice(0,150))
                return item
            }).join("");
            res.end(`<section style="display:flex;flex-direction:column;align-items:center">${html}</section>`);
        } else {
            const html = result.map(anime =>{
                let item = CharacterCard.replaceAll("{{%ID%}}", anime.mal_id)
                item = item.replaceAll("{{%IMAGE%}}", anime.images.jpg.image_url)
                item = item.replaceAll("{{%NAME%}}", anime.name)
                item = item.replaceAll("{{%NICKNAMES%}}", anime.name)
                return item
            }).join("");
            res.end(`<section style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px; padding: 20px;">${html}</section>`);
        }
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("server has started on link 127.0.0.1:8000")
})