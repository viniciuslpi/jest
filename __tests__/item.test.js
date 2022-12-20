import Item from "../carrinho/item";

describe('Item tests', () => {
    it('Should return 3 fields: name, value and quantity', () => {
        const item = new Item('Beterraba', 2.5, 10);

        expect(item.nome).toBe('Beterraba');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });

    it('Should return the price equals to quantity', () => {
        const item = new Item('Batata', 0.1, 3);

        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
    })
})