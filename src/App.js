const React = require('react')

const ResourceForm = require('./pages/resources/form')

const Resources = require('./pages/resources')

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Prognosis Negative</h1>
                <Resources />
                <ResourceForm/>
            </div>
        )
    }
})

module.exports = App
