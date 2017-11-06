import React, {Component} from 'react';

class DisplayData extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }

    }
    componentWillMount() {
        this.firebaseRef = this.props.db.database().ref("teamMates");
        this.firebaseRef.on('value', function(dataSnapshot) {
            var items = [];
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                items.push(item);
            }.bind(this));
            this.setState({
                items: items
            });
        }.bind(this));
    };

    componentWillUnmount() {
        this.firebaseRef.off();
    };

    render(){
        const items = this.state.items;
        const records = items.map((items) =>
            <tr>
                <td style={{width: '200px', textAlign:'center'}}>{items.name}</td>
                <td style={{width: '200px', textAlign: 'center'}}>{items.age}</td>
            </tr>);
        return (
            <div style={{paddingTop: '20px'}}>
                <table style={{border:'1px solid black'}}>
                    <thead>
                    <th>Friend's Name</th>
                    <th>Friend's Age</th>
                    </thead>
                    <tbody>
                    {records ? records : ''}
                    </tbody>
                </table>

            </div>
        )
        return(
            <div>

            </div>
        )
    }
}
export default DisplayData