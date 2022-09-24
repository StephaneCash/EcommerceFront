// Pour ajouter dans le panier
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
};

// Pour supprimer les produits dans le panier 
export const deleteCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}