import icons from 'biings-ds/build/bds-icons.svg'

const Icon = (props) => {
  const {
    name,
    size = 16,
    color = 'primary',
    className,
    style: spanStyle
  } = props || {}

  const svgStyle = {
    stroke: `var(--color-${color})`,
    fill: `var(--color-${color})`,
  }

  return (
    <span className={className} style={spanStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={svgStyle}>
        <use xlinkHref={`${icons}#${name}`}></use>
      </svg>
    </span>
  )
}

export default Icon
