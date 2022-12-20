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

    it('Should have the total property in the inicialization', () => {
        const cart = new Carrinho();
        expect(cart).toHaveProperty('total');
    })

    it('Should throw error if cart is empty', () => {
        function getCartError() {
            const cart = new Carrinho();
            cart.finalizaCompra();
        }
        expect(getCartError).toThrowError('Carrinho de compras vazio');
    });

    it('Should add shipping', () => {
        const cart = new Carrinho();
        cart.adicionaFrete(10);
        expect(cart.frete).toBe(10);
    })

    it('Should do the checkout', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Mel', 1, 5);

        const cart = new Carrinho();
        cart.adiciona(item);
        cart.adiciona(item2);
        cart.adicionaFrete(10);

        expect(cart.finalizaCompra()).toStrictEqual({
            subtotal: 15,
            frete: 10,
            total: 25
        })
    })
})