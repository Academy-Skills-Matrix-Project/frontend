import React from 'react';
import NavHeader from '../Components/NavHeader/NavHeader';


class LanguagesPage extends React.Component {
    render() {
        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />
                <div>
                    <h1>
                        Languages Page
                    </h1>
                </div>
            </>
        );
    }
}
export default LanguagesPage;