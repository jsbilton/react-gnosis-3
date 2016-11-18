const React = require('react')

const dbUrl = process.env.REACT_APP_DB
const PouchDB = require('pouchdb-http')
const db = PouchDB(dbUrl)


const ResourceForm = React.createClass({
    getInitialState() {
        return {
            error: '',
            result: {},
            resource: {
                title: "My name",
                reference: "My stuff",
                // _id: new Date().toISOString()
            }
        }
    },
    handleChange(field) {
        return e => {
            let resource = this.state.resource
            resource[field] = e.target.value
            this.setState({
                resource
            })
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        const resource = this.state.resource
        resource._id = new Date().toISOString()
        db.put(this.state.resource, (err, result) => {
            if (err) return this.setState({
                error: err.message
            })
            this.setState({
                result: result
            })
        })
    },
    render() {

        const showError = _ =>
            this.state.error !== '' ?
            <
            div > {
                this.state.error
            } < /div> :
            null
        const showResult = _ =>
            this.state.error !== '' ?
            <
            div > {
                this.state.result
            } < /div> :
            null

        return ( <
            div > {
                showError()
            } {
                showResult()
            } <
            form onSubmit = {
                this.handleSubmit
            } >
            <
            div >
            <
            label > Title < /label> <
            input onChange = {
                this.handleChange('title')
            }
            value = {
                this.state.resource.title
            }
            /> <
            /div> <
            div >
            <
            label > Reference < /label> <
            input onChange = {
                this.handleChange('reference')
            }
            value = {
                this.state.resource.reference
            }
            /> <
            /div> <
            div >
            <
            button > Add to Database < /button> <
            /div> <
            /form> <
            hr / >
            <
            pre > {
                JSON.stringify(this.state.resource)
            } {
                JSON.stringify(this.state.error)
            } <
            /pre> <
            /div>
        )
    }
})

module.exports = ResourceForm
}
/> < /
div > <
    div >
    <
    button > Add to Database < /button> < /
    div > <
    /form> <
hr / >
    <
    pre > {
        JSON.stringify(this.state.resource)
    } {
        JSON.stringify(this.state.error)
    } <
    /pre> < /
    div >
)
}
})

module.exports = ResourceForm
