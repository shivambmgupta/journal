const isValidDate = (date) => (
    date && typeof date.getMonth === 'function' && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
);

export const formatDate = (date) => {
    if (!isValidDate(date))
        return "";
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let dateString = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return dateString;
};
