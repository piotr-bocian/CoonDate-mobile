import React, {useRef, useState} from 'react';
import { AppLayout } from '../../components/layout/AppLayout';
import { UserDeck, UserDeckRef } from '../../components/swipe/UserDeck';
import { SwipeButtons } from '../../components/swipe/SwipeButtons';
import {BottomMenu} from '../../components/layout/BottomMenu';
import { Text } from 'react-native';
import { ProfileScreen } from '../Profile/ProfileScreen';

export type ViewType = 'deck' | 'likes' | 'matches' | 'profile';

type Props = {
    onSignOut: () => void;
};

export default function HomeScreen({ onSignOut }: Props) {
    
    const deckRef = useRef<UserDeckRef>(null);
    const [view, setView] = useState<ViewType>('deck');

    return (
        <AppLayout>
            {view === 'deck' && <>
            <UserDeck ref={deckRef}/>
            <SwipeButtons
                onSwipeLeft={() => deckRef.current?.swipe('left')}
                onSuperLike={() => deckRef.current?.swipe('up')}
                onSwipeRight={() => deckRef.current?.swipe('right')}
               /></>}
            {view === 'likes' && <Text>Likes Screen</Text>}
            {view === 'matches' && <Text>Matches Screen</Text>}
            {view === 'profile' && <ProfileScreen onSignOut={onSignOut}/>}
            <BottomMenu active={view} onChange={setView} />
        </AppLayout>
  );
}
