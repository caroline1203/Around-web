import React from 'react';
import {Input} from 'antd';

import {Radio} from 'antd';


function SearchBar(props) {
    const onSearch = value => console.log(value);
    const {Search} = Input;
    return (
<div>
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        />

            <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group></div>
    );


}

export default SearchBar;