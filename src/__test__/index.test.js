//Index test

const randomString = require('../index');




describe('Probar funcionalidades random', () => {
    test('Probar funcionalidad', () => {
        expect(typeof(randomString())).toBe('string')
    });
    test('Comprobar que no existe una ciudad ', () => {
        expect(randomString()).toMatch(/Cordoba/);
    })
    
})