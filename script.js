function Carrinho() {
    const produtosSalvos = []
    const sideBar = document.querySelector(".side-bar")
    this.start = function () {
        this.capturaDado()
        this.cart()
        this.deleta()
    }
    this.capturaDado = function () {
        const cursosContainer = document.querySelector(".cursos")
        const cursos = cursosContainer.querySelectorAll(".box")
        cursos.forEach(div => {
            div.addEventListener("click", () => {
                const h3text = div.querySelector("h3").textContent
                const img = div.querySelector("img").src
                if (this.produtoJaAdicionado(h3text)) {
                    console.log("Produto já adicionado")
                } else {
                    const newDiv = document.createElement("div")
                    const del = document.createElement("h3")
                    del.innerHTML = "X"
                    del.className = "del"
                    newDiv.innerHTML += `<img src="${img}"><h3>${h3text}</h3>`
                    sideBar.appendChild(newDiv)
                    newDiv.appendChild(del)
                    produtosSalvos.push({
                        nome: h3text
                    })
                }
            })
        })
    }
    this.produtoJaAdicionado = function (texto) {
        let real
        produtosSalvos.forEach(valor => {
            if (valor.nome === texto) {
                console.log(produtosSalvos)
                real = true
            }
        })
        return real
    }
    this.cart = function () {
        const cart = document.querySelector(".cart")
        const close = document.querySelector(".close")
        cart.addEventListener("click", () => {
            sideBar.classList.add("left")
        })
        close.addEventListener("click", () => {
            sideBar.classList.remove("left")
        })
    }
    this.deleta = function () {
        document.addEventListener("click", (e) => {
            let el = e.target
            if (el.classList.contains("del")) {
                el.parentElement.remove()
                let h3 = el.parentElement.querySelector("h3").textContent
                this.deletaArray(h3)
            }
        })
    }
    this.deletaArray = function (h3) {
        for (let i in produtosSalvos) {
            if (produtosSalvos[i].nome === h3) {
                console.log(`O produto: "${produtosSalvos[i].nome}" foi removido`)
                produtosSalvos.splice(i, 1)
                console.log(produtosSalvos)
               
            }
        }


    }
}
const carrinho = new Carrinho()
carrinho.start()


