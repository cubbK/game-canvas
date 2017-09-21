class Basket {
    public list = []
    
    public addElement (el) {
        this.list.push(el)
    }
    public removeElement (el) {
        const deleteIndex = this.list.findIndex((listEl) => {
            return listEl.id === el.id
        })
        console.log(deleteIndex)
    }
}

export default Basket;