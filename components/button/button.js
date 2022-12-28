const Button = ({ children, display, justifyContent, alignItems, width, height, backgroundColor, color, borderRadius, fontWeight, boxShadow }) => {
    return (
        <button
            style={{
                boxShadow: boxShadow,
                fontWeight: fontWeight,
                display: display,
                justifyContent: justifyContent,
                alignItems: alignItems,
                width: width,
                height: height,
                backgroundColor: backgroundColor,
                color: color,
                border: "none",
                borderRadius: borderRadius,
            }}>
            {children}
        </button>
    )
}

export default Button