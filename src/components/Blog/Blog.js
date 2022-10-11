import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div>
        <h1 className="my-5">Frequently Asked questions.</h1>
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What is the purpose of react router?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>
                React Router, and client-side dynamic routing, allows us to
                build a single-page web application with navigation without page
                refresh while the user is browsing.React Router uses the
                component structure to call components that display the correct
                information.
              </strong>{" "}
              I
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              How does context API works?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>
                The React Context API is a means by which a React application
                can effectively produce global variables that can be
                transmitted. It is the alternative to "prop drilling" or moving
                accessories from grandparent to child to parent, and so forth.
                The context is also presented as a simpler and lighter approach
                to state management using Redux.{" "}
                <code>React.createContext() </code>is all you need. It returns a
                consumer and a provider. Provider is a component that as it's
                names suggests provides the state to its children. It will hold
                the "store" and be the parent of all the components that might
                need that store. Consumer as it so happens is a component that
                consumes and uses the state.
              </strong>{" "}
              I
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What is useRef hook in react?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>
                The useRef returns a mutable ref object. The object has a
                property named .current. This value remains in{" "}
                <code>refContainer.current</code>. property. These values are
                accessible from the current property of the returned object. The{" "}
                <code>.current</code>the property could be initialized with the
                argument passed{" "}
                <code>initialValuee.g. useRef(initialValue)</code>. The{" "}
                <code>.current</code> object can persist a value for a full
                lifetime of the component.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
