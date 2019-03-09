var Counter = React.createClass({
    getDefaultProps() {
        console.log('To load some data in case if no data we provided')
    },
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1

        });
    },

    componentWillMount() {
        console.log('deprecated')
    },
    componentDidMount() {
        console.log(' ComponentDidMount W chwili wykonywania tej metody, nasz komponent widnieje już na stronie (jest zamontowany w drzewie DOM). Możemy wykonywać na nim różne operacje manipulacji, używać jQuery albo też pobrać dane. Dlaczego pobieramy dane dopiero w tym miejscu? Dlatego, że chcemy jak najszybciej pokazać nasze komponenty użytkownikowi. Nie możemy sobie pozwolić na wstrzymanie działania aplikacji tylko dlatego, że czekamy na odpowiedź z serwera.')
        console.log('Czy tu możemy użyć tych kolejnych metod?');
    },
    render: function () {
        return React.createElement('div', { className: 'counters' },

            React.createElement('div', { onClick: this.increment, className: 'counter' }, 'Increment'),
            React.createElement('div', {}, 'Counter value: ' + this.state.counter),
            React.createElement('div', { onClick: this.decrement, className: 'counter1' }, 'Decrement')
        )

    }
});

var Counter2 = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1

        });
    },
    render: function () {
        return React.createElement('div', { className: 'counters' },

            React.createElement('div', { onClick: this.increment, className: 'counter' }, 'Increment'),
            React.createElement('div', {}, 'Counter value: ' + this.state.counter),
            React.createElement('div', { onClick: this.decrement, className: 'counter1' }, 'Decrement')
        )

    }
});


var App = React.createClass({
    render: function () {
        return React.createElement('div', { className: 'app' },

            React.createElement(Counter),
            React.createElement(Counter2),
            React.createElement(Counter),
            React.createElement(Counter2)
        )
    }
})


var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));