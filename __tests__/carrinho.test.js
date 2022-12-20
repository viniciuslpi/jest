import Carrinho from '../carrinho/carrinho.js';
import Item from '../carrinho/item.js';

describe('Cart tests', () => {
    it('Should be empty', () => {
        const cart = new Carrinho();
        expect(cart.subtotal).toBeNull();
    });

    it('Should keep itens', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Apple', 0.5, 1);

        const cart = new Carrinho();
        cart.adiciona(item);
        cart.adiciona(item2);

        expect(typeof cart).toBe('object');
        expect(cart.itens[0]).toBe(item);
        expect(cart.itens[1]).toBe(item2);

        expect(cart.itens).toContain(item);
        expect(cart.itens).toContain(item2);

    })
})