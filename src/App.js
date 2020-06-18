import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/shoes', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ shoes: data });
            });
    }

    renderShoeInfo() {
        const { shoes } = this.state;
        const colors = {
            WHT: 'White',
            BLK: 'Black',
            VLT: 'Violet',
            IND: 'Indigo',
            BLU: 'Blue',
            GRN: 'Green',
            YLW: 'Yellow',
            ORG: 'Orange',
            RED: 'Red',
        };
        return shoes.map((shoe) => (
            <div className="shoe" key={shoes.indexOf(shoe)}>
                <strong>{`${shoe.manufacturer} - ${shoe.brand_name}`}</strong>
                <ul>
                    <li>Size --> {shoe.size}</li>
                    <li>Material --> {shoe.material}</li>
                    <li>Fasten Type --> {shoe.fasten_type}</li>
                    <li>Color --> {colors[shoe.color]}</li>
                    <li>Type --> {shoe.shoe_type}</li>
                </ul>
            </div>
        ));
    }

    render() {
        return (
            <div className="container">
                <h1>The Shoes</h1>
                <h4>List of shoes in the database...</h4>
                {this.state.shoes ? this.renderShoeInfo() : `Loading...`}
            </div>
        );
    }
}

export default App;
