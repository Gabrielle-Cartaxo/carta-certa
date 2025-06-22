// Array de modificadores disponíveis
const modifiers = [
    '+1', '+2', '+3', '+4', '+5',
    '-1', '-2', '-3', '-4', '-5',
    'x2', 'x3', 'x4',
    '/2', '/3',
    '=1', '=5', '=10', '=13'
];

// Função para obter 3 modificadores aleatórios únicos
export const getRandomModifiers = () => {
    const shuffled = [...modifiers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
};

// Função para aplicar um modificador a um valor
export const applyModifier = (value, modifier) => {
    const operator = modifier.charAt(0);
    const number = parseInt(modifier.slice(1));

    switch (operator) {
        case '+':
            return value + number;
        case '-':
            return value - number;
        case 'x':
            return value * number;
        case '/':
            return Math.floor(value / number);
        case '=':
            return number;
        default:
            return value;
    }
};