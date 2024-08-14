//   app() function which will get render 
//   root div ko call krna hai 
//   render things in root div

function CustomRender(ReactElement , container) {

    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    domElement.setAttribute('href', ReactElement.props.href)
    domElement.setAttribute('target', ReactElement.props.target)
    container.appendChild(domElement)
    
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const MainContainer = document.getElementById('root');

CustomRender(ReactElement ,MainContainer);