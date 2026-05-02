import { Routes, Route } from 'react-router-dom';
import PrimaryHeader from './components/PrimaryHeader';
import SecondaryHeader from './components/SecondaryHeader';
import StorePage from './pages/StorePage';
import LibraryPage from './pages/LibraryPage';
import WishlistPage from './pages/WishlistPage';
import CommunityPage from './pages/CommunityPage';
import UserPage from './pages/UserPage';
import SearchPage from './pages/SearchPage';

function App() {
    return (
        <>
            <PrimaryHeader />
            <SecondaryHeader />
            <Routes>
                <Route path="/" element={<StorePage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </>
    );
}

export default App;