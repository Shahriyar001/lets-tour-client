import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div><h1 className='text-3xl my-5'>1. Difference between sql and nosql</h1></div>
                <div><p className='text-xl mb-9'>From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.

                    Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.

                    To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing.</p></div>
            </div>
            <div>
                <div><h1 className='text-3xl my-5'>2. What is JWT, and how does it work?</h1></div>
                <div><p className='text-xl mb-9'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p></div>
            </div>
            <div>
                <div><h1 className='text-3xl my-5'>3. What is the difference between javascript and NodeJS?</h1></div>
                <div><p className='text-xl mb-9'>JavaScript is a lightweight, object-oriented programming language for creating dynamic HTML pages with combined effects. When launched in the V8 engine or via the node interpreter, Node.js typically represents several objects and functions accessible to JavaScript code.

                    The differences between Node.js and JavaScript will be discussed in this post. But, before we get into the differences, let's review JavaScript and Node.js.

                    What is Node.js?
                    For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. It may run on various operating systems, including Windows, Linux, and Mac OS.</p></div>
            </div>
            <div>
                <div><h1 className='text-3xl my-5'>How does NodeJS handle multiple requests at the same time?</h1></div>
                <div><p className='text-xl mb-9'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.

                    How NodeJS handle multiple client requests?

                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p></div>
            </div>

        </div>
    );
};

export default Blog;