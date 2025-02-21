const skills: string[] = ['Bash', 'Counter', 'Push']

interface Personaje {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Personaje = {
    name: 'Strider',
    hp: 10,
    skills: ['Bash', 'Push']
}

strider.hometown = 'Cuernavaca';

console.log(strider)


export {}