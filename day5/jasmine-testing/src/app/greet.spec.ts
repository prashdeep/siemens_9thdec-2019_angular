import {greet} from './greet';

describe('test suite for greet function testing', ()=>{
    it('positive test case', () => {
        const result = greet("welcome", "Vinay", "kumar");
        console.log(result);
        expect(result).not.toBe(null);
        expect(result).toBe("welcome - Vinay , kumar");
    });
    it('negative test case', () => {
        const result = greet("welcome", "Vinay",null);
        console.log(result);
        expect(result).not.toBe(null);
        expect(result).not.toBe("welcome - Vinay , kumar");
        expect(result).toBe("welcome - Vinay , ");
    });
})