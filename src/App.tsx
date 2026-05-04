import { Routes, Route } from 'react-router-dom';
import PrimaryHeader from './components/PrimaryHeader';
import StoreSecondaryHeader from './components/StoreSecondaryHeader';
import StorePage from './pages/StorePage';
import LibraryPage from './pages/LibraryPage';
import WishlistPage from './pages/WishlistPage';
import CommunityPage from './pages/CommunityPage';
import UserPage from './pages/UserPage';
import SearchPage from './pages/SearchPage';
import SubPage from "./pages/SubPage.tsx";

// Helper to create subpage routes for a given base path and items
const createSubRoutes = (basePath: string, items: string[]) => {
    return items.map(item => {
        const path = `${basePath}/${item.toLowerCase().replace(/ /g, '-')}`;
        return <Route key={path} path={path} element={<SubPage title={`${basePath} - ${item}`} />} />;
    });
};

function App() {
    const storeItems = ['Home', 'Browse', 'Discover', 'Wishlist', 'Cart', 'Points Shop', 'Gift Cards', 'News', 'Stats'];
    const libraryItems = ['Home', 'Collections', 'Game Servers', 'Activate a Product', 'Add a non-Steam game'];
    const communityItems = ['Home', 'Discussions', 'Market', 'Workshop', 'Broadcasts'];
    const userItems = ['Profile', 'Friends & Groups', 'Inventory', 'Badges'];

    return (
        <>
            <PrimaryHeader />
            <Routes>
                {/* Store main page and subpages */}
                <Route path="/store" element={<><StoreSecondaryHeader /><StorePage /></>} />
                {createSubRoutes('/store', storeItems)}

                {/* Library main and subpages */}
                <Route path="/library" element={<LibraryPage />} />
                {createSubRoutes('/library', libraryItems)}

                {/* Wishlist */}
                <Route path="/wishlist" element={<WishlistPage />} />

                {/* Community main and subpages */}
                <Route path="/community" element={<CommunityPage />} />
                {createSubRoutes('/community', communityItems)}

                {/* User main and subpages */}
                <Route path="/user" element={<UserPage />} />
                {createSubRoutes('/user', userItems)}

                {/* Search */}
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </>
    );
}

export default App;