import React from 'react';

export default class Stocks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {stocks: [], showAl: false};
    }

    componentDidMount() {
        fetch('api/stocks')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({stocks: data, showAl: true});
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.stocks.map(stock => {
                        return (
                            <div key={stock.naming}>
                                {stock.naming} {stock.date} <br/>
                                Надбавка: {stock.addition} лимитов
                            </div>
                        )
                    })
                }
                <br/>
                {this.state.showAl && <div className="goodAlert">Акции успешно загружены</div>}
            </div>
        )
    }
}