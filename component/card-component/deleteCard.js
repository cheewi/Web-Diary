// Exporting the function along with its parameters

export function deleteCard(cards, index, saveCards, renderCards) {
    cards.splice(index, 1);
    saveCards();
    renderCards();
}
