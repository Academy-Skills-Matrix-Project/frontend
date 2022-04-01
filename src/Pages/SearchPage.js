import React from 'react';
import NavHeader from '../Components/NavHeader/NavHeader';


class SearchPage extends React.Component {
    render() {
        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={true} />
                <div>
                    <h1>
                        Search Page
                    </h1>
                </div>
            </>
        );
    }
}

export default SearchPage;