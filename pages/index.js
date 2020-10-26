import Icon from '../components/Icon'

const Page = ({ props }) => {
  return (
    <div className='container'>
      <div className='box is-floating mt-3 level'>
        <div className='level-left'>
          <Icon className='level-item' name='biings-care'/>
          <p className='level-item'>Hello, world!</p>
        </div>
        <hr className='is-visible' />
        <div className='level-left'>
          <button className='level-item button is-primary'>Click Me!</button>
        </div>
      </div>
    </div>
  )
}

export default Page
