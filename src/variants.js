export const slideInFromLeft = (direction,delay) => {
    return {
        hidden: {
            x:  direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y:  direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0, 
        },
        show: {
            x: 0, 
            opacity: 1, 
            transition: {
                type: 'tween',
                duration:1.2 , 
                delay: delay, 
            },
        },
    };
};
