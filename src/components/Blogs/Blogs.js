import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/5 m-auto'>
            <h3 className='mt-5 mb-2 font-bold'>WHAT IS CONTEXT API?</h3>
            <p className=' font-serif'>the react context api is a way for a react app to effectively produce gloabl vaiable that can be passes around , this is the alternative to prop drilling or moving props grand parent to child to carent and so pn. react.createContext() is all you need.it returns a consumer and probider.the context api is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            <h3 className='mt-5 mb-2 font-bold'> WHAT IS SIMANTIC TAG?</h3>
            <p className=' font-serif'>semantic HTML tags allow you to add meaning to your markup so that searce engine  screen readers and web browser can make sense of it. by defult, user agent reads your content it doesn't understand the context and meaning. Semantic HTML tags let you serve structure content to your users, which is espacially important for on-page SEO and accessibility.
             semantic tags existed in earlier HTML versions, the HTML5 spacifications added several new semantic element to the syntax—both on the block and inline levels. In this article, we'll look into how HTML semantics work and also give you some tips about how to get the most out of the feture.</p>
             <h3 className='mt-5 mb-2 font-bold'> DIFFERENCE BETWEEN BLOCK ELEMENT AND INLINE BLOCK ELEMENTS ??</h3>
             <p className=' font-serif'> Block elements: they conseme the entire width available irrespective of their suficiency. they always start in a new line and have top and bottom margins. it does not contain any other elements next to it. <br />
             Inline Elements: inline elements occupy only suficient width required.nnline elements don't start in a new line.inline elements allow other inline elements to sit behind
             </p>
        </div>
    );
};

export default Blogs;