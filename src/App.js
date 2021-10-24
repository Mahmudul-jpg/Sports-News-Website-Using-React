//using class component
import React from 'react'
// import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import { AiTwotoneRightSquare } from 'react-icons/ai'
import Headline from './Headline/Headline'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      result: {},
      isLoading: false
    }
  }

  componentDidMount() {
    this.makeHTTPRequest()
  }
  makeHTTPRequest = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=61ebfa3a3e6446e1bdbda8db38520ba4")
      .then(res => res.json())
      .then((result) => {
        console.log(result);

        this.setState({
          result: result, isLoading: true
        })
      }, (error) => {
        this.setState({ isLoading: false, result: error })
      });

  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>

          <BrowserRouter>

            <Navbar />
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/about" exact component={About} />
              <div>
                {this.state.result.articles.map((item, index) => {
                  return <Headline title={item.title}
                    description={item.description}
                    image={item.urlToImage}
                  />
                })}
              </div>
            </Switch>


          </BrowserRouter>


        </div>
      );
    } else {
      return (
        <BrowserRouter>

          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />

          </Switch>


        </BrowserRouter>

      );
    }

  }
}
export default App

//////////   Bootstrap
//using functional component
// import React, { useEffect, useState } from 'react'
// // import './App.css';
// import Navbar from './components/Navbar/Navbar'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Headline from './Headline/Headline'


// const App = () => {
//   const [result, setResult] = useState({});
//   const [isLoading, setIsLoading] = useState(false);


//   useEffect(() => {
//     fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=61ebfa3a3e6446e1bdbda8db38520ba4')
//       .then(res => res.json())
//       .then(data => {
//         setResult(data)
//         setIsLoading(true)
//       });

//   }, [])


//   if (isLoading) {
//     return (
//       <div>
//         <BrowserRouter>
//           <Navbar />
//           <Switch>
//             <Route path="/home" exact component={Home} />
//             <Route path="/about" exact component={About} />
//             <div>
//               {result.articles.map((item, index) => {
//                 return <Headline title={item.title}
//                   description={item.description}
//                   image={item.urlToImage}
//                 />
//               })}
//             </div>
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   } else {
//     return (
//       <BrowserRouter>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" exact component={About} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }
// export default App;
