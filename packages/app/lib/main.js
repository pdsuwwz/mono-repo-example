const first = require('@mono-repo-example/first')
const second = require('@mono-repo-example/second')

const app = () => 'Hi from the app'


const main = () => {
    console.log(first)
    console.log(second)
    console.log(app)
}

main()

module.exports = {
    app,
    main
}
