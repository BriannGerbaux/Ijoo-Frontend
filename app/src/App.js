import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Filters from './components/filters/Filters';
import Items from './components/items/Items';
import { FiltersContext } from './context/FiltersContext.js';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
    //const [filters, setFilters] = useState({"environment": "", "region": "", "price": "", "query": ""});
    //console.log(filters);
    // const [items, setItems] = useState(null);

    //useEffect(() => {
    //    axios.get(url, { params: {  } }).then((response) => {
    //        setItems(response.data);
    //    });
    //}, []);

    return (
        <Provider store={store}>
            <Navbar />
            <Banner />
            <Filters />
            <Items />
        </Provider>
    );
}

export default App;