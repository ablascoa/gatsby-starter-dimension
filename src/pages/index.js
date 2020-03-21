import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage = props => {
  const [state, setState] = React.useState({
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading',
  })
  const handleOpenArticle = article => {
    console.log('opening article', article)
    setState({ ...state, isArticleVisible: !state.isArticleVisible, article })

    setTimeout(() => {
      setState({ ...state, timeout: !state.timeout })
    }, 325)

    setTimeout(() => {
      setState({ ...state, articleTimeout: !state.articleTimeout })
    }, 350)
  }

  const handleCloseArticle = () => {
    setState({ ...state, articleTimeout: !state.articleTimeout })

    setTimeout(() => {
      setState({ ...state, timeout: !state.timeout })
    }, 325)

    setTimeout(() => {
      setState({
        ...state,
        isArticleVisible: !state.isArticleVisible,
        article: '',
      })
    }, 350)
  }
  const setWrapperRef = node => {
    console.log('setting wrapper ref', node)
    setState({ ...state, wrapperRef: node })
  }
  const handleClickOutside = event => {
    if (state.wrapperRef && !wrapperRef.contains(event.target)) {
      if (state.isArticleVisible) {
        handleCloseArticle()
      }
    }
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Layout location={props.location}>
      <div
        className={`body ${state.loading} ${
          state.isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={state.timeout} />
          <Main
            isArticleVisible={state.isArticleVisible}
            timeout={state.timeout}
            articleTimeout={state.articleTimeout}
            article={state.article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={state.timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexPage

// class IndexPage extends React.Component {
// constructor(props) {
//   super(props)
//   this.state = {
//     isArticleVisible: false,
//     timeout: false,
//     articleTimeout: false,
//     article: '',
//     loading: 'is-loading',
//   }
//   this.handleOpenArticle = this.handleOpenArticle.bind(this)
//   this.handleCloseArticle = this.handleCloseArticle.bind(this)
//   this.setWrapperRef = this.setWrapperRef.bind(this)
//   this.handleClickOutside = this.handleClickOutside.bind(this)
// }

// componentDidMount() {
//   this.timeoutId = setTimeout(() => {
//     this.setState({ loading: '' })
//   }, 100)
//   document.addEventListener('mousedown', this.handleClickOutside)
// }

// componentWillUnmount() {
//   if (this.timeoutId) {
//     clearTimeout(this.timeoutId)
//   }
//   document.removeEventListener('mousedown', this.handleClickOutside)
// }

// setWrapperRef(node) {
//   this.wrapperRef = node
// }

// handleOpenArticle(article) {
//   this.setState({
//     isArticleVisible: !this.state.isArticleVisible,
//     article,
//   })

//   setTimeout(() => {
//     this.setState({
//       timeout: !this.state.timeout,
//     })
//   }, 325)

//   setTimeout(() => {
//     this.setState({
//       articleTimeout: !this.state.articleTimeout,
//     })
//   }, 350)
// }

// handleCloseArticle() {
//   this.setState({
//     articleTimeout: !this.state.articleTimeout,
//   })

//   setTimeout(() => {
//     this.setState({
//       timeout: !this.state.timeout,
//     })
//   }, 325)

//   setTimeout(() => {
//     this.setState({
//       isArticleVisible: !this.state.isArticleVisible,
//       article: '',
//     })
//   }, 350)
// }

// handleClickOutside(event) {
//   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
//     if (this.state.isArticleVisible) {
//       this.handleCloseArticle()
//     }
//   }
// }

//   render() {
//     return (
//       <Layout location={this.props.location}>
//         <div
//           className={`body ${this.state.loading} ${
//             this.state.isArticleVisible ? 'is-article-visible' : ''
//           }`}
//         >
//           <div id="wrapper">
//             <Header
//               onOpenArticle={this.handleOpenArticle}
//               timeout={this.state.timeout}
//             />
//             <Main
//               isArticleVisible={this.state.isArticleVisible}
//               timeout={this.state.timeout}
//               articleTimeout={this.state.articleTimeout}
//               article={this.state.article}
//               onCloseArticle={this.handleCloseArticle}
//               setWrapperRef={this.setWrapperRef}
//             />
//             <Footer timeout={this.state.timeout} />
//           </div>
//           <div id="bg"></div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default IndexPage
