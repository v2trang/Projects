import React, {Component} from 'react';

class TeamMembers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: ''
        }
    }

    componentWillMount() {
        this.firebaseRef = this.props.db.database().ref("teamMates");
    };

    componentWillUnmount() {
        this.firebaseRef.off();
    };

    pushToFirebase(event) {
        event.preventDefault();
        this.firebaseRef.child(this.state.name).set({name: this.state.name, age: this.state.age});
        this.setState({name: '', age:''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Friend's Name
                        <input type="text" value={this.state.name}
                               onChange={e => this.setState({name: e.target.value})}/>
                    </label>
                </form>
                <form>
                    <label>
                        Friend's Age
                        <input type="text" value={this.state.age} onChange={e => this.setState({age: e.target.value})}/>
                    </label>
                </form>
                <form>
                    <button onClick={this.pushToFirebase.bind(this)}>Submit</button>
                </form>
            </div>
        );
    }
}
    export default TeamMembers;