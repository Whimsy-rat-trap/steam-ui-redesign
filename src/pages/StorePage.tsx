// src/pages/StorePage.tsx
import React, { useState } from 'react';
import Search from '../components/Search';
import DropdownMenu from '../components/DropdownMenu';
import MenuButton from '../components/MenuButton';
import SortFilter from '../components/SortFilter';
import Tag from '../components/Tag';
import FilterOffIcon from '../components/FilterOffIcon';
import Toggle from '../components/Toggle';
import WishlistButton from '../components/WishlistButton';
import Checkbox from '../components/Checkbox';
import PrimaryButton from "../components/PrimaryButton.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";
import TertiaryButton from "../components/TertiaryButton.tsx";
import PlayButton from "../components/PlayButton.tsx";
import InstallButton from "../components/InstallButton.tsx";
import PauseButton from "../components/PauseButton.tsx";

const StorePage: React.FC = () => {
    // State for Menu Buttons (example: three menu items)
    const [activeMenu, setActiveMenu] = useState<'new' | 'trending' | 'topseller'>('new');

    // State for Sort Filter
    const [sortSelected, setSortSelected] = useState<'relevance' | 'popularity' | 'release'>('relevance');

    // State for Tags (example tags)
    const [tags, setTags] = useState({
        action: { variant: 'checked' as const, label: 'Action' },
        rpg: { variant: 'unchecked' as const, label: 'RPG' },
        strategy: { variant: 'current' as const, label: 'Strategy' },
        indie: { variant: 'filtered-tag' as const, label: 'Indie' },
        adventure: { variant: 'default-tag' as const, label: 'Adventure' },
    });

    const handleTagClick = (key: keyof typeof tags) => {
        // Cycle through variants for demo: checked -> unchecked -> current -> ...
        // For simplicity, just toggle between checked and unchecked if you want.
        setTags(prev => {
            const current = prev[key];
            let newVariant: typeof current.variant;
            if (current.variant === 'checked') newVariant = 'unchecked';
            else if (current.variant === 'unchecked') newVariant = 'current';
            else if (current.variant === 'current') newVariant = 'filtered-tag';
            else if (current.variant === 'filtered-tag') newVariant = 'default-tag';
            else newVariant = 'checked';
            return { ...prev, [key]: { ...current, variant: newVariant } };
        });
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Store Page - Component Testing Ground</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>

                {/* Search Component */}
                <section>
                    <h2 className="heading-medium">Search</h2>
                    <Search />
                </section>

                {/* Dropdown Menu */}
                <section>
                    <h2 className="heading-medium">Dropdown Menu</h2>
                    <DropdownMenu
                        triggerLabel="Select Option"
                        options={['Profile', 'Settings', 'Logout']}
                        onSelect={(opt) => console.log('Selected:', opt)}
                    />
                </section>

                {/* Menu Buttons */}
                <section>
                    <h2 className="heading-medium">Menu Buttons (active state)</h2>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <MenuButton isActive={activeMenu === 'new'} onClick={() => setActiveMenu('new')}>
                            New
                        </MenuButton>
                        <MenuButton isActive={activeMenu === 'trending'} onClick={() => setActiveMenu('trending')}>
                            Trending
                        </MenuButton>
                        <MenuButton isActive={activeMenu === 'topseller'} onClick={() => setActiveMenu('topseller')}>
                            Top Seller
                        </MenuButton>
                    </div>
                </section>

                {/* Sort Filter */}
                <section>
                    <h2 className="heading-medium">Sort Filter</h2>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <SortFilter
                            label="Relevance"
                            isSelected={sortSelected === 'relevance'}
                            onClick={() => setSortSelected('relevance')}
                        />
                        <SortFilter
                            label="Popularity"
                            isSelected={sortSelected === 'popularity'}
                            onClick={() => setSortSelected('popularity')}
                        />
                        <SortFilter
                            label="Release Date"
                            isSelected={sortSelected === 'release'}
                            onClick={() => setSortSelected('release')}
                        />
                    </div>
                </section>

                {/* Tags */}
                <section>
                    <h2 className="heading-medium">Tags (click to cycle variants)</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {(Object.keys(tags) as Array<keyof typeof tags>).map(key => (
                            <Tag
                                key={key}
                                label={tags[key].label}
                                variant={tags[key].variant}
                                onClick={() => handleTagClick(key)}
                            />
                        ))}
                    </div>
                </section>

                {/* Buttons */}
                <section>
                    <h2 className="heading-medium">Buttons</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                        <PrimaryButton onClick={() => console.log('Primary clicked')}>Primary</PrimaryButton>
                        <SecondaryButton onClick={() => console.log('Secondary clicked')}>Secondary</SecondaryButton>
                        <TertiaryButton onClick={() => console.log('Tertiary clicked')}>Tertiary</TertiaryButton>
                        <PlayButton onClick={() => console.log('Play clicked')} />
                        <InstallButton onClick={() => console.log('Install clicked')} />
                        <PauseButton onClick={() => console.log('Pause clicked')} />
                    </div>
                </section>

                {/* FilterOff Icon */}
                <section>
                    <h2 className="heading-medium">Filter Off Icon</h2>
                    <FilterOffIcon />
                </section>

                {/* Toggle Switch */}
                <section>
                    <h2 className="heading-medium">Toggle Switch</h2>
                    <Toggle defaultChecked={false} onChange={(val) => console.log('Toggle:', val)} />
                    <Toggle defaultChecked={true} onChange={(val) => console.log('Toggle 2:', val)} />
                </section>

                {/* Wishlist Button */}
                <section>
                    <h2 className="heading-medium">Wishlist Button</h2>
                    <WishlistButton defaultClicked={false} onClick={(clicked) => console.log('Wishlist:', clicked)} />
                </section>

                {/* Checkbox */}
                <section>
                    <h2 className="heading-medium">Checkbox</h2>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Checkbox defaultChecked={false} onChange={(checked) => console.log('Checkbox 1:', checked)} />
                        <Checkbox defaultChecked={true} onChange={(checked) => console.log('Checkbox 2:', checked)} />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default StorePage;