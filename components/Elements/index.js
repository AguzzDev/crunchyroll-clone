const H1 = (props) => (
  <h1 className={`font-bold text-xl md:text-2xl ${props.styles}`} {...props} />
)
const H2 = (props) => (
  <h2 className={`py-2 text-gray-500 ${props.styles}`} {...props} />
)
const H3 = (props) => (
  <h3 className={`text-sm text-gray-700 ${props.styles}`} {...props} />
)

export { H1, H2, H3 }
