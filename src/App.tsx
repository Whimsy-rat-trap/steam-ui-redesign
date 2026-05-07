import { Routes, Route } from 'react-router-dom';
import PrimaryHeader from './components/PrimaryHeader';
import StoreLayout from './layouts/StoreLayout';
import LibraryLayout from './layouts/LibraryLayout';
import CommunityLayout from './layouts/CommunityLayout';
import StorePage from './pages/StorePage';
import LibraryPage from './pages/LibraryPage';
import WishlistPage from './pages/WishlistPage';
import CommunityPage from './pages/CommunityPage';
import UserPage from './pages/UserPage';
import SearchPage from './pages/SearchPage';
import SubPage from "./pages/SubPage.tsx";

const createSubRoutes = (basePath: string, items: string[]) => {
    return items.map(item => {
        const path = `${basePath}/${item.toLowerCase().replace(/ /g, '-')}`;
        return <Route key={path} path={path} element={<SubPage title={`${basePath} - ${item}`} />} />;
    });
};

function App() {
    const storeItems = ['Home', 'Browse', 'Discover', 'Wishlist', 'Cart', 'Points Shop', 'Gift Cards', 'News', 'Stats'];
    const libraryItems = ['Home', 'Collections', 'Game Servers', 'Activate a Product', 'Add a non-Steam game', 'News & Updates']; // added missing
    const communityItems = ['Home', 'Discussions', 'Workshop', 'Market', 'Broadcasts']; // fixed plural
    const userItems = ['Profile', 'Friends & Groups', 'Inventory', 'Badges'];

    return (
        <>
            <PrimaryHeader />
            <Routes>
                {/* Store */}
                <Route path="/store" element={<StoreLayout />}>
                    <Route index element={<StorePage />} />
                    {createSubRoutes('/store', storeItems)}
                </Route>

                {/* Library */}
                <Route path="/library" element={<LibraryLayout />}>
                    <Route index element={<LibraryPage />} />
                    {createSubRoutes('/library', libraryItems)}
                </Route>

                {/* Wishlist */}
                <Route path="/wishlist" element={<WishlistPage />} />

                {/* Community */}
                <Route path="/community" element={<CommunityLayout />}>
                    <Route index element={<CommunityPage />} />
                    {createSubRoutes('/community', communityItems)}
                </Route>

                {/* User's Page - no secondary header */}
                <Route path="/user" element={<UserPage />} />
                {createSubRoutes('/user', userItems)}

                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </>
    );
}

export default App;