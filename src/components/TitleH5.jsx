export default function TitleH5({ children,colors }) {
    return (
        <h5 className={`bg-transparent ${colors} font-bold text-2xl md:text-3xl lg2:text-xl`}>
            {children}
        </h5>
    )
}