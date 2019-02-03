import AccordionVO from './AccordionVO';

test('AccordionVO should throw an error with empty arguments', () => {
    expect(() => {new AccordionVO()}).toThrow(TypeError);
});

test('AccordionVO should throw an error with empty content', () => {
    expect(
        () => {
            new AccordionVO('title');
        }).toThrowError(TypeError);
});

test('AccordionVO should work with valid arguments', () => {
    expect(
        () => {
            new AccordionVO('title', 'description');
        }).not.toThrowError(TypeError);
});

test('AccordionVO should work with valid arguments', () => {
    const instance = new AccordionVO('title', 'description');

    expect(instance.getTitle()).toBe('title');
    expect(instance.getContent()).toBe('description');
});