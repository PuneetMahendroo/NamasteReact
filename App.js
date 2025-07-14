import ReactDOM from "react-dom/client";

const headingElement = (
    <div className="div">
        <h1 className="head" tabIndex="2">Namaste-React from JSX inside ReactElement!</h1>
    </div>
);

const Title =  () => <h1 className="Title" tabIndex="1">Namaste-React from JSX!!</h1>;

const HeadingComponent = function() {
    return (<div id="container">
                {headingElement}
                <Title />
                {/* <Title></Title>
                {Title()} */}
                <h1 className="heading">Namaste-React from Functional Component</h1>
            </div>
)};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);