import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

console.log('Enzyme configurator setup script called')
configure({ adapter: new Adapter() })
