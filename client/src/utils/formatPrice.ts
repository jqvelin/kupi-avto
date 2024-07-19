export const formatPrice = (price: string): string => {
    let priceValueOnly = price.slice(1).split("").reverse();
    return (
        '$' + priceValueOnly.reduce((acc, cur) => {
            acc = cur + acc;
            if (acc.split(" ")[0].length === 3) acc = " " + acc;
            return acc;
        }, "").trim()
    );
};
