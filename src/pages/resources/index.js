const React = require('react')
const { pluck } = require('ramda')

const dbUrl = process.env.REACT_APP_DB
const PouchDB = require('pouchdb-http')
const db = PouchDB(dbUrl)

const Resources = React.createClass({
    getInitialState() {
        return {resources: []}
    },
    componentDidMount() {
        db.allDocs({
            include_docs: true
        }, (e, r) => {
            if (e)
                return this.setState({error: e.message})
            this.setState({
                resources: pluck('doc', r.rows)
            })
        })
    },
    render() {
        const listResource = doc =>
        <li key={doc._id}>
            <a href={doc.reference}>
              {doc.title}
            </a>
        </li>

        return (
            <div>
                <h3>Resources</h3>
                <ul>
                    {this.state.resources.map(listResource)}
                </ul>
            </div>
        )
    }
})



module.exports = Resources
