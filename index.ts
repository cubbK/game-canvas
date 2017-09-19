
class Elev {
    constructor(public name: string, public mark:number, public isAddmited: boolean) {}

    public showFormated () {
        const text = `
        Nume: ${this.name}
        Nota: ${this.mark}
        Admis: ${this.isAddmited}
        `
        console.log(text)
    }
}

const elev1 = new Elev ('Petru', 2, true)
elev1.showFormated()