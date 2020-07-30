// All action made after clicking a button

import startSearch from './startSearch';
import startWave from './startWave';

const handleButton = () => {
    startWave();
    startSearch();
}

export default handleButton;