import React, {useRef, useState} from 'react';
import { AppLayout } from '../../components/AppLayout';
import { UserDeck, UserDeckRef } from '../../components/UserDeck';
import { SwipeButtons } from '../../components/SwipeButtons';
import {BottomMenu} from '../../components/BottomMenu';
import { Text } from 'react-native';

export type ViewType = 'deck' | 'likes' | 'matches' | 'profile';

export default function HomeeScreen() {
    
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
            {view === 'profile' && <Text>Profile Screen</Text>}
            <BottomMenu active={view} onChange={setView} />
        </AppLayout>
  );
}
