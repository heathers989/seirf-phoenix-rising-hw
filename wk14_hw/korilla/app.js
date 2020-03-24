
class Receipt extends React.Component {
    render () {
        return (
            <div className="receipt">
            <h1>
             {this.props.receipt.person}
         </h1>
         <h2> Main: {this.props.receipt.order.main}</h2>
         <h2>Protein: {this.props.receipt.order.protein}</h2>
         <h2>Rice: {this.props.receipt.order.rice}</h2>
         <h2>Sauce: {this.props.receipt.order.sauce}</h2>
         <h2>Drink: {this.props.receipt.order.drink}</h2>
         <h2>Cost: {this.props.receipt.order.cost}</h2>
         </div>
        )
    }
}

class App extends React.Component {
    state = {
        receipts: receipts,
    }

    //I know this is a super unrefined way of doing this but it works? 
    handlePaidClick = (receipt) => {
        // console.log(receipt, index)
        const obj = this.state.receipts.filter(elem => elem === receipt )[0]
        obj.paid = !obj.paid
        // console.log(obj)
        this.setState({})
    }
    render () {
        return (
            <div className="container">
      
              {this.state.receipts.map((receipt) => receipt.paid ? '' : <div onClick={() => this.handlePaidClick(receipt)}><Receipt receipt={receipt} /> </div>)}

            </div>
        )
    }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('main')
    )