const a = 3;
const b = 5;

describe('Latihan menggunakan Jest' , () => {
    test('Latihan berhitung' , () => {
        const jumlah = a+b;
        expect(jumlah).toBe(8);
    })
})
 