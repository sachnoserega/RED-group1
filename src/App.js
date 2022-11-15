import React from 'react'
import Home from './components/pages/Home/Home';
import Layout from './components/common/Layout';

const App = () => {
    return (
        <div>
            <Layout>
                <Home />
            </Layout>
        </div>
    );
}

export default App;