export default function cardsReducer(cards, action) {
    switch(action.type) {
        case 'added': {
            return [
                ...cards,
                action.item
            ]
        }
        case 'edited': {
            return cards.map((i) => {
                if(i.id === action.item.id) {
                    return {
                        ...i,
                        ...action.item
                    }
                } else {
                    return i;
                }
            })
        }
        case 'removed': {
            return cards.filter(i => i.id !== action.id);
        }
        default: {
            throw Error('unknown action: ' + action.type);
        }
    }

}