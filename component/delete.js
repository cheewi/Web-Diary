export function deleteCard(cards, index, saveCards, renderCards) {
    cards.splice(index, 1);
    saveCards();
    renderCards();
}
