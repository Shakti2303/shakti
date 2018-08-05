import React, { Component } from 'react';
import axios from 'axios';
import Output from './Component/Output';
import Script from './Component/Controls/Script';
import Text from './Component/Controls/Text';



class App extends Component {
  constructor(props) {
      super(props);
      this.state =
          {
            paras: 4,
              html:true,
              text:''
          }
  }
  componentDidMount()
  {
    this.getsampletext();
  }

  getsampletext()
  {
    axios.get( 'http://hipsterjesus.com/api?paras='+this.state.paras+ '&html='+this.state.html)
        .then((response) =>
        {
            this.setState({text: response.data.text}, function(){
                console.log(this.state);
            })
        })
        .catch((err)=>
        {
            console.log(err);
        })
  }
  showHtml(x)
  {
      this.setState({html:x},this.getsampletext())
  }
   changeparas(number)
  {
      this.setState({paras:number},this.getsampletext())
  }
  render() {
    return (
      <div className="App Container">
          <h1>Sample</h1>
          <hr />
          <form className="form-inline">
              <div className="form-group">
                  <label>include html:</label>
                  <Script value={this.state.html} onChange={this.showHtml.bind(this)}/>
              </div>
              <div className="form-group">
                  <label>PARAGRAPHS:</label>
                  <Text value={this.state.paras} onChange={this.changeparas.bind(this)}/>
              </div>
          </form>
      <Output  value={this.state.text}/>
              </div>
    );
  }
}

export default App;
