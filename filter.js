

const tagFilter = [
    'developer',
    'react',
    'reactjs',
    'web',
    'ti',
    'front-end',
    'frontend',
    'desenvolvedor',
    'IBM',
    'NodeJS',
    'Full-Stack',
    'BRQ',
    'Itaú',
    'Unibanco',
    'Scraping',
    'javascript',
    'aws',
    'amazon',
    'cloud'

]
let result = []
let indexs = []

data.map((conn, index) => {
    const strs = (conn.ocupation).toLowerCase().split(' ')
    tagFilter.map(tag => {
        if (strs.includes(tag.toLowerCase())) {
            if(!indexs.includes(index)){
                result = [...result, conn]
                indexs = [...indexs, index]
            }
        }
    })
})

