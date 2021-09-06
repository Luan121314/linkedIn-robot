export const manifest = {
    credentials: {
        user: process.env.EMAIL,
        password: process.env.PASSWORD
    },
    interval: 10, // in minutes 1 is equals 1 minute
    filter: [
        'Gestão',
        'RH',
        'Recursos Humanos',
        'mansão',
        'analista',
        'ceo'
    ]
}

