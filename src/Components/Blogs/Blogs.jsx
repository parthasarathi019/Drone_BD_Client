//eslint-disable-next-line
import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='mx-12 md:mb-10'>
            <p className='text-center mt-2 text-6xl font-semibold'>Commonly Asked Questions</p>
            <section className='mt-10'>
                <p className='font-bold text-4xl'>1. What is an access token and refresh token...</p>
                <p className='font-[800] text-[1.5em]'> Access token⇝⇝⇝</p>
                <div className='text-[1.3em] text-[#1f2937]'>
                <p> The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. </p>
                </div>
                <p className='font-[800] text-[1.5em]'> Refresh token⇝⇝⇝</p>
                <div className='text-[1.3em] text-[#1f2937]'>
                <p> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. </p>
                </div>
            </section>

            <section className='mt-12'>
            <p className='font-bold text-4xl pb-3'>2.How does ,Access token and Refresh token, work and where should we store them on the client-side?</p>
            <p className='font-[800] text-[1.5em]'>Working principle of Access token and Refresh token⇝⇝⇝</p>
            <p className='text-[1.3em] text-[#1f2937]'>Access tokens are short-lived credentials granting access to protected resources, while refresh tokens allow obtaining new access tokens without re-authentication. On the client-side, access tokens can be stored securely in memory, HTTP-only cookies, or web storage.Where Refresh tokens, more sensitive, should be stored in secure HTTP-only cookies with CSRF protection. Secure storage prevents unauthorized access and token leakage.</p>
            </section>

            <section className='mt-12'>
            <p className='font-bold text-4xl pb-3'>3. Compare SQL and NoSQL databases...</p>
            <p className='font-[800] text-[1.5em]'> Comparesion of SQL and NoSQL databases⇝⇝⇝</p>
            <div className='text-[1.3em] text-[#1f2937]'> 
            SQL databases are structured, use a predefined schema, and are ideal for complex queries and structured data. NoSQL databases are flexible, schema-less, and suitable for unstructured or evolving data. SQL databases provide strong consistency, transactions, and support for joins, while NoSQL databases offer high scalability, horizontal scaling, and better performance for large-scale applications. 

            </div>
            </section >
            <section className='mt-10'>
                <p className='font-bold text-4xl'>4. What is Express JS and Next JS...</p>
                <p className='font-[800] text-[1.5em]'> Express JS⇝⇝⇝</p>
                <div className='text-[1.3em] text-[#1f2937]'>
                <p> Express.js is a popular, minimalistic web application framework for Node.js that simplifies the development of server-side applications. It provides a robust set of features for building APIs, handling routing, managing middleware, and serving static files. Express.js is highly flexible, allowing developers to create custom solutions tailored to their specific needs.</p>
                </div>
                <p className='font-[800] text-[1.5em]'> Next JS⇝⇝⇝</p>
                <div className='text-[1.3em] text-[#1f2937]'>
                <p> Next.js, on the other hand, is a React framework that extends the capabilities of React for building server-side rendered (SSR) and static websites. It provides features like automatic code splitting, server-side rendering, static site generation, and routing. Next.js simplifies the development process by offering a streamlined workflow and optimizing performance, making it a suitable choice for building modern, scalable web applications.  </p>
                </div>
            </section>
            <section className='mt-12'>
            <p className='font-bold text-4xl pb-3'>5.What is MongoDB aggregate and how does it work..........</p>
            <p className='font-[800] text-[1.5em]'>Working principle of MongoDB aggregate⇝⇝⇝</p>
            <p className='text-[1.3em] text-[#1f2937]'>MongoDB,s aggregate is a powerful framework used for data aggregation and analysis. It allows you to perform complex operations on collections, combining multiple stages to manipulate, transform, and process data. The aggregate pipeline consists of various stages such as filtering, grouping, sorting, and performing mathematical operations. It provides powerful operators and functions to perform advanced queries, data transformations, and analytics. The output of each stage becomes the input for the next, allowing you to create intricate data processing pipelines efficiently..</p>
            </section>
        </div>   
    );
};

export default Blogs;
//